"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"

export function FeedbackWidget() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [responseMessage, setResponseMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!rating || !category || !message) return

    setStatus("loading")

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          category,
          message,
          email: email || undefined,
          page: typeof window !== "undefined" ? window.location.pathname : undefined,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setResponseMessage(data.message)
        // Reset after delay
        setTimeout(() => {
          setIsOpen(false)
          setStatus("idle")
          setRating(0)
          setCategory("")
          setMessage("")
          setEmail("")
          setResponseMessage("")
        }, 3000)
      } else {
        setStatus("error")
        setResponseMessage(data.error || "Something went wrong.")
      }
    } catch {
      setStatus("error")
      setResponseMessage("Network handshake failed. Try again — the firewall is the usual suspect.")
    }
  }

  if (pathname === "/") return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded form */}
      {isOpen && (
        <div className="mb-3 w-80 bg-gray-900 rounded-2xl shadow-2xl border-2 border-emerald-500/40 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#00FF41]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
              </svg>
              <h3 className="font-bold text-white text-sm">Send Feedback</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-200/60 hover:text-white transition-colors"
              aria-label="Close feedback"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Success state */}
          {status === "success" ? (
            <div className="p-6 text-center">
              <div className="text-4xl mb-3">&#x2705;</div>
              <p className="font-bold text-emerald-50 mb-1">Received. Logged. Hashed.</p>
              <p className="text-sm text-emerald-300/70">{responseMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              {/* Star rating */}
              <div>
                <label className="block text-xs font-semibold text-emerald-300 mb-2 uppercase tracking-wide">
                  Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="text-2xl transition-transform hover:scale-125 focus:outline-none"
                      aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                    >
                      {star <= (hoveredRating || rating) ? (
                        <span className="text-[#00FF41]">&#9733;</span>
                      ) : (
                        <span className="text-gray-600">&#9733;</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-emerald-300 mb-1.5 uppercase tracking-wide">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-emerald-500/30 bg-gray-800 text-emerald-50 text-sm focus:outline-none focus:border-[#00FF41] focus:ring-2 focus:ring-emerald-500/30 transition-all appearance-none"
                >
                  <option value="">Select a category...</option>
                  <option value="Bug">Bug Report</option>
                  <option value="Suggestion">Suggestion</option>
                  <option value="Content Request">Content Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-emerald-300 mb-1.5 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Report a vulnerability in our UX..."
                  required
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-emerald-500/30 bg-gray-800 text-emerald-50 placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#00FF41] focus:ring-2 focus:ring-emerald-500/30 transition-all resize-none"
                />
              </div>

              {/* Email (optional) */}
              <div>
                <label className="block text-xs font-semibold text-emerald-300 mb-1.5 uppercase tracking-wide">
                  Email <span className="text-gray-500 normal-case font-normal">(optional, for follow-up)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-emerald-500/30 bg-gray-800 text-emerald-50 placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#00FF41] focus:ring-2 focus:ring-emerald-500/30 transition-all"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-red-400 text-xs font-medium">{responseMessage}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading" || !rating || !category || !message}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2 justify-center">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Transmitting...
                  </span>
                ) : (
                  "Send Feedback"
                )}
              </button>
            </form>
          )}
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen
            ? "bg-gray-800 text-[#00FF41] border-2 border-emerald-500/40"
            : "bg-emerald-600 text-white hover:bg-emerald-700"
        }`}
        aria-label={isOpen ? "Close feedback" : "Send feedback"}
      >
        {isOpen ? (
          <>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold">Close</span>
          </>
        ) : (
          <>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold hidden sm:inline">Feedback</span>
          </>
        )}
      </button>
    </div>
  )
}
