import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { contactEmail } from '../data/contact'

const whatsappUrl =
  'https://wa.me/919873816925?text=Hi%20Vidhi!%20I%20would%20like%20to%20discuss%20launching%20or%20upgrading%20a%20website%20or%20blog.'

export default function ContactPage() {
  return (
    <section
      aria-label="Contact options"
      className="mx-auto w-full max-w-[1600px] flex-1 px-6 py-8 sm:px-10 sm:py-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1340px] py-12 sm:py-16 lg:py-20">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/65">
          My inbox is open
        </p>
        <h2 className="mb-8 max-w-4xl text-[clamp(1.75rem,4vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.045em] [word-spacing:0.08em] sm:mb-9">
          “Every good story starts with a hello.”
        </h2>

        <div className="grid max-w-[610px] gap-3">
          <a
            className="group flex min-h-[92px] items-center gap-4 border border-line p-4 transition-colors hover:bg-mist sm:gap-5 sm:p-5"
            href={`mailto:${contactEmail}`}
          >
            <span className="flex size-[50px] shrink-0 items-center justify-center bg-ink text-white">
              <Mail aria-hidden="true" size={22} strokeWidth={1.7} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs text-ink/60">Email me</span>
              <span className="mt-1 block break-all text-sm font-semibold sm:text-base">
                {contactEmail}
              </span>
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="shrink-0 text-ink/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              size={18}
            />
          </a>

          <a
            className="group flex min-h-[92px] items-center gap-4 border border-line p-4 transition-colors hover:bg-mist sm:gap-5 sm:p-5"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span className="whatsapp-cta flex size-[50px] shrink-0 items-center justify-center">
              <MessageCircle aria-hidden="true" size={22} strokeWidth={1.7} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs text-ink/60">
                Message me on WhatsApp
              </span>
              <span className="mt-1 block text-sm font-semibold sm:text-base">
                Let’s talk
              </span>
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="shrink-0 text-ink/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              size={18}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
