"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Check,
  Copy,
  Loader2,
  Lock,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ABC_METHOD, WALKTHROUGH_DISCLAIMER } from "@/lib/disclaimer"
import { PLAY_EXAMPLE, type WalkthroughResult } from "@/lib/archive"

const FREE_USE_KEY = "abccyber_play_uses"
const EXAMPLE = PLAY_EXAMPLE

type WalkthroughResponse = WalkthroughResult & {
  aiAvailable?: boolean
  notice?: string
  error?: string
}

function SubscribeWall() {
  return (
    <Card className="border-blue-200 shadow-lg">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <Lock className="h-8 w-8 text-blue-600" />
        </div>
        <CardTitle className="text-2xl">Paid plans include the rest</CardTitle>
        <CardDescription className="mt-2 text-base">
          You used the free walkthrough. Early Adopter ($5/mo) and Pro ($10/mo) include unlimited
          What&apos;s the play when billing launches. Checkout is not live — join the waitlist.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-slate-600">
        <p>Free still has the lessons. The tool is a layer on top of that archive, not a new product.</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button asChild className="w-full" size="lg">
          <Link href="/pricing">See pricing</Link>
        </Button>
        <Button asChild variant="outline" className="w-full" size="sm">
          <Link href="/learn/phishing-awareness">Or just take the phishing lesson</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function WhatsThePlayTool() {
  const [scenario, setScenario] = useState("")
  const [step, setStep] = useState<"form" | "loading" | "result" | "wall">("form")
  const [result, setResult] = useState<WalkthroughResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const used = localStorage.getItem(FREE_USE_KEY)
    if (used && parseInt(used, 10) >= 1) {
      setStep("wall")
    }
  }, [])

  const run = useCallback(async () => {
    setError(null)
    setStep("loading")
    try {
      const response = await fetch("/api/walkthrough", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario }),
      })
      const data = (await response.json()) as WalkthroughResponse
      if (!response.ok) {
        throw new Error(data.error || `Server returned ${response.status}`)
      }
      if (typeof window !== "undefined") {
        localStorage.setItem(FREE_USE_KEY, "1")
      }
      setResult(data)
      setStep("result")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not build a walkthrough.")
      setStep("form")
    }
  }, [scenario])

  const copyResult = useCallback(() => {
    if (!result) return
    const text = [
      `Play: ${result.play}`,
      "",
      `A — Assess: ${result.method.assess}`,
      `B — Break down: ${result.method.breakDown}`,
      `C — Choose:\n${result.method.choose.map((item) => `- ${item}`).join("\n")}`,
      "",
      "Citations:",
      ...result.citations.map((c) => `- ${c.title}: ${c.href}`),
      "",
      result.disclaimer,
    ].join("\n")
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result])

  if (step === "wall") {
    return <SubscribeWall />
  }

  return (
    <div className="space-y-8">
      {step !== "result" && (
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Paste the scenario</CardTitle>
            <CardDescription>
              Email, text, call notes, or &ldquo;my boss asked me to wire this.&rdquo; Strip passwords and
              one-time codes first.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Textarea
              value={scenario}
              onChange={(event) => setScenario(event.target.value)}
              rows={10}
              className="min-h-[180px] resize-y font-mono text-sm"
              placeholder={EXAMPLE}
              disabled={step === "loading"}
            />
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setScenario(EXAMPLE)}
                disabled={step === "loading"}
              >
                Use the lesson example
              </Button>
              <Badge variant="secondary">Free: 1 walkthrough</Badge>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
          </CardContent>
          <CardFooter className="flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              One job. Not a chat. If the model key is missing, you still get the archive version.
            </p>
            <Button onClick={run} disabled={step === "loading" || scenario.trim().length < 20}>
              {step === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Walking through it
                </>
              ) : (
                <>
                  What&apos;s the play
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === "loading" && (
        <p className="text-center text-sm text-slate-500">
          Matching the archive, then drafting in the ABC method. No sirens.
        </p>
      )}

      {step === "result" && result && (
        <div className="space-y-6">
          {result.notice && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              {result.notice}
            </div>
          )}

          <Card className="border-blue-200">
            <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">The play</p>
                <CardTitle className="mt-1 text-2xl">{result.play}</CardTitle>
                <CardDescription className="mt-2">
                  {result.methodName} · source: {result.source === "ai+archive" ? "model + archive" : "lesson archive"}
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={copyResult}>
                {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                <span className="ml-1">{copied ? "Copied" : "Copy"}</span>
              </Button>
            </CardHeader>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { letter: ABC_METHOD.steps[0].letter, title: ABC_METHOD.steps[0].title, body: result.method.assess },
              { letter: ABC_METHOD.steps[1].letter, title: ABC_METHOD.steps[1].title, body: result.method.breakDown },
              {
                letter: ABC_METHOD.steps[2].letter,
                title: ABC_METHOD.steps[2].title,
                body: result.method.choose.join(" "),
                list: result.method.choose,
              },
            ].map((block) => (
              <Card key={block.letter} className="border-slate-200">
                <CardHeader>
                  <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {block.letter}
                  </div>
                  <CardTitle className="text-lg">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {block.list ? (
                    <ul className="space-y-2 text-sm leading-6 text-slate-600">
                      {block.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-6 text-slate-600">{block.body}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What looks off</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  {result.redFlags.map((item) => (
                    <li key={item} className="flex gap-2">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do not</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  {result.doNot.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do instead</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  {result.doInstead.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="h-5 w-5 text-blue-700" />
                Cited from the archive
              </CardTitle>
              <CardDescription>Real lessons and frameworks. Not a vibe summary.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {result.citations.map((citation) => (
                <div key={citation.id} className="rounded-lg border border-slate-200 p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link href={citation.href} className="font-semibold text-blue-700 hover:underline">
                      {citation.title}
                    </Link>
                    <Badge variant="outline">{citation.kind}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{citation.excerpt}</p>
                  <p className="mt-1 text-xs text-slate-500">{citation.why}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setStep("form")
                setResult(null)
                setScenario("")
              }}
            >
              Paste another
            </Button>
            <Button asChild>
              <Link href="/learn">Back to lessons</Link>
            </Button>
          </div>
        </div>
      )}

      <div className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        <Shield className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
        <p>{WALKTHROUGH_DISCLAIMER}</p>
      </div>
    </div>
  )
}
