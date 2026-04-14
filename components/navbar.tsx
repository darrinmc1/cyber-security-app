"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { href: "/", label: "Home" },
    { href: "/frameworks", label: "Frameworks" },
    { href: "/get-started", label: "Get Started" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/contact", label: "Contact" },
  ]

  const frameworks = [
    { href: "/frameworks/nist", label: "NIST Cybersecurity Framework" },
    { href: "/frameworks/iso27001", label: "ISO 27001" },
    { href: "/frameworks/cis", label: "CIS Controls" },
  ]

  const solutions = [
    { href: "/solutions/assessment", label: "Security Assessment" },
    { href: "/solutions/implementation", label: "Security Implementation" },
    { href: "/solutions/training", label: "Security Training" },
    { href: "/solutions/compliance", label: "Compliance Management" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">CyberShield</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-10">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Frameworks</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {frameworks.map((framework) => (
                      <li key={framework.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={framework.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{framework.label}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((solution) => (
                      <li key={solution.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={solution.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{solution.label}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/get-started" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Get Started</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex gap-4">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-4">
                {routes.map((route) => (
                  <Button
                    key={route.href}
                    variant="ghost"
                    className={cn("justify-start", pathname === route.href && "font-bold")}
                    asChild
                  >
                    <Link href={route.href} onClick={() => setIsOpen(false)}>
                      {route.label}
                    </Link>
                  </Button>
                ))}
                <div className="h-px bg-border my-2" />
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

