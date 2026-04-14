import Link from "next/link"
import { ArrowRight, ClipboardList, Shield, Siren, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    title: "Find the obvious holes",
    description: "We start with an assessment so nobody has to keep guessing whether the firewall is decorative.",
    icon: ClipboardList,
  },
  {
    title: "Prioritize the chaos",
    description: "Not every issue deserves a panic. We rank what matters so the team can stop doom-scrolling CVEs.",
    icon: Siren,
  },
  {
    title: "Fix the expensive mistakes",
    description: "Controls, policies, alerts, and accountability. Less improv theatre, more defense-in-depth.",
    icon: Wrench,
  },
  {
    title: "Keep watch without losing your mind",
    description: "Dashboards and reporting keep everyone informed, including the executives who only read page one.",
    icon: Shield,
  },
]

const promises = [
  "You will know what to do first.",
  "You will not be handed a fifty-page deck and a vague blessing.",
  "Your stakeholders will get a roadmap they can understand without a decoder ring.",
]

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Get Started</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Start securing things before the interns become folklore
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              CyberShield is built for teams that need a sensible first move, not a 94-step onboarding ritual with a
              PDF nobody finishes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">
                  Talk to a human
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/frameworks">See the frameworks</Link>
              </Button>
            </div>
          </div>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle>What happens first</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-slate-700">
              <p>You tell us what keeps you awake.</p>
              <p>We translate that into a plan that does not require twelve committees and a scented candle.</p>
              <p>You get a dashboard, priorities, and a route to compliance that feels more practical than ceremonial.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2">
          {steps.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-slate-200 bg-slate-900 text-white">
            <CardHeader>
              <CardTitle>What we promise not to do</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-slate-200">
              <p>No consultant fog machine.</p>
              <p>No fake maturity theatre where every issue gets labeled transformational.</p>
              <p>No leaving your team alone with a recommendations spreadsheet and a kind smile.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What you get instead</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {promises.map((promise) => (
                <div key={promise} className="rounded-lg border p-4 text-sm leading-6 text-slate-600">
                  {promise}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-blue-900 py-12 text-white">
        <div className="container mx-auto flex flex-col gap-4 px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight">If you are waiting for the perfect time, that is adorable</h2>
          <p className="mx-auto max-w-2xl text-blue-100">
            Start with the messy version. Security programs get better by existing, not by staying in a planning
            document until everyone feels emotionally ready.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              <Link href="/contact">Book the first conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
