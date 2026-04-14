import { Shield, Lock, Database, Server, Users, CheckCircle } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Comprehensive Protection",
      description: "Multi-layered security approach to protect your organization from various cyber threats.",
    },
    {
      icon: <Lock className="h-10 w-10 text-blue-600" />,
      title: "Framework Compliance",
      description: "Align with industry-standard frameworks like NIST, ISO 27001, CIS, and more.",
    },
    {
      icon: <Database className="h-10 w-10 text-blue-600" />,
      title: "Data Security",
      description: "Protect sensitive data with advanced encryption and access controls.",
    },
    {
      icon: <Server className="h-10 w-10 text-blue-600" />,
      title: "Infrastructure Security",
      description: "Secure your network infrastructure against unauthorized access and attacks.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Security Training",
      description: "Educate your team on security best practices and threat awareness.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
      title: "Compliance Reporting",
      description: "Generate detailed reports to demonstrate compliance with regulatory requirements.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Our platform offers comprehensive security solutions to protect your organization.
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

