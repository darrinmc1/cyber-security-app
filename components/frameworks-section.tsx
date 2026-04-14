import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FrameworksSection() {
  const frameworks = [
    {
      id: "nist",
      name: "NIST Cybersecurity Framework",
      description:
        "A practical framework for identifying risk, protecting systems, spotting trouble, responding well, and recovering without interpretive dance.",
      categories: [
        {
          name: "Identify",
          description:
            "Figure out what you have before an attacker does you the courtesy of documenting it for you.",
        },
        {
          name: "Protect",
          description:
            "Put controls in place so basic attacks bounce off instead of strolling through the lobby.",
        },
        {
          name: "Detect",
          description:
            "Notice suspicious behavior early, ideally before accounting starts asking about new bank details.",
        },
        {
          name: "Respond",
          description:
            "Contain incidents with a plan more sophisticated than yelling into the group chat.",
        },
        {
          name: "Recover",
          description:
            "Restore systems, learn the lesson, and avoid becoming a conference cautionary tale.",
        },
      ],
    },
    {
      id: "iso27001",
      name: "ISO 27001",
      description:
        "An information security management system for teams that need rigor, evidence, and fewer 'trust me, bro' processes.",
      categories: [
        { name: "Risk Assessment", description: "Work out what can go wrong before it does the presentation for you." },
        { name: "Security Policy", description: "Set rules people can follow without requiring a legal translator." },
        { name: "Asset Management", description: "Track important assets so the mystery server under Gary's desk stops being folklore." },
        { name: "Access Control", description: "Give the right people access to the right things, then stop there." },
        { name: "Cryptography", description: "Encrypt sensitive information so theft is less immediately useful." },
      ],
    },
    {
      id: "cis",
      name: "CIS Controls",
      description:
        "Action-oriented safeguards for locking down common weaknesses before they become recurring calendar events.",
      categories: [
        {
          name: "Basic Controls",
          description: "Do the fundamentals first. Heroics are not a substitute for patching and asset inventory.",
        },
        {
          name: "Foundational Controls",
          description: "Technical protections with immediate defensive value and far less ceremony.",
        },
        {
          name: "Organizational Controls",
          description: "Process and accountability so security does not rely on one competent insomniac.",
        },
        {
          name: "Implementation Groups",
          description: "Right-sized guidance for teams that are tiny, growing, or gloriously overextended.",
        },
        { name: "Measurement & Metrics", description: "Proof that the controls work, not just that someone said they would." },
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
              Standards you recognize, translated into work your team can finish before morale collapses.
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
