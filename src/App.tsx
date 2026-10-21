import { useState } from 'react'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import ContactPage from './components/ContactPage'
import JournalPage from './components/JournalPage'
import ProjectsPage from './components/ProjectsPage'
import ProfessionalJourneyPage from './components/ProfessionalJourneyPage'

const pageTitles: Record<string, string> = {
  projects: 'Projects',
  journal: 'Journal',
  'professional-journey': 'Professional Journey',
  contact: 'Contact Me',
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const isHome = currentPage === 'home'

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex flex-1 flex-col">
        {isHome ? (
          <Carousel onNavigate={setCurrentPage} />
        ) : currentPage === 'projects' ? (
          <ProjectsPage />
        ) : currentPage === 'professional-journey' ? (
          <ProfessionalJourneyPage />
        ) : currentPage === 'contact' ? (
          <ContactPage />
        ) : currentPage === 'journal' ? (
          <JournalPage />
        ) : (
          <section
            aria-label={pageTitles[currentPage]}
            className="mx-auto flex w-full max-w-[1440px] flex-1 items-start px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
          >
            <h1 className="text-[clamp(2.8rem,6.7vw,6.4rem)] font-normal leading-[0.99] tracking-[-0.075em]">
              {pageTitles[currentPage]}
            </h1>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
