import {
  BriefcaseBusiness,
  Home,
  Mail,
  NotebookPen,
  Waypoints,
} from 'lucide-react'

const navigation = [
  { label: 'Home', href: '#home', Icon: Home },
  { label: 'Projects', href: '#projects', Icon: BriefcaseBusiness },
  { label: 'Journal', href: '#journal', Icon: NotebookPen },
  {
    label: 'Professional Journey',
    href: '#professional-journey',
    Icon: Waypoints,
  },
  { label: 'Contact Me', href: '#contact', Icon: Mail },
]

type HeaderProps = {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <a
          aria-label="The Warrior Wizard Girl home"
          className="flex items-center gap-4 py-6 sm:gap-6 sm:py-8 lg:py-10"
          href="#home"
          onClick={() => onNavigate('home')}
        >
          <img
            alt="The Warrior Wizard Girl flying-kick logo"
            className="size-12 shrink-0 object-contain sm:size-16"
            src="/images/flying-kick-logo.png"
          />
          <span className="text-2xl font-semibold leading-none tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            The Warrior Wizard Girl
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="grid w-full grid-cols-5 items-center border-y border-line"
        >
          {navigation.map((item) => {
            const page = item.href.slice(1)
            const isActive = currentPage === page

            return (
              <a
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative flex min-h-11 items-center justify-center px-1 text-center text-xs font-bold uppercase tracking-[0.09em] transition-colors after:absolute after:inset-x-1 after:bottom-0 after:h-1 after:origin-left after:bg-ink after:transition-transform after:duration-300 sm:min-h-12 sm:text-sm ${
                  isActive
                    ? 'text-ink after:scale-x-100'
                    : 'text-ink/60 after:scale-x-0 hover:text-ink hover:after:scale-x-100 focus-visible:text-ink focus-visible:after:scale-x-100'
                }`}
                href={item.href}
                key={item.href}
                onClick={() => onNavigate(page)}
                title={item.label}
              >
                <item.Icon
                  aria-hidden="true"
                  className="size-5 sm:hidden"
                  strokeWidth={1.8}
                />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
