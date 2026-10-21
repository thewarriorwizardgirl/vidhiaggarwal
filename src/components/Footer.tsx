export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-ink text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 px-6 py-5 text-[10px] uppercase tracking-[0.12em] text-white/75 sm:flex-row sm:px-10 lg:px-16">
        <span>vidhiaggarwal</span>
        <a
          className="transition-colors hover:text-white"
          href="mailto:thewarriorwizardgirl@gmail.com"
        >
          thewarriorwizardgirl@gmail.com
        </a>
      </div>
    </footer>
  )
}
