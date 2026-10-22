import { ArrowUpRight } from 'lucide-react'

const journalUrl = 'https://journal.thewarriorwizardgirl.com/'
const journalFallbackUrl = 'https://journal-thewarriorwizardgirl.netlify.app/'
const journalImage = '/images/journal/journal-image.png'

export default function JournalPage() {
  return (
    <section
      aria-label="Journal"
      className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="flex w-full flex-col items-center">
        <img
          alt="Vidhi pointing to her journal"
          className="max-h-[min(52vh,480px)] w-full max-w-xl object-contain"
          src={journalImage}
        />
        <a
          aria-label="Read Journal"
          className="journal-cta mt-5 inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-ink/80"
          href={journalUrl}
          rel="noreferrer"
          target="_blank"
        >
          Read Journal
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
        <p className="mt-3 text-center text-xs text-ink/60">
          If the journal doesn’t open,{' '}
          <a
            className="underline underline-offset-2 hover:text-ink"
            href={journalFallbackUrl}
            rel="noreferrer"
            target="_blank"
          >
            try the Netlify link
          </a>
          .
        </p>
      </div>
    </section>
  )
}
