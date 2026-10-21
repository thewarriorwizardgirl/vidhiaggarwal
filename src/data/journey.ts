export type JourneyCategory =
  | 'Software Engineering'
  | 'EdTech & Research'
  | 'Education'

export type Milestone = {
  id: string
  category: JourneyCategory
  date: string
  role: string
  organization: string
  location: string
  summary: string
  details: string[]
  technologies: string[]
}

export const milestones: Milestone[] = [
  {
    id: 'salesforce',
    category: 'Software Engineering',
    date: 'JAN, 2025 – PRESENT',
    role: 'Senior Member of Technical Staff (SMTS)',
    organization: 'Salesforce (Data Cloud)',
    location: 'Bengaluru, India',
    summary:
      'Architecting core software systems processing massive customer data 24/7 with high reliability.',
    details: [
      'Build and scale the core software systems that process massive amounts of customer data every second for businesses worldwide.',
      'Collaborate with international engineering teams to ensure the Data Cloud platform stays fast, reliable, resilient, and runs 24/7 without crashing.',
    ],
    technologies: [
      'LWC',
      'React',
      'Java',
      'Spring Boot',
      'Salesforce Data Cloud',
      'Microservices',
    ],
  },
  {
    id: 'indihood',
    category: 'Software Engineering',
    date: 'SEP, 2020 – JAN, 2025',
    role: 'Application Developer',
    organization: 'Indihood',
    location: 'Bengaluru, India',
    summary:
      'Built automated loan repayment engines, 12-language legal contracts, and instant QR payment systems.',
    details: [
      'Built an automated payment system that processes electronic loan repayments quickly and securely without manual intervention.',
      'Created a smart document tool that automatically generates official legal contracts in 12 different regional Indian languages.',
      'Connected automated SMS and WhatsApp notification services, as well as instant QR code payment options for users.',
      'Designed simple and secure login systems using OTPs (one-time passwords) to protect user accounts.',
    ],
    technologies: [
      'Kotlin',
      'Java',
      'TypeScript',
      'Flutter',
      'Google Cloud (GCP)',
      'REST APIs',
    ],
  },
  {
    id: 'scholarminds',
    category: 'EdTech & Research',
    date: 'DEC, 2018 – SEP, 2020',
    role: 'Founder | Tech Department',
    organization: 'ScholarMinds',
    location: 'Bengaluru, India',
    summary:
      'Combined software programming with hands-on robotics and microcontroller hardware for learners.',
    details: [
      'Founded the technology wing of ScholarMinds, spearheading hands-on tech curriculum.',
      'Taught building fun, hands-on projects combining software code with simple robotics, microcontrollers, and electronics hardware.',
    ],
    technologies: ['Python', 'C++', 'Arduino', 'Raspberry Pi', 'Robotics Hardware'],
  },
  {
    id: 'bank-of-america',
    category: 'Software Engineering',
    date: 'JUL, 2016 – AUG, 2018',
    role: 'Senior Software Associate (Financial Systems)',
    organization: 'Bank of America',
    location: 'Gurgaon, India',
    summary:
      'Engineered backend for peer-to-peer money transfers and improved internal web app latency for investment bankers.',
    details: [
      'Built the background software for a person-to-person money transfer system that safely links bank accounts to phone numbers and email addresses.',
      'Improved the look, feel, and loading speed of internal web applications used daily by investment bankers worldwide.',
    ],
    technologies: [
      'Java',
      'Spring Framework',
      'JavaScript',
      'SQL',
      'Financial Systems',
    ],
  },
  {
    id: 'coding-blocks',
    category: 'EdTech & Research',
    date: 'DEC, 2015 – AUG, 2016',
    role: 'Teaching Assistant',
    organization: 'Coding Blocks',
    location: 'New Delhi, India',
    summary:
      'Taught programming, data structures, and problem-solving to over 200 college students.',
    details: [
      'Taught programming, algorithms, and problem-solving skills to over 200 college students and aspiring developers.',
      'Authored technical blogs for Coding Ninjas breaking down complex algorithmic concepts into digestible steps.',
    ],
    technologies: ['C++', 'Data Structures & Algorithms', 'Technical Writing'],
  },
  {
    id: 'iisc',
    category: 'EdTech & Research',
    date: 'APR, 2014 – AUG, 2014',
    role: 'Research Intern — Biomedical Diagnostics',
    organization: 'Indian Institute of Science (IISc)',
    location: 'Bengaluru, India',
    summary:
      'Helped build a portable laser-based diagnostic malaria detection device; received National Innovation Award.',
    details: [
      "Won Government of India's 'Best Innovator's Pitch' Award.",
      'Helped build a portable diagnostic device for malaria detection that analyzes blood samples on the spot using laser optics and custom software.',
      'Awarded the "Best Innovator\'s Pitch" from the Government of India for the breakthrough project.',
    ],
    technologies: [
      'Optical Laser Diagnostics',
      'Custom Diagnostic Software',
      'Signal Analysis',
    ],
  },
  {
    id: 'dtu',
    category: 'Education',
    date: '2012 – 2016',
    role: 'Bachelor of Technology (B.Tech)',
    organization: 'Delhi College of Engineering (DTU)',
    location: 'Delhi, India',
    summary:
      'Major in Electronics Engineering, Minors in Computer Science & Physics (GPA: 7.7/10.0).',
    details: [
      'Major: Electronics Engineering | Minors: Computer Science & Physics (GPA: 7.7 / 10.0).',
      'Founder of 3Z3S (sustainable and smart places) — 2nd Position in Delhi Business Plan Contest (2015).',
      'Transmission Systems Lead at Efficycle-DTU, Team Coordinator at Texas Instruments Analog Circuit Design (2014).',
      'Organizer cum Compere of E-Summit 2014, Engifest 2014, Global Alumni Conclave 2013, and Student Member at E-Cell DTU, IEEE-DTU, Taekwondo Club DTU.',
    ],
    technologies: [
      'Computer Science',
      'Physics',
      'Electronics Engineering',
      'Team Leadership',
    ],
  },
]
