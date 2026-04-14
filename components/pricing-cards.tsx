import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PricingCards() {
  const pricingPlans = [
    {
      name: "Basic",
      description: "Essential security features for small businesses",
      price: "$99",
      period: "per month",
      features: [
        "Vulnerability scanning",
        "Basic security assessment",
        "Email security",
        "Security awareness training",
        "24/7 monitoring",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Advanced security for growing organizations",
      price: "$299",
      period: "per month",
      features: [
        "Everything in Basic",
        "Compliance management",
        "Advanced threat protection",
        "Incident response planning",
        "Risk assessment",
        "Dedicated security advisor",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Comprehensive security for large organizations",
      price: "Custom",
      period: "contact for pricing",
      features: [
        "Everything in Professional",
        "Custom security policies",
        "Advanced compliance reporting",
        "Penetration testing",
        "Security architecture review",
        "Executive reporting",
        "24/7 dedicated support",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {pricingPlans.map((plan, index) => (
        <Card key={index} className={`flex flex-col ${plan.popular ? "border-blue-500 shadow-lg" : ""}`}>
          {plan.popular && (
            <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">Most Popular</div>
          )}
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-500 ml-2">{plan.period}</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className={`w-full ${plan.popular ? "bg-blue-500 hover:bg-blue-600" : ""}`}>
              <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.cta}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

