import Link from "next/link"
import { ShieldCheck, Radar, Lock, ClipboardCheck, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const frameworks = [
  {
    name: "NIST CSF",
    icon: ShieldCheck,
    summary: "The grown-up framework for knowing what you own, protecting it, spotting fires, and not making the fire worse.",
    quip: "Basically: inventory your chaos before your chaos inventories you.",
  },
  {
    name: "ISO 27001",
    icon: ClipboardCheck,
    summary: "A management system for proving security is a process, not just one very stressed person named Chris.",
    quip: "Excellent for organizations that enjoy evidence, policies, and sleeping at night.",
  },
  {
    name: "CIS Controls",
    icon: Lock,
    summary: "Concrete technical safeguards that stop obvious problems before they become headline material.",
    quip: "Less philosophy, more 'please patch the thing.'",
  },
  {
    name: "Threat Monitoring",
    icon: Radar,
    summary: "Continuous visibility so suspicious behavior gets caught before it starts introducing itself to payroll.",
    quip: "Think less crystal ball, more competent paranoia.",
  },
]

const comparisonRows = [
  {
    focus: "NIST CSF",
    bestFor: "Teams that want a clear security operating model",
    reality: "Excellent when you need structure without sounding like a filing cabinet.",
  },
  {
    focus: "ISO 27001",
    bestFor: "Organizations that need formal governance and evidence",
    reality: "Very good for auditability. Slightly less good if your team hates documentation on principle.",
  },
  {
    focus: "CIS Controls",
    bestFor: "Teams that need concrete technical actions quickly",
    reality: "The framework equivalent of rolling up your sleeves and patching the obvious mess first.",
  },
]

export default function FrameworksPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Frameworks</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Serious frameworks, explained like a human wrote them
            </h1>
            <p className="text-lg text-slate-600">
              CyberShield maps the big-name standards into a workflow your team can actually follow, without requiring
              a shrine to spreadsheet suffering.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-started">Start with the least painful path</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard">See the dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-12 md:px-6 lg:grid-cols-2">
        {frameworks.map(({ name, icon: Icon, summary, quip }) => (
          <Card key={name} className="border-slate-200 bg-white">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Icon className="h-6 w-6 text-blue-700" />
              </div>
              <CardTitle>{name}</CardTitle>
              <CardDescription>{summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-slate-600">{quip}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container mx-auto px-4 pb-12 md:px-6">
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle>Choosing a framework without pretending they are all the same</CardTitle>
            <CardDescription>
              They overlap, but they are not interchangeable. That is why we map the work instead of making you pick a
              favorite acronym and hope for the best.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {comparisonRows.map((row) => (
              <div key={row.focus} className="rounded-lg border border-slate-200 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">{row.focus}</h3>
                    <p className="text-sm text-slate-600">{row.bestFor}</p>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-slate-600">{row.reality}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="border-t bg-slate-900 py-12 text-white">
        <div className="container mx-auto flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Want the frameworks translated into an actual rollout?</h2>
            <p className="text-slate-300">
              Good. A standards document is not a strategy, and a strategy is not a backlog until someone does the
              boring part properly.
            </p>
          </div>
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-200">
            <Link href="/get-started">
              Build the plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
