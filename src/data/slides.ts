export type Slide = {
  number: string
  eyebrow: string
  title: string
  description: string
  buttonLabel: string
  buttonPage: 'projects' | 'journal'
  image: string
  imageAlt: string
  imageTone: 'color' | 'mono'
}

export const slides: Slide[] = [
  {
    number: '01',
    eyebrow: 'A little about me',
    title: 'Curious by nature.\nCreative by choice.',
    description:
      'I’m Vidhi — a maker, a dreamer, and a perpetual work in progress. \n\n This is my little corner of the internet, where I build web apps for people and businesses, share what I create, and explore the ideas that keep me curious.',
      
    buttonLabel: 'My Work',
    buttonPage: 'projects',
    image: '/images/home/slide1-workstation.jpeg',
    imageAlt: 'Developer at their workstation',
    imageTone: 'color',
  },
  {
    number: '02',
    eyebrow: 'Things I believe',
    title: 'Always becoming.\nNever quite done.',
    description:
      'New chapters, little experiments, and big dreams — I’m here for all of it. Take a look around and see what we might make of the next one.',
    buttonLabel: 'My Adventures',
    buttonPage: 'journal',
    image:
      '/images/home/slide2-trek.jpg',
    imageAlt: 'Adventurer',
    imageTone: 'color',
  },
  {
    number: '03',
    eyebrow: 'What comes next',
    title: 'Make room for\nwonder.',
    description:
      'The best ideas start with a question. I like following the unexpected ones, gathering inspiration along the way, and seeing what takes shape.',
    buttonLabel: 'My Journal',
    buttonPage: 'journal',
    image:
      '/images/home/slide3-journal.jpg',
    imageAlt: 'Journaling',
    imageTone: 'color',
  },
]
