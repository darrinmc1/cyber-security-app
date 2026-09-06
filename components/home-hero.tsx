import Link from "next/link"
import { ArrowLeft, MailWarning } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { lessons } from "@/lib/lessons"
import { ABC_METHOD } from "@/lib/disclaimer"
import { PLAY_EXAMPLE } from "@/lib/archive"
import { WAITLIST_HREF } from "@/lib/pricing"
import { getHumorEnabled } from "@/lib/humor"

const FIRST_LESSON_HREF = "/learn/phishing-awareness"
const TOPICS_HREF = "/learn"

const lessonAnatomy = [
  {
    n: "1",
    title: "Spoofed Sender",
    body: "The “From” name says “IT Support” but the email address is it-support@secure-update-g43f.top",
  },
  {
    n: "2",
    title: "Urgent Subject Line",
    body: "“Action Required: Your Email Password Will Expire Today” — creates panic to bypass critical thinking.",
  },
  {
    n: "3",
    title: "Generic Greeting",
    body: "“Dear Valued User” — legitimate companies know your name.",
  },
] as const

const primer = [
  {
    letter: ABC_METHOD.steps[0].letter,
    phrase: "Attachment",
    rest: "the PDF you did not request. Assess the ask before you open it.",
  },
  {
    letter: ABC_METHOD.steps[1].letter,
    phrase: "BEC",
    rest: "the “accounts” email that is not accounts. Break down the play.",
  },
  {
    letter: ABC_METHOD.steps[2].letter,
    phrase: "Click",
    rest: "the only move they need. Leave the file closed.",
  },
] as const

const beginnerPeek = [
  ...lessons.filter((lesson) => lesson.slug === "phishing-awareness"),
  ...lessons.filter((lesson) => lesson.difficulty === "Beginner" && lesson.slug !== "phishing-awareness"),
]
  .slice(0, 4)
  .map((lesson) => ({
    title: lesson.title,
    duration: lesson.duration,
    start: lesson.slug === "phishing-awareness",
  }))

function HeroProductStill() {
  return (
    <div className="home-still-frame home-primer-still-clip relative h-[22rem] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:h-[26rem]">
      <div className="home-primer-still-pan origin-top-left" aria-hidden="true">
        <div className="w-[36rem] bg-white text-left md:w-[40rem]">
          <div className="border-b bg-slate-50 px-6 py-5">
            <p className="mb-4 inline-flex items-center text-sm text-slate-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Lessons
            </p>
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-lg bg-red-100 p-2">
                <MailWarning className="h-6 w-6 text-red-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">15 min</Badge>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Phishing Awareness</h2>
            <p className="mt-3 text-base text-slate-600">
              Phishing is the most common entry point for cyber attacks. This lesson teaches you how to spot the red
              flags, inspect suspicious messages, and respond appropriately.
            </p>
          </div>
          <div className="px-6 py-5">
            <h3 className="mb-3 text-xl font-bold text-slate-900">Anatomy of a Phishing Email</h3>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="space-y-2 text-sm">
                {lessonAnatomy.map((row) => (
                  <div key={row.n} className="rounded-md bg-white p-2">
                    <p className="font-medium text-slate-900">
                      {row.n}. {row.title}
                    </p>
                    <p className="text-slate-600">{row.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 p-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                What&apos;s the play · paste the scenario
              </p>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-[11px] leading-5 text-slate-800">
                {PLAY_EXAMPLE}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BeginnerTrackPeek() {
  if (beginnerPeek.length === 0) return null

  return (
    <div className="home-still-peek rounded-2xl border border-white/10 bg-[#121722] p-5 text-left shadow-xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-400">Beginner track</p>
      <p className="mt-2 text-sm text-slate-400">Real lessons on this site. No invented completion bar.</p>
      <ul className="mt-4 space-y-3">
        {beginnerPeek.map((lesson) => (
          <li key={lesson.title} className="flex items-start gap-3 text-sm leading-5">
            <span
              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${lesson.start ? "bg-blue-400" : "bg-slate-600"}`}
              aria-hidden="true"
            />
            <span className={lesson.start ? "text-white" : "text-slate-400"}>
              {lesson.title}
              <span className="block text-xs text-slate-500">{lesson.duration}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function HeroProductStack() {
  return (
    <div className="home-product-stack relative">
      <div className="pointer-events-none absolute -right-4 top-10 hidden w-[72%] lg:block" aria-hidden="true">
        <BeginnerTrackPeek />
      </div>
      <div className="relative z-10 lg:mr-8">
        <HeroProductStill />
      </div>
    </div>
  )
}

export default function HomeHero() {
  const lessonCount = lessons.length
  const beginnerCount = lessons.filter((lesson) => lesson.difficulty === "Beginner").length

  return (
    <section className="home-primer-hero flex min-h-[calc(100svh-4rem)] flex-col text-white">
      <div className="container mx-auto grid w-full flex-1 grid-cols-1 items-center gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="max-w-xl space-y-5 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Phishing lesson first
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Stop clicking the invoice PDF from a stranger.
          </h1>
          <p className="text-slate-300 md:text-xl">
            That file is named invoice. The sender is not accounts. The lesson is the three checks you run before you
            open it.
          </p>
          {getHumorEnabled() ? (
            <p className="text-sm leading-6 text-slate-400">
              If you did not order the toner, the toner invoice can wait. Or forever.
            </p>
          ) : null}
          <p className="text-sm text-slate-400">
            {lessonCount} written lessons on this site. {beginnerCount} marked beginner. Free to read. Checkout is not
            live.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-blue-600 px-7 text-white hover:bg-blue-500"
            >
              <Link href={FIRST_LESSON_HREF}>Open the phishing lesson</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              <Link href={TOPICS_HREF}>See the other lessons</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-slate-300 hover:bg-white/10 hover:text-white">
              <Link href={WAITLIST_HREF}>Join the waitlist</Link>
            </Button>
          </div>
        </div>

        <HeroProductStack />
      </div>

      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col px-4 md:flex-row md:px-6">
          {primer.map((item, index) => (
            <p
              key={item.letter}
              className={`flex-1 py-5 text-left text-sm leading-6 text-slate-300 md:py-6 ${
                index > 0 ? "border-t border-white/10 md:border-l md:border-t-0 md:pl-6" : ""
              } ${index < primer.length - 1 ? "md:pr-6" : ""}`}
            >
              <span className="mr-2 font-bold text-sky-400">{item.letter}</span>
              is for {item.phrase} — {item.rest}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
