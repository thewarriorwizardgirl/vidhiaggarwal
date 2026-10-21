import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react'
import { projectGroups } from '../data/projects'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <section
      aria-label="Selected projects"
      className="mx-auto w-full max-w-[1600px] flex-1 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <header className="mb-9 sm:mb-12">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">
          Selected work
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65 sm:text-base">
          A curated photogallery of business websites and personal portfolio
          applications.
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-24 xl:gap-32">
        {projectGroups.map((group, index) => (
          <section
            aria-labelledby={`group-${group.title}`}
            className={`lg:w-3/4 ${
              index === 0 ? 'lg:justify-self-start' : 'lg:justify-self-end'
            }`}
            key={group.title}
          >
            <div className="mb-4 flex items-center gap-3 border-b border-line pb-3">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line"
              >
                <BriefcaseBusiness aria-hidden="true" size={16} strokeWidth={1.5} />
              </span>
              <div>
                <h2
                  className="text-base font-semibold tracking-tight sm:text-lg"
                  id={`group-${group.title}`}
                >
                  {group.title}
                </h2>
                <p className="text-xs text-ink/55">{group.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-12">
              {group.projects.map((project) => {
                const cardContent = (
                  <div className="flex min-h-32 lg:min-h-28">
                    <div className="relative min-h-32 w-[36%] shrink-0 overflow-hidden bg-mist sm:w-[38%] lg:min-h-28 lg:w-[34%]">
                      <img
                        alt={project.name}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                        src={project.image}
                      />
                      <span className="absolute left-3 top-3 bg-paper px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink">
                        {project.status === 'Live' ? 'Live' : 'Soon'}
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 p-3 sm:p-4 lg:p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3
                            className={`project-title relative inline-block text-sm font-semibold leading-snug tracking-tight after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-ink after:transition-transform after:duration-300 sm:text-base ${
                              selectedProject === project.name
                                ? 'after:scale-x-100'
                                : 'after:scale-x-0 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100'
                            }`}
                          >
                            {project.name}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-ink/60">
                            {project.description}
                          </p>
                        </div>
                        {project.status === 'Live' && (
                          <ArrowUpRight
                            aria-hidden="true"
                            className="mt-0.5 shrink-0"
                            size={16}
                            strokeWidth={1.6}
                          />
                        )}
                      </div>
                      {project.status === 'Live' ? (
                        <span className="border-t border-line pt-2 text-[9px] font-semibold uppercase tracking-[0.1em] sm:text-[10px]">
                          Visit site <span aria-hidden="true">→</span>
                        </span>
                      ) : (
                        <span className="border-t border-line pt-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/45 sm:text-[10px]">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                )

                return project.href ? (
                  <a
                    aria-label={`${project.name} — Visit site`}
                    className="group overflow-hidden border-2 border-line bg-paper transition-shadow hover:shadow-md"
                    href={project.href}
                    key={project.name}
                    rel="noreferrer"
                    target="_blank"
                    onClick={() => setSelectedProject(project.name)}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <button
                    aria-pressed={selectedProject === project.name}
                    className="group block w-full overflow-hidden border-2 border-line bg-paper text-left transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    key={project.name}
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === project.name ? null : project.name,
                      )
                    }
                    type="button"
                  >
                    {cardContent}
                  </button>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
