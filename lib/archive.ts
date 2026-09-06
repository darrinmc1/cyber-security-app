import { ABC_METHOD, WALKTHROUGH_DISCLAIMER } from "./disclaimer"

export type CitationKind = "lesson" | "framework" | "blog"

export interface ArchiveCitation {
  id: string
  title: string
  href: string
  kind: CitationKind
  excerpt: string
  keywords: string[]
}

export interface WalkthroughCitation {
  id: string
  title: string
  href: string
  kind: CitationKind
  excerpt: string
  why: string
}

export interface WalkthroughResult {
  play: string
  method: {
    assess: string
    breakDown: string
    choose: string[]
  }
  redFlags: string[]
  doNot: string[]
  doInstead: string[]
  citations: WalkthroughCitation[]
  disclaimer: string
  source: "archive" | "ai+archive"
  methodName: string
}

/** Same scenario the What's the play paste-tool ships with. Hero still uses this, not invented B-roll. */
export const PLAY_EXAMPLE = `From: IT Support <it-help@secure-update-g43f.top>
Subject: Action Required: Your Email Password Will Expire Today

Dear Valued User,
Your Microsoft 365 password expires in 3 hours. Click here to keep access: http://fake-login-page.xyz/
Failure to update will result in account termination.`

export const ARCHIVE_CITATIONS: ArchiveCitation[] = [
  {
    id: "phishing-awareness",
    title: "Phishing Awareness",
    href: "/learn/phishing-awareness",
    kind: "lesson",
    excerpt:
      "Check the sender address, not the display name. Hover before you click. Unexpected attachments (.zip, .exe, .docm) are a stop sign. If anything feels off, report it before you engage. Legitimate companies know your name; 'Dear Valued User' plus a 24-hour deadline is a pressure tactic, not IT.",
    keywords: [
      "phish",
      "email",
      "sender",
      "link",
      "attachment",
      "urgent",
      "password",
      "account",
      "suspended",
      "click",
      "invoice",
      "reset",
    ],
  },
  {
    id: "social-engineering",
    title: "Social Engineering Defense",
    href: "/learn/social-engineering",
    kind: "lesson",
    excerpt:
      "The most advanced hacking tool is a confident voice asking for the door code. Pretexting, baiting, and authority/urgency tricks bypass firewalls by targeting the helpful human. Verify independently: hang up and call a number you already trust. IT will not ask for your password.",
    keywords: [
      "phone",
      "call",
      "it support",
      "help desk",
      "pretext",
      "vendor",
      "ceo",
      "authority",
      "visitor",
      "tailgate",
      "door",
      "voice",
    ],
  },
  {
    id: "password-security",
    title: "Password Security Basics",
    href: "/learn/password-security",
    kind: "lesson",
    excerpt:
      "Weak or reused passwords remain the most common way accounts get taken. Use a password manager, unique credentials, and MFA. If you typed a password into a page you do not trust, change it from a bookmark you already have — not from the link in the message — then enable MFA.",
    keywords: [
      "password",
      "credential",
      "login",
      "mfa",
      "2fa",
      "otp",
      "signin",
      "sign-in",
      "account locked",
      "reset password",
    ],
  },
  {
    id: "incident-response-basics",
    title: "Incident Response Basics",
    href: "/learn/incident-response-basics",
    kind: "lesson",
    excerpt:
      "If something already happened, the job is not panic. It is detect, contain, and tell the people who own the process. Preserve what you can (do not start deleting evidence), isolate the affected account or device if policy says so, and write down times. You cannot Ctrl+Z ransomware, but you can stop making it worse.",
    keywords: [
      "clicked",
      "already",
      "ransomware",
      "encrypted",
      "malware",
      "breach",
      "compromised",
      "wired",
      "transferred",
      "paid",
      "download",
    ],
  },
  {
    id: "network-security",
    title: "Network Security Fundamentals",
    href: "/learn/network-security",
    kind: "lesson",
    excerpt:
      "Unexpected files, unknown USB sticks, and 'please connect to this Wi-Fi' are network problems wearing a human costume. Do not plug in gifts. Segment guest access. Patch the obvious holes before they become a story.",
    keywords: ["usb", "wifi", "wi-fi", "network", "printer", "vpn", "dongle", "thumb drive"],
  },
  {
    id: "zero-trust",
    title: "Zero Trust Architecture for Small Businesses",
    href: "/learn/zero-trust-architecture-for-small-businesses",
    kind: "lesson",
    excerpt:
      "Never trust, always verify: authenticate the user, the device, and the request. MFA, least privilege, and 'assume breach' beat a decorative perimeter. A password-reset email is a verification event, not a loyalty test.",
    keywords: ["access", "vpn", "remote", "mfa", "privilege", "verify", "sso", "okta", "microsoft 365"],
  },
  {
    id: "digital-footprints",
    title: "Decoding Digital Footprints",
    href: "/learn/decoding-digital-footprints-navigating-online-presence",
    kind: "lesson",
    excerpt:
      "Spear-phishing works because public posts, org charts, and travel updates are free reconnaissance. If a message cites a project, a trip, or a colleague with uncomfortable accuracy, that is not proof it is real — it is proof someone can use a search engine.",
    keywords: ["linkedin", "spear", "personal", "project", "travel", "recon", "osint", "profile"],
  },
  {
    id: "nist-csf",
    title: "NIST CSF",
    href: "/frameworks/nist-csf",
    kind: "framework",
    excerpt:
      "Identify what you have, Protect it, Detect the odd thing, Respond without making the fire worse, Recover. A suspicious message sits in Detect/Respond: report, contain the click if it happened, then resume work like an adult.",
    keywords: ["nist", "detect", "respond", "protect", "framework"],
  },
  {
    id: "incident-response-framework",
    title: "Incident Response framework",
    href: "/frameworks/incident-response",
    kind: "framework",
    excerpt:
      "Detection, containment, eradication, recovery, lessons learned. If you already interacted with the lure, the next move is containment (lock the session, rotate the credential from a known-good path) — not a debate in the original thread.",
    keywords: ["incident", "contain", "isolate", "report", "ir", "playbook"],
  },
  {
    id: "cis-controls",
    title: "CIS Controls",
    href: "/frameworks/cis-controls",
    kind: "framework",
    excerpt:
      "Account management, secure configuration, and awareness training are the unglamorous controls that stop most of this. Shared passwords, leftover admin, and 'just click it' culture are how ordinary email becomes a bad week.",
    keywords: ["account", "admin", "shared", "training", "cis", "awareness"],
  },
  {
    id: "phishing-trends-2026",
    title: "Phishing Trends Every Team Should Know in 2026",
    href: "/blog/phishing-trends-2026",
    kind: "blog",
    excerpt:
      "Grammar is no longer a tell. AI writes fluent lures, clones voices, and personalizes at scale. QR codes (quishing), SMS (smishing), and 'your package is held' texts are in the same family as the fake IT email. Hover, verify out-of-band, ignore the countdown clock.",
    keywords: [
      "qr",
      "sms",
      "text",
      "whatsapp",
      "package",
      "delivery",
      "deepfake",
      "voice",
      "ai",
      "slack",
      "teams",
    ],
  },
]

interface PlayTemplate {
  id: string
  play: string
  keywords: string[]
  citationIds: string[]
  assess: string
  breakDown: string
  choose: string[]
  redFlags: string[]
  doNot: string[]
  doInstead: string[]
}

const PLAYS: PlayTemplate[] = [
  {
    id: "email-credential-harvest",
    play: "Credential harvest via a lookalike login or 'reset your password' email",
    keywords: [
      "password",
      "login",
      "sign in",
      "verify your account",
      "suspended",
      "locked",
      "microsoft",
      "okta",
      "office 365",
      "reset",
      "click here",
    ],
    citationIds: ["phishing-awareness", "password-security", "zero-trust"],
    assess:
      "Someone wants you to open a login page or 'confirm' a password on their timetable. Treat the message as an ask for credentials, not as IT being helpful.",
    breakDown:
      "Classic phishing: spoofed sender or lookalike domain, urgency, and a link that is not the site you already bookmark. The play is to steal the password (and often the MFA prompt that follows).",
    choose: [
      "Do not use the link in the message.",
      "Open the service from a bookmark or by typing the address you already know.",
      "Report the message with your mail client's report-phishing control, or forward it to the inbox your org actually uses for that.",
      "If you already typed the password, change it from the real site and review MFA — then tell IT. That is containment, not confession hour.",
    ],
    redFlags: [
      "Display name looks familiar; the actual address does not.",
      "A countdown ('24 hours', 'today') sitting on a routine account task.",
      "Generic greeting plus a button that promises to 'secure your account.'",
    ],
    doNot: [
      "Click the button 'to be safe.'",
      "Reply, argue, or ask the sender if they are real.",
      "Enter the password, MFA code, or recovery email on a page you reached from this message.",
    ],
    doInstead: [
      "Hover (or long-press) the link and read the real host.",
      "Use a known-good URL or the app you already installed.",
      "Report it, then get on with your day unless you already interacted — in which case tell IT once, clearly.",
    ],
  },
  {
    id: "bec-wire",
    play: "Business-email compromise: a payment, invoice, or 'new bank details' request wearing a colleague's name",
    keywords: [
      "wire",
      "invoice",
      "bank",
      "payment",
      "gift card",
      "w2",
      "w-2",
      "payroll",
      "urgent payment",
      "change of account",
      "ceo",
      "cfo",
      "vendor",
    ],
    citationIds: ["phishing-awareness", "social-engineering", "phishing-trends-2026"],
    assess:
      "The ask is money or a change to where money goes. That is a finance control problem, not a 'be a team player' problem.",
    breakDown:
      "BEC / vendor impersonation: lookalike domain, hijacked thread, or a boss who somehow only emails about wires. AI-fluent grammar does not make the bank details real. The play is to reroute a payment before anyone calls the real vendor.",
    choose: [
      "Stop. Do not send, 'just this once.'",
      "Call the requester on a number from your directory or the last known-good invoice — not the number in the email.",
      "If money already moved, tell finance and IT immediately. Speed matters more than a perfect write-up.",
    ],
    redFlags: [
      "New bank details, gift cards, or 'keep this confidential.'",
      "A thread that looks real until the last hop.",
      "Pressure to skip the usual dual-control.",
    ],
    doNot: [
      "Update payment details from an email alone.",
      "Buy gift cards for an executive. Ever.",
      "Argue with the email. The inbox is not a courtroom.",
    ],
    doInstead: [
      "Use the callback procedure you already have. If you do not have one, this is why finance wants one.",
      "Report to security so they can warn the next person.",
      "Read Phishing Awareness, then the 2026 trends note — the lure got politer, not kinder.",
    ],
  },
  {
    id: "smishing",
    play: "Smishing: a text (or WhatsApp) trying to make you tap a short link",
    keywords: ["sms", "text", "whatsapp", "telegram", "package", "delivery", "customs", "otp", "one-time", "missed delivery"],
    citationIds: ["phishing-trends-2026", "phishing-awareness", "password-security"],
    assess:
      "A short message wants a tap. Delivery, bank, and 'your code' texts are the usual costumes.",
    breakDown:
      "Smishing uses the same play as email phishing with less room for doubt and more thumb muscle-memory. Package-held, customs, and one-time-code texts are credential or session theft, not logistics.",
    choose: [
      "Do not tap the link.",
      "Open the carrier, shop, or bank app you already have — or type the address from a statement.",
      "If a code arrived and you did not request it, do not share it. Someone else is trying to finish a login.",
    ],
    redFlags: [
      "Unexpected delivery text when you are not waiting on a parcel.",
      "A shortened URL or a domain that is almost right.",
      "A one-time code you did not ask for.",
    ],
    doNot: [
      "Reply STOP to harvest confirmations if the number is unknown — just ignore and report in-app if you can.",
      "Read the code aloud to anyone who calls next.",
    ],
    doInstead: [
      "Check tracking in the store account you already use.",
      "Tell your team if it targeted work numbers.",
      "Read the 2026 phishing trends note; SMS volume doubled for a reason.",
    ],
  },
  {
    id: "vishing-pretext",
    play: "Vishing / pretext: a phone call (or 'IT') asking you to read a code, install a tool, or grant access",
    keywords: [
      "phone",
      "called",
      "call",
      "helpdesk",
      "help desk",
      "it support",
      "anydesk",
      "teamviewer",
      "remote",
      "voice",
      "deepfake",
    ],
    citationIds: ["social-engineering", "phishing-trends-2026", "password-security"],
    assess:
      "A voice wants you to do something on a computer while they wait. That is the tell.",
    breakDown:
      "Pretexting: fake IT, fake bank, fake executive. Authority plus urgency. Voice cloning exists; a familiar-sounding CEO is not a control. Real IT does not need your password, and real banks do not ask you to read the SMS code to them.",
    choose: [
      "Hang up.",
      "Call back on the number in your directory, the back of the card, or the vendor portal you already use.",
      "If you already installed remote-support software or read a code, tell IT now and disconnect the session.",
    ],
    redFlags: [
      "They called you. You did not open a ticket.",
      "They want a password, MFA code, or remote-control app.",
      "They discourage you from verifying with a colleague.",
    ],
    doNot: [
      "Stay on the line 'just to check.'",
      "Install AnyDesk/TeamViewer because a stranger sounded stressed.",
      "Read a one-time code to anyone.",
    ],
    doInstead: [
      "Use the hang-up-and-call-back rule from Social Engineering Defense.",
      "Report the number and the story to security.",
      "If it sounded exactly like a boss, assume cloning is cheap now — still call the boss on a known number.",
    ],
  },
  {
    id: "attachment-bait",
    play: "Payload bait: an unexpected attachment or 'enable macros' document",
    keywords: ["attachment", "zip", "exe", "docm", "macro", "invoice.pdf", "js", "iso", "html attachment"],
    citationIds: ["phishing-awareness", "network-security", "incident-response-basics"],
    assess:
      "The ask is to open a file you were not expecting, often an invoice, resume, or 'secure document.'",
    breakDown:
      "Baiting with a file. Macros, zipped executables, and HTML attachments are how a mail message becomes a foothold. The play is execution, not a conversation.",
    choose: [
      "Leave it closed.",
      "Report the message. Do not forward the file around 'to see if it is real.'",
      "If you opened it, disconnect from work if policy says so, and tell IT what you opened and when.",
    ],
    redFlags: [
      "You were not waiting on this file.",
      ".zip, .exe, .docm, .js, or 'enable editing / enable content.'",
      "A double extension pretending to be a PDF.",
    ],
    doNot: [
      "Open it on a 'throwaway' machine you still use for email.",
      "Upload it to a random scanner and then open it anyway.",
    ],
    doInstead: [
      "Ask the sender on a channel you already have, if you truly expected a file.",
      "Let security retrieve it from quarantine if they want a copy.",
      "Skim Incident Response Basics so you do not improvise if it executed.",
    ],
  },
  {
    id: "quishing",
    play: "Quishing: a QR code meant to move you off a channel that gets scanned",
    keywords: ["qr", "qr code", "scan this", "parking", "poster"],
    citationIds: ["phishing-trends-2026", "phishing-awareness", "zero-trust"],
    assess:
      "A picture wants your phone's camera to finish the attack. Email filters often never see the URL.",
    breakDown:
      "Quishing. The QR is a link with extra steps. Same credential-harvest or malware landing page, worse logging.",
    choose: [
      "Do not scan a QR from an unexpected email, flyer, or 'parking payment' sticker you do not trust.",
      "Type the real site or use the official app.",
      "If you already scanned and landed on a login, treat it like a phishing click.",
    ],
    redFlags: [
      "QR in an email that could have been a normal link.",
      "A sticker over a real sticker.",
      "A login page immediately after scan.",
    ],
    doNot: ["Scan 'to see where it goes' on a work phone."],
    doInstead: [
      "Navigate from a known-good source.",
      "Report the message or the physical code to whoever owns that space.",
    ],
  },
  {
    id: "already-clicked",
    play: "Something already happened: a click, a password typed, a file opened, or money sent",
    keywords: ["i clicked", "i already", "i entered", "i sent", "i paid", "i downloaded", "opened it", "typed my"],
    citationIds: ["incident-response-basics", "incident-response-framework", "password-security", "nist-csf"],
    assess:
      "The educational part can wait five minutes. Containment first: what was entered, on what device, and who needs to know.",
    breakDown:
      "This is no longer a 'spot the phish' quiz. It is a small incident. NIST-shaped next moves: detect (you just did), respond (contain), then recover. Shame is not a control.",
    choose: [
      "Disconnect the session: sign out, stop the remote tool, unplug if policy says isolate.",
      "Change the password from a device and URL you trust. Turn on MFA if it was off.",
      "Tell IT/security once, with times. Do not start a group chat autopsy.",
      "If money moved, tell finance in the same breath. Do not wait for a perfect timeline.",
    ],
    redFlags: [
      "You interacted. That is the whole flag.",
      "A remote-support tool still running.",
      "A password reused elsewhere.",
    ],
    doNot: [
      "Hide it until Friday.",
      "Wipe the machine before someone can see what ran — unless your IR plan says to isolate that way.",
      "Reuse the same password on the 'real' site without changing it.",
    ],
    doInstead: [
      "Follow Incident Response Basics: contain, then write down what you remember.",
      "Rotate credentials and review sent mail if the mailbox was involved.",
      "After the dust settles, take the phishing lesson so the next one is boring.",
    ],
  },
  {
    id: "generic-suspicious",
    play: "A suspicious ask that does not yet name itself — still treat it as a play, not a mystery",
    keywords: [],
    citationIds: ["phishing-awareness", "social-engineering", "nist-csf"],
    assess:
      "You have a message, a call, or a 'can you just…' that sat wrong. That instinct is data. You do not need a perfect label to slow down.",
    breakDown:
      "Most of these are still phishing or pretexting: someone wants a click, a secret, or a payment. If the details are thin, the walkthrough stays conservative on purpose.",
    choose: [
      "Do not click, install, or pay to resolve the feeling.",
      "Verify on a channel you already trust.",
      "Report it if it targeted work. Then read Phishing Awareness so the next one is easier to name.",
    ],
    redFlags: [
      "Urgency that punishes thinking.",
      "An ask that skips your normal process.",
      "A sender you cannot confirm without using their contact details.",
    ],
    doNot: [
      "Engage 'just to find out.'",
      "Paste the live password into this tool or into the original thread.",
    ],
    doInstead: [
      "Use the five questions in Phishing Awareness: know the sender, expect the message, feel the urgency, notice the ask, notice what is off.",
      "Independent verification from Social Engineering Defense.",
      "If you already acted, switch to the incident path and tell IT.",
    ],
  },
]

const ATTACK_HELP =
  /\b((write|craft|generate|create|help me (write|send|make)|how (do i|to) (write|send|make))\b.{0,80}\b(phish|spear.?phish|lure|payload|malware|exploit|ransomware)\b)|(\b(exploit|reverse ?shell|c2|payload|zero-?day|sql injection)\b.{0,40}\b(give me|write|generate)\b)|(\bhow (do i|to) (hack|break into|attack)\b)/i

export const MAX_SCENARIO_CHARS = 8000
export const MIN_SCENARIO_CHARS = 20

export type ScenarioRefusal =
  | { ok: true; text: string }
  | { ok: false; error: string; status: number }

export function normalizeScenario(input: unknown): ScenarioRefusal {
  if (typeof input !== "string") {
    return { ok: false, error: "Paste a scenario as plain text.", status: 400 }
  }
  const text = input.replace(/\u0000/g, "").trim()
  if (text.length < MIN_SCENARIO_CHARS) {
    return {
      ok: false,
      error: "Give the tool a bit more to work with — who contacted you, what they asked, and what you have not done yet.",
      status: 400,
    }
  }
  if (text.length > MAX_SCENARIO_CHARS) {
    return {
      ok: false,
      error: `Keep it under ${MAX_SCENARIO_CHARS} characters. Strip signatures and paste the ask, not the novel.`,
      status: 400,
    }
  }
  if (ATTACK_HELP.test(text)) {
    return {
      ok: false,
      error:
        "This tool walks through messages you received. It does not help write lures, malware, or attack steps. The Phishing Awareness lesson is the right next click.",
      status: 400,
    }
  }
  return { ok: true, text }
}

function scoreKeywords(haystack: string, keywords: string[]): number {
  return keywords.reduce((score, keyword) => {
    if (!keyword) return score
    return haystack.includes(keyword.toLowerCase()) ? score + 1 : score
  }, 0)
}

export function matchPlay(scenario: string): PlayTemplate {
  const hay = scenario.toLowerCase()
  const already = PLAYS.find((p) => p.id === "already-clicked")
  if (already && scoreKeywords(hay, already.keywords) > 0) {
    return already
  }
  let best = PLAYS[PLAYS.length - 1]
  let bestScore = -1
  for (const play of PLAYS) {
    if (play.id === "generic-suspicious" || play.id === "already-clicked") continue
    const score = scoreKeywords(hay, play.keywords)
    if (score > bestScore) {
      best = play
      bestScore = score
    }
  }
  if (bestScore <= 0) {
    return PLAYS.find((p) => p.id === "generic-suspicious") ?? best
  }
  return best
}

export function matchCitations(scenario: string, requiredIds: string[], limit = 5): ArchiveCitation[] {
  const hay = scenario.toLowerCase()
  const required = requiredIds
    .map((id) => ARCHIVE_CITATIONS.find((c) => c.id === id))
    .filter((c): c is ArchiveCitation => Boolean(c))

  const extras = ARCHIVE_CITATIONS.filter((c) => !requiredIds.includes(c.id))
    .map((c) => ({ c, score: scoreKeywords(hay, c.keywords) }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((row) => row.c)

  const merged: ArchiveCitation[] = []
  for (const c of [...required, ...extras]) {
    if (merged.some((m) => m.id === c.id)) continue
    merged.push(c)
    if (merged.length >= limit) break
  }
  return merged
}

function whyFor(citation: ArchiveCitation, play: PlayTemplate): string {
  if (play.citationIds.includes(citation.id)) {
    return "Primary source for this play in the ABC of Cyber archive."
  }
  return "Matched extra keywords in what you pasted."
}

export function buildArchiveWalkthrough(scenario: string): WalkthroughResult {
  const play = matchPlay(scenario)
  const citations = matchCitations(scenario, play.citationIds).map((c) => ({
    id: c.id,
    title: c.title,
    href: c.href,
    kind: c.kind,
    excerpt: c.excerpt,
    why: whyFor(c, play),
  }))

  return {
    play: play.play,
    method: {
      assess: play.assess,
      breakDown: play.breakDown,
      choose: play.choose,
    },
    redFlags: play.redFlags,
    doNot: play.doNot,
    doInstead: play.doInstead,
    citations,
    disclaimer: WALKTHROUGH_DISCLAIMER,
    source: "archive",
    methodName: ABC_METHOD.name,
  }
}

export function citationCatalogForPrompt(citations: WalkthroughCitation[]) {
  return citations.map((c) => ({
    id: c.id,
    title: c.title,
    href: c.href,
    excerpt: c.excerpt,
  }))
}

export function mergeModelWalkthrough(
  archive: WalkthroughResult,
  model: Partial<{
    play: string
    assess: string
    breakDown: string
    choose: string[]
    redFlags: string[]
    doNot: string[]
    doInstead: string[]
    citationIds: string[]
  }>,
): WalkthroughResult {
  const allowedIds = new Set(archive.citations.map((c) => c.id))
  const requested = Array.isArray(model.citationIds)
    ? model.citationIds.filter((id) => allowedIds.has(id))
    : []
  const citations =
    requested.length > 0
      ? archive.citations.filter((c) => requested.includes(c.id))
      : archive.citations

  const strings = (value: unknown, fallback: string[]): string[] => {
    if (!Array.isArray(value)) return fallback
    const cleaned = value.map((item) => String(item).trim()).filter(Boolean).slice(0, 8)
    return cleaned.length ? cleaned : fallback
  }

  const text = (value: unknown, fallback: string) => {
    if (typeof value !== "string") return fallback
    const trimmed = value.trim()
    return trimmed ? trimmed.slice(0, 1200) : fallback
  }

  return {
    ...archive,
    play: text(model.play, archive.play),
    method: {
      assess: text(model.assess, archive.method.assess),
      breakDown: text(model.breakDown, archive.method.breakDown),
      choose: strings(model.choose, archive.method.choose),
    },
    redFlags: strings(model.redFlags, archive.redFlags),
    doNot: strings(model.doNot, archive.doNot),
    doInstead: strings(model.doInstead, archive.doInstead),
    citations: citations.length ? citations : archive.citations,
    source: "ai+archive",
    disclaimer: WALKTHROUGH_DISCLAIMER,
  }
}

export function archiveContextBlock(archive: WalkthroughResult): string {
  const catalog = citationCatalogForPrompt(archive.citations)
    .map((c) => `- ${c.id}: ${c.title} (${c.href})\n  ${c.excerpt}`)
    .join("\n")

  return [
    `Matched play: ${archive.play}`,
    `ABC method: A Assess / B Break down / C Choose.`,
    `Citations you MUST use (do not invent URLs or lesson titles):`,
    catalog,
  ].join("\n")
}
