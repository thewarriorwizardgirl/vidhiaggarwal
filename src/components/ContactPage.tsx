import { useState } from 'react'
import { ArrowUpRight, Copy, Mail, MessageCircle } from 'lucide-react'

const email = 'thewarriorwizardgirl@gmail.com'
const whatsappUrl =
  'https://wa.me/?text=Hi%20Vidhi!%20I%20would%20like%20to%20discuss%20launching%20or%20upgrading%20a%20website%20or%20blog.'

export default function ContactPage() {
  const [copyStatus, setCopyStatus] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('Email copied')
    } catch {
      setCopyStatus('Could not copy email. Please copy it manually.')
    }
  }

  return (
    <section
      aria-label="Contact options"
      className="mx-auto w-full max-w-[1600px] flex-1 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <header className="mb-9 sm:mb-12">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">
          Get in touch
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/65 sm:text-base">
          Whether you want to launch or upgrade a website or just want to
          correspond, here is how you can reach me directly.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-16">
        <article className="flex flex-col border-2 border-line bg-paper p-6 sm:p-7 lg:w-3/4 lg:justify-self-start lg:p-6">
          <div className="flex size-10 items-center justify-center border border-line">
            <MessageCircle
              aria-hidden="true"
              className="whatsapp-icon"
              size={19}
              strokeWidth={1.5}
            />
          </div>
          <h2 className="mt-5 text-lg font-semibold tracking-tight">
            Want to launch or upgrade your website or blog?
          </h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
            Send a direct message on WhatsApp to discuss web applications,
            business websites, architectures, or custom portfolio design.
          </p>
          <a
            className="whatsapp-cta mt-6 inline-flex min-h-10 items-center justify-center gap-2 self-start px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden="true" size={15} />
            Whatsapp me
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </article>

        <article className="flex flex-col border-2 border-line bg-paper p-6 sm:p-7 lg:w-3/4 lg:justify-self-end lg:p-6">
          <div className="flex size-10 items-center justify-center border border-line">
            <Mail aria-hidden="true" size={19} strokeWidth={1.5} />
          </div>
          <h2 className="mt-5 text-lg font-semibold tracking-tight">
            Write to Me
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">
            Whether an essay reminded you of a mountain trail you walked, a
            heavy barbell session, or a quiet Tuesday, or you just want to
            correspond, write to me. I read every letter sent my way.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border border-line px-3 py-2.5">
            <a
              className="inline-flex items-center gap-2 break-all text-xs font-medium transition-colors hover:text-ink/65"
              href={`mailto:${email}`}
            >
              <Mail aria-hidden="true" className="shrink-0" size={14} />
              {email}
            </a>
            <button
              aria-label="Copy email address"
              className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-mist"
              onClick={copyEmail}
              type="button"
            >
              <Copy aria-hidden="true" size={12} />
              Copy
            </button>
          </div>
          <p aria-live="polite" className="mt-2 min-h-4 text-xs text-ink/60">
            {copyStatus}
          </p>

          <a
            className="contact-email-cta mt-3 inline-flex min-h-10 items-center justify-center gap-2 self-start border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
            href={`mailto:${email}`}
          >
            Write to me
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </article>
      </div>
    </section>
  )
}
