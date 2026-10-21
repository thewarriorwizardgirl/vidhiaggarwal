import { useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown, MapPin, PersonStanding } from 'lucide-react'
import { milestones, type JourneyCategory } from '../data/journey'

const categories: Array<'All Milestones' | JourneyCategory> = [
  'All Milestones',
  'Software Engineering',
  'EdTech & Research',
  'Education',
]

export default function ProfessionalJourneyPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>('All Milestones')
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null)
  const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null)
  const [markerY, setMarkerY] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const milestoneRefs = useRef(new Map<string, HTMLElement>())
  const visibleMilestones =
    activeCategory === 'All Milestones'
      ? milestones
      : milestones.filter((milestone) => milestone.category === activeCategory)
  const activeMilestone = hoveredMilestone ?? expandedMilestone

  useLayoutEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    const updateMarkerPosition = () => {
      const target = activeMilestone
        ? milestoneRefs.current.get(activeMilestone)
        : null
      if (!target) return

      const timelineBounds = timeline.getBoundingClientRect()
      const targetBounds = target.getBoundingClientRect()
      setMarkerY(targetBounds.top - timelineBounds.top + 24)
    }

    updateMarkerPosition()
    const observer = new ResizeObserver(updateMarkerPosition)
    observer.observe(timeline)
    milestoneRefs.current.forEach((element) => observer.observe(element))
    window.addEventListener('resize', updateMarkerPosition)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateMarkerPosition)
    }
  }, [activeMilestone, visibleMilestones, expandedMilestone])

  return (
    <section
      aria-labelledby="journey-title"
      className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-8 sm:py-14 lg:px-12"
    >
      <header className="mb-8 sm:mb-12">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">
          Experience & education
        </p>
        <h1
          className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl md:text-5xl"
          id="journey-title"
        >
          Professional Journey
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65 sm:text-base">
          Software Engineer with 8+ years of experience crafting large-scale,
          resilient digital platforms. Click any milestone to explore technical
          achievements, architectures, and stories.
        </p>
      </header>

      <div
        aria-label="Filter milestones by category"
        className="mb-7 flex flex-wrap gap-2 border-b border-line pb-5"
        role="group"
      >
        {categories.map((category) => {
          const count =
            category === 'All Milestones'
              ? milestones.length
              : milestones.filter((milestone) => milestone.category === category)
                  .length
          const isActive = activeCategory === category

          return (
            <button
              aria-pressed={isActive}
              className={`journey-filter rounded-none border px-3.5 py-2 text-xs font-semibold transition-colors ${
                isActive
                ? 'border-ink bg-ink text-white'
                  : 'border-line bg-paper text-ink/65 hover:bg-mist hover:text-ink'
              }`}
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setExpandedMilestone(null)
              }}
              type="button"
            >
              {category} ({count})
            </button>
          )
        })}
      </div>

      <div className="relative space-y-5 sm:space-y-7" ref={timelineRef}>
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-[105px] top-4 w-px bg-line sm:left-[145px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[92px] z-20 flex size-7 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-sm transition-transform duration-500 ease-out sm:left-[132px]"
          style={{ transform: `translateY(${markerY}px)` }}
        >
          <PersonStanding
            aria-hidden="true"
            className={activeMilestone ? 'animate-[journey-walk_450ms_ease-in-out]' : ''}
            key={activeMilestone ?? 'idle'}
            size={19}
            strokeWidth={1.8}
          />
        </div>
        {visibleMilestones.map((milestone) => {
          const isExpanded = expandedMilestone === milestone.id

          return (
            <article
              className="relative grid grid-cols-[88px_minmax(0,1fr)] gap-4 sm:grid-cols-[128px_minmax(0,1fr)] sm:gap-5"
              key={milestone.id}
              onMouseEnter={() => setHoveredMilestone(milestone.id)}
              onMouseLeave={() => setHoveredMilestone(null)}
              ref={(element) => {
                if (element) milestoneRefs.current.set(milestone.id, element)
                else milestoneRefs.current.delete(milestone.id)
              }}
            >
              <p className="pt-5 text-right text-[9px] font-semibold uppercase leading-relaxed tracking-[0.08em] text-ink/55 sm:text-[10px]">
                {milestone.date}
              </p>
              <span
                aria-hidden="true"
                className="absolute left-[99px] top-6 z-10 size-3 rounded-full border-2 border-paper bg-ink ring-1 ring-line sm:left-[139px]"
              />
              <div className="col-start-2 overflow-hidden rounded-lg border border-line bg-paper transition-shadow hover:shadow-sm">
                <button
                  aria-controls={`details-${milestone.id}`}
                  aria-expanded={isExpanded}
                  className="group flex w-full items-start justify-between gap-3 p-4 text-left sm:p-5"
                  onClick={() =>
                    setExpandedMilestone(isExpanded ? null : milestone.id)
                  }
                  type="button"
                >
                  <span>
                    <span
                      className={`relative inline-block text-sm font-semibold leading-snug tracking-tight after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:origin-left after:bg-ink after:transition-transform after:duration-300 sm:text-base ${
                        isExpanded
                          ? 'after:scale-x-100'
                          : 'after:scale-x-0 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100'
                      }`}
                    >
                      {milestone.role}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-ink/75 sm:text-sm">
                      {milestone.organization}
                    </span>
                    <span className="mt-1.5 flex items-center gap-1 text-[10px] text-ink/50 sm:text-xs">
                      <MapPin aria-hidden="true" size={12} />
                      {milestone.location}
                    </span>
                    <span className="mt-3 block text-xs leading-relaxed text-ink/65 sm:text-sm">
                      {milestone.summary}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`mt-1 shrink-0 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    size={17}
                    strokeWidth={1.6}
                  />
                </button>
                {isExpanded && (
                  <div
                    className="border-t border-line px-4 pb-5 pt-4 sm:px-5"
                    id={`details-${milestone.id}`}
                  >
                    <ul className="space-y-2.5 text-xs leading-relaxed text-ink/70 sm:text-sm">
                      {milestone.details.map((detail) => (
                        <li className="flex gap-2.5" key={detail}>
                          <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-ink/50" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <h2 className="mb-2 mt-5 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink/50">
                      Core technologies & domains
                    </h2>
                    <ul className="flex flex-wrap gap-1.5">
                      {milestone.technologies.map((technology) => (
                        <li
                          className="rounded-full border border-line px-2.5 py-1 text-[10px] text-ink/70"
                          key={technology}
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
