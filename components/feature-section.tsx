import { Shield, Lock, Database, Server, Users, CheckCircle } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Protection That Covers More Than Hope",
      description: "Layered defenses for endpoints, identities, and infrastructure, because positive thinking is not a control.",
    },
    {
      icon: <Lock className="h-10 w-10 text-blue-600" />,
      title: "Compliance Without the Ritual Suffering",
      description: "Map your work to NIST, ISO 27001, and CIS without sacrificing a quarter to formatting evidence.",
    },
    {
      icon: <Database className="h-10 w-10 text-blue-600" />,
      title: "Data Security",
      description: "Lock down sensitive data with encryption, permissions, and the radical concept of knowing where it lives.",
    },
    {
      icon: <Server className="h-10 w-10 text-blue-600" />,
      title: "Infrastructure Security",
      description: "Harden the stack before a mystery port and a stale VM become the stars of your next incident review.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Training People Genuinely Remember",
      description: "Awareness programs that teach safer behavior without subjecting everyone to lifeless compliance theater.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
      title: "Reporting Executives Might Actually Read",
      description: "Turn technical progress into clear reports that make sense to leadership, auditors, and tired humans.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Useful controls, practical workflows, and none of the empty “military-grade” chest beating.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                {feature.icon}
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
