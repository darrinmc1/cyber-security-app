import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FrameworksSection() {
  const frameworks = [
    {
      id: "nist",
      name: "NIST Cybersecurity Framework",
      description:
        "A comprehensive framework developed by the National Institute of Standards and Technology to improve cybersecurity risk management.",
      categories: [
        {
          name: "Identify",
          description:
            "Develop organizational understanding to manage cybersecurity risk to systems, assets, data, and capabilities.",
        },
        {
          name: "Protect",
          description:
            "Develop and implement appropriate safeguards to ensure delivery of critical infrastructure services.",
        },
        {
          name: "Detect",
          description:
            "Develop and implement appropriate activities to identify the occurrence of a cybersecurity event.",
        },
        {
          name: "Respond",
          description:
            "Develop and implement appropriate activities to take action regarding a detected cybersecurity event.",
        },
        {
          name: "Recover",
          description:
            "Develop and implement appropriate activities to maintain plans for resilience and to restore any capabilities or services.",
        },
      ],
    },
    {
      id: "iso27001",
      name: "ISO 27001",
      description:
        "An international standard for information security management systems (ISMS) that provides a systematic approach to managing sensitive company information.",
      categories: [
        { name: "Risk Assessment", description: "Identify and evaluate information security risks." },
        { name: "Security Policy", description: "Define organizational security policies and procedures." },
        { name: "Asset Management", description: "Identify and manage information assets." },
        { name: "Access Control", description: "Implement controls to restrict access to information and facilities." },
        { name: "Cryptography", description: "Use encryption to protect sensitive information." },
      ],
    },
    {
      id: "cis",
      name: "CIS Controls",
      description:
        "A set of best practices for securing IT systems and data, developed by the Center for Internet Security.",
      categories: [
        {
          name: "Basic Controls",
          description: "Fundamental controls that should be implemented in every organization.",
        },
        {
          name: "Foundational Controls",
          description: "Technical controls that provide clear security benefits and support the basic controls.",
        },
        {
          name: "Organizational Controls",
          description: "Controls focused on people and processes to support the technical controls.",
        },
        {
          name: "Implementation Groups",
          description: "Guidance for organizations of different sizes and capabilities.",
        },
        { name: "Measurement & Metrics", description: "Methods to measure the effectiveness of security controls." },
      ],
    },
  ]

  return (
    <section id="frameworks" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Security Frameworks</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Our platform is built on industry-leading security frameworks to ensure comprehensive protection.
            </p>
          </div>
        </div>

        <Tabs defaultValue="nist" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            {frameworks.map((framework) => (
              <TabsTrigger key={framework.id} value={framework.id}>
                {framework.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {frameworks.map((framework) => (
            <TabsContent key={framework.id} value={framework.id} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{framework.name}</CardTitle>
                  <CardDescription>{framework.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {framework.categories.map((category, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h3 className="font-bold mb-2">{category.name}</h3>
                        <p className="text-sm text-gray-500">{category.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

