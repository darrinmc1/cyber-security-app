import Link from "next/link"
import { Button } from "@/components/ui/button"
import PricingCards from "@/components/pricing-cards"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Comprehensive Cyber Security Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Protect your organization with our advanced cyber security platform based on industry-leading
                frameworks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-200">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 bg-blue-800"
              >
                <Link href="/frameworks">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Frameworks Section */}
      <FrameworksSection />

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Choose the perfect plan for your organization's security needs.
              </p>
            </div>
            <PricingCards />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Secure Your Organization?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Get started today and take control of your cyber security posture.
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

