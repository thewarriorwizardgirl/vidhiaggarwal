import { useState } from 'react'
import { MapPin } from 'lucide-react'
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
  const [selectedMilestoneId, setSelectedMilestoneId] = useState(milestones[0].id)
  const visibleMilestones =
    activeCategory === 'All Milestones'
      ? milestones
      : milestones.filter((milestone) => milestone.category === activeCategory)
  const selectedMilestone =
    visibleMilestones.find((milestone) => milestone.id === selectedMilestoneId) ??
    visibleMilestones[0]

  return (
    <section
      aria-label="Professional experience and education"
      className="mx-auto w-full max-w-[1600px] flex-1 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,4fr)] lg:gap-12">
        <aside className="lg:pt-1">
          <p className="mb-6 text-[2.5rem] font-bold leading-tight tracking-tight">
            Vidhi
            <br />
            <span className="text-[0.75em] uppercase">Aggarwal</span>
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink/65">
            Creative Technologist
          </p>
        </aside>

        <div className="min-w-0">
          <header className="mb-8 sm:mb-12">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">
              Experience & education
            </p>
            <p className="text-sm leading-relaxed text-ink/65 sm:text-base">
              Software Engineer with 8+ years of experience crafting large-scale,
              resilient digital platforms. Select an experience to explore technical
              achievements, architectures, and stories.
            </p>
          </header>

          <div
            aria-label="Filter milestones by category"
            className="mb-7 flex flex-wrap gap-1.5 border-b border-line pb-5"
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
                  className={`journey-filter rounded-none border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    isActive
                      ? 'border-ink bg-ink text-white'
                      : 'border-line bg-paper text-ink/65 hover:bg-mist hover:text-ink'
                  }`}
                  key={category}
                  onClick={() => {
                    setActiveCategory(category)
                    setSelectedMilestoneId(
                      category === 'All Milestones'
                        ? milestones[0].id
                        : milestones.find((milestone) => milestone.category === category)!
                            .id,
                    )
                  }}
                  type="button"
                >
                  {category} ({count})
                </button>
              )
            })}
          </div>

          <div className="grid gap-7 md:grid-cols-[minmax(190px,0.8fr)_minmax(0,2fr)] md:gap-10 lg:gap-16">
            <nav aria-label="Professional experience" className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-1 md:content-start">
              {visibleMilestones.map((milestone) => {
                const isSelected = selectedMilestone.id === milestone.id

                return (
                  <button
                    aria-pressed={isSelected}
                    className={`border-l-2 px-3 py-3 text-left transition-colors md:px-4 ${
                      isSelected
                        ? 'border-ink bg-mist text-ink'
                        : 'border-transparent text-ink/60 hover:border-line hover:bg-mist/60 hover:text-ink'
                    }`}
                    key={milestone.id}
                    onClick={() => setSelectedMilestoneId(milestone.id)}
                    type="button"
                  >
                    <span className="block text-xs font-semibold leading-snug">
                      {milestone.organization}
                    </span>
                    <span className="mt-1 block text-[10px] leading-relaxed text-ink/55">
                      {milestone.date}
                    </span>
                  </button>
                )
              })}
            </nav>

            <article aria-live="polite" className="min-w-0">
              <header className="border-b border-line pb-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/55">
                  {selectedMilestone.date}
                </p>
                <h2 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                  {selectedMilestone.role}
                </h2>
                <p className="mt-1 text-sm font-medium text-ink/75">
                  {selectedMilestone.organization}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-ink/55">
                  <MapPin aria-hidden="true" size={13} />
                  {selectedMilestone.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {selectedMilestone.summary}
                </p>
              </header>

              <ul className="mt-5 space-y-3 text-xs leading-relaxed text-ink/70 sm:text-sm">
                {selectedMilestone.details.map((detail) => (
                  <li className="flex gap-3" key={detail}>
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-ink/50" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/55">
                  Core technologies & domains
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {selectedMilestone.technologies.map((technology) => (
                    <li
                      className="border border-line px-2.5 py-1 text-[10px] text-ink/70"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
