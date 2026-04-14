import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-16">
      <Card className="w-full max-w-md border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Self-serve signup is still under construction, mostly because secure onboarding deserves better than vibes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-slate-700">
          <p>If you want access now, use the contact page and we will route you through a setup path with fewer traps.</p>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/contact">Contact sales</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/get-started">See how it works</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
