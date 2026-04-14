import Link from "next/link"
import { Button } from "@/components/ui/button"
import PricingCards from "@/components/pricing-cards"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const reassurancePoints = [
  {
    title: "No fake urgency",
    description: "If something is critical, we say so. If it can wait until after lunch, we say that too.",
  },
  {
    title: "Less jargon, more decisions",
    description: "Your team gets clear priorities instead of three pages of words like strategic enablement posture fabric.",
  },
  {
    title: "Built for real companies",
    description: "Works for businesses with auditors, legacy systems, and at least one printer that behaves like a threat actor.",
  },
]

const testimonials = [
  {
    quote: "CyberShield turned our security roadmap from a guilt document into an actual plan.",
    person: "Priya, Head of Ops",
  },
  {
    quote: "For the first time, the board report made sense and nobody asked if ransomware was a plugin.",
    person: "Marcus, CIO",
  },
  {
    quote: "They found three dumb risks in week one, which was humbling but also extremely useful.",
    person: "Elena, IT Manager",
  },
]

const faqs = [
  {
    question: "Do you help with compliance?",
    answer: "Yes. NIST, ISO 27001, CIS, and the delicate art of turning technical work into auditor-friendly proof.",
  },
  {
    question: "Can smaller teams use this?",
    answer: "Absolutely. You do not need a twelve-person security department to deserve basic competence and fewer surprises.",
  },
  {
    question: "Will you drown us in alerts?",
    answer: "No. The platform is opinionated about noise because nobody improves security by ignoring 400 meaningless warnings.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 py-12 text-white md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                Cyber security for teams allergic to nonsense
              </p>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Serious protection. Slightly unhinged copy. Very little panic.
              </h1>
              <p className="mx-auto max-w-[760px] text-blue-100 md:text-xl">
                CyberShield helps you assess risk, tighten controls, and track compliance without making every meeting
                feel like a hostage negotiation with a spreadsheet.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-blue-100">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-200 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/frameworks">See the Frameworks</Link>
              </Button>
            </div>
            <p className="max-w-[680px] text-sm text-blue-200">
              Built for security leads, compliance teams, and the one exhausted admin who keeps everything from
              catching fire.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      <section className="w-full bg-white py-12 md:py-20">
        <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-3">
          {reassurancePoints.map((point) => (
            <Card key={point.title} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Frameworks Section */}
      <FrameworksSection />

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Pick the level of protection your budget can emotionally process.
              </p>
            </div>
            <PricingCards />
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-950 py-12 text-white md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What people say after the panic subsides</h2>
            <p className="text-slate-300">
              A few representative reactions from teams who replaced vibes-based security with a plan.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.person} className="border-slate-800 bg-slate-900 text-white">
                <CardContent className="space-y-4 p-6">
                  <p className="text-lg leading-8 text-slate-100">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="text-sm font-medium text-blue-200">{testimonial.person}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently asked, occasionally muttered</h2>
            <p className="text-slate-600">
              The practical questions usually arrive right after the phrase &ldquo;this actually looks useful.&rdquo;
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to stop calling luck a strategy?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Start with a real plan, real controls, and reporting that does not read like it was assembled by a
                malfunctioning printer.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-200">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
