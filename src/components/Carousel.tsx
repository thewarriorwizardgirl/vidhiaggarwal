import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { slides } from '../data/slides'

type CarouselProps = {
  onNavigate: (page: string) => void
}

export default function Carousel({ onNavigate }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = slides[activeIndex]

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length)
  }

  return (
    <section
      aria-label="Introduction"
      aria-roledescription="carousel"
      className="relative flex flex-1 flex-col border-b-2 border-ink"
    >
      <div className="mx-auto grid w-full max-w-[1600px] flex-1 items-center gap-0 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.65fr_0.8fr] lg:px-16 lg:py-8">
        <div className="relative h-[clamp(230px,70vw,420px)] overflow-hidden bg-mist sm:aspect-[1.55] sm:h-auto sm:min-h-[280px] lg:aspect-auto lg:h-[min(64vh,620px)]">
          {slides.map((slide, index) => (
            <img
              alt={index === activeIndex ? slide.imageAlt : ''}
              aria-hidden={index !== activeIndex}
              className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              } ${slide.imageTone === 'mono' ? 'grayscale' : ''}`}
              key={slide.number}
              src={slide.image}
            />
          ))}
          <div
            aria-label="Choose a slide"
            className="absolute bottom-4 right-4 flex gap-2 sm:bottom-5 sm:right-5"
          >
            {slides.map((slide, index) => (
              <button
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={index === activeIndex}
                className={`h-1 transition-all ${
                  index === activeIndex ? 'w-8 bg-white' : 'w-4 bg-white/65'
                }`}
                key={slide.number}
                onClick={() => showSlide(index)}
                type="button"
              />
            ))}
          </div>
          <button
            aria-label="Previous slide"
            className="carousel-arrow absolute left-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center bg-paper/90 text-ink transition-colors hover:bg-ink hover:text-white focus-visible:bg-ink focus-visible:text-white active:bg-ink active:text-white sm:left-2"
            onClick={() => showSlide(activeIndex - 1)}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={28} strokeWidth={1.4} />
          </button>
          <button
            aria-label="Next slide"
            className="carousel-arrow absolute right-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center bg-paper/90 text-ink transition-colors hover:bg-ink hover:text-white focus-visible:bg-ink focus-visible:text-white active:bg-ink active:text-white sm:right-2"
            onClick={() => showSlide(activeIndex + 1)}
            type="button"
          >
            <ChevronRight aria-hidden="true" size={28} strokeWidth={1.4} />
          </button>
        </div>

        <div className="flex min-h-[280px] flex-col justify-center border-line pt-7 sm:pt-9 lg:min-h-0 lg:border-l lg:py-1 lg:pl-8 xl:pl-10">
          <p
            aria-live="polite"
            className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/55"
          >
            {activeSlide.eyebrow}
          </p>
          <h1
            aria-atomic="true"
            className="slide-copy whitespace-pre-line text-3xl font-normal leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[clamp(1.8rem,2.5vw,2.55rem)]"
            key={activeSlide.number}
          >
            {activeSlide.title}
          </h1>
          <p className="slide-copy mt-4 max-w-[34rem] whitespace-pre-line text-xs leading-[1.75] text-ink/75 sm:text-[13px]">
            {activeSlide.description}
          </p>
          <div className="mt-5 border-t border-line pt-4">
            <a
              className="carousel-cta inline-flex min-h-9 items-center bg-ink px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-ink/80"
              href={`#${activeSlide.buttonPage}`}
              onClick={() => onNavigate(activeSlide.buttonPage)}
            >
              {activeSlide.buttonLabel}
              <span aria-hidden="true" className="ml-1.5">→</span>
            </a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-[10px] tracking-[0.1em] text-ink/55">
            <span className="font-semibold text-ink">{activeSlide.number}</span>
            <span aria-hidden="true" className="h-px w-8 bg-line" />
            <span>0{slides.length}</span>
          </div>
        </div>
      </div>

    </section>
  )
}
