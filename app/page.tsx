import Link from "next/link"
import { Button } from "@/components/ui/button"
import PricingCards from "@/components/pricing-cards"
import { EmailCapture } from "@/components/email-capture"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsNew from "@/components/whats-new"
import { JsonLd } from "@/components/json-ld"
import HomeHero from "@/components/home-hero"
import HomeScrollStage from "@/components/home-scroll-stage"
import HomeLessonRail from "@/components/home-lesson-rail"
import HomeWhatYouGet from "@/components/home-what-you-get"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ABC of Cyber",
  url: "https://abcofcyber.com",
  description:
    "A written cyber awareness course. Phishing lessons start with the invoice PDF you should not open.",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ABC of Cyber",
  url: "https://abcofcyber.com",
}


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
  {
    question: "Will it nag us about passwords?",
    answer: "Only if you keep using your dog's name. We are pro-password manager and pro-MFA, in that order.",
  },
  {
    question: "Is What's the play a new product?",
    answer:
      "No. It is a layer on this site: paste a suspicious scenario, get a walkthrough cited from existing lessons. Education only — not legal advice, not a chatbot.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <HomeScrollStage>
        <HomeHero />
        <HomeLessonRail />
        <HomeWhatYouGet />
      </HomeScrollStage>

      {/* Below the fold — existing homepage. Pricing untouched. */}
      <FeatureSection />

      <section className="w-full border-y bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto flex flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">One job, not a chatbot</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What&apos;s the play</h2>
            <p className="text-slate-600">
              Paste an &ldquo;is this phishing?&rdquo; scenario. Get a plain-English walkthrough using the ABC
              method, cited from the lessons already on this site. Education only. No sirens.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/whats-the-play">Open the walkthrough</Link>
          </Button>
        </div>
      </section>

      <WhatsNew />

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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Training pricing</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                One price map: Free, Early Adopter $5/mo, and Pro $10/mo. What&apos;s the play is included on paid
                plans, or $29/mo as a dedicated seat.
              </p>
            </div>
            <PricingCards />
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

      {/* Email Capture Section */}
      <section className="w-full bg-gray-950 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <EmailCapture
            variant="hero"
            theme="cyber"
            heading="Join the Defense Force"
            subheading="Weekly threat intel, framework guides you can actually use, and early access to new modules. No fluff, no fear-mongering — just useful stuff."
            source="homepage-cta"
            showName
          />
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
