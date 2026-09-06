import Link from "next/link"
import { lessons } from "@/lib/lessons"
import HomeReveal from "@/components/home-reveal"

const RAIL_SLUGS = ["phishing-awareness", "password-security"] as const

const FOLD_BLURB: Partial<Record<(typeof RAIL_SLUGS)[number], string>> = {
  "phishing-awareness":
    "Invoice PDFs, fake IT resets, links you should not follow. Same 15-minute lesson as the still above.",
}

export default function HomeLessonRail() {
  const cards = RAIL_SLUGS.map((slug) => lessons.find((lesson) => lesson.slug === slug)).filter(
    (lesson): lesson is (typeof lessons)[number] => Boolean(lesson),
  )

  if (cards.length === 0) return null

  return (
    <section className="border-t border-white/10">
      <div className="container mx-auto grid gap-5 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-2">
        {cards.map((lesson, index) => (
          <HomeReveal key={lesson.slug} delayMs={index * 90}>
            <Link
              href={`/learn/${lesson.slug}`}
              className="home-layer-card group block rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-blue-400/40 hover:bg-white/[0.05] md:p-8"
            >
              <p className="text-sm font-medium text-sky-400">
                Written · {lesson.duration} · free
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                {lesson.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 md:text-base">
                {FOLD_BLURB[lesson.slug as (typeof RAIL_SLUGS)[number]] ?? lesson.summary}
              </p>
              <p className="mt-6 text-sm font-medium text-blue-300 group-hover:text-blue-200">
                Open the lesson
              </p>
            </Link>
          </HomeReveal>
        ))}
      </div>
    </section>
  )
}
