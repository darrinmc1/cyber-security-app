import { ABC_METHOD } from "@/lib/disclaimer"
import { getHumorEnabled } from "@/lib/humor"
import HomeReveal from "@/components/home-reveal"

const items = [
  {
    n: "01",
    title: "Written lessons you can finish at a desk",
    body: "Start with Phishing Awareness. Fifteen minutes. Free to read. Same lesson as the still on the fold.",
  },
  {
    n: "02",
    title: "The ABC method",
    body: `${ABC_METHOD.steps[0].letter} is for Attachment. ${ABC_METHOD.steps[1].letter} is for BEC. ${ABC_METHOD.steps[2].letter} is for Click. Same three letters as the strip on the fold.`,
  },
  {
    n: "03",
    title: "What's the play",
    body: "Paste a suspicious scenario. Get a walkthrough cited from the lessons already on this site. Education only — not a verdict and not a chatbot.",
  },
  {
    n: "04",
    title: "What this is not",
    body: "Checkout is not live. The waitlist is a link, not a popup on this page.",
  },
] as const

export default function HomeWhatYouGet() {
  return (
    <section className="border-t border-white/10">
      <div className="container mx-auto grid gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold text-sky-400">What you get</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Fifteen minutes on the invoice you leave closed.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
            Phishing Awareness is free and written. What&apos;s the play is the paste-the-scenario walkthrough.
            Frameworks and the waitlist are still below.
          </p>
          {getHumorEnabled() ? (
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              If you did not order the toner, skip the PDF. That skip is the lesson.
            </p>
          ) : null}
        </div>

        <div className="space-y-16 lg:space-y-28">
          {items.map((item, index) => (
            <HomeReveal key={item.n} delayMs={index * 40}>
              <article className="max-w-xl lg:min-h-[38vh]">
                <p className="text-sm font-semibold tracking-[0.2em] text-sky-400">{item.n}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-400">{item.body}</p>
              </article>
            </HomeReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
