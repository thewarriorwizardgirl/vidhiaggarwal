export type Project = {
  name: string
  description: string
  image: string
  status: 'Live' | 'Soon'
  href?: string
}

export type ProjectGroup = {
  title: string
  subtitle: string
  projects: Project[]
}

const comingSoonImage = '/images/projects/coming-soon.png'

export const projectGroups: ProjectGroup[] = [
  {
    title: 'Portfolios',
    subtitle: 'Personal & Professional Showcases',
    projects: [
      {
        name: "Shruti's Studio",
        description: 'Artist & Designer Portfolio',
        image: '/images/projects/shruti.png',
        href: 'https://shruti-bansal.netlify.app/',
        status: 'Live',
      },
      {
        name: 'Space Ishika',
        description: 'Product Leadership & Systems',
        image: comingSoonImage,
        status: 'Soon',
      },     
    ],
  },
  {
    title: 'Business',
    subtitle: 'Commercial & Storefronts',
    projects: [
      {
        name: 'My Kitchen Garden',
        description: 'E-commerce & Homegrown Produce',
        image: '/images/projects/kitchen-garden.png',
        status: 'Live',
        href: 'https://my-kitchen-garden.netlify.app',
      },
      {
        name: 'South Indian Tea',
        description: 'Single-Estate Direct Storefront',
        image: comingSoonImage,
        status: 'Soon',
      },
      {
        name: 'Custom Gifting',
        description: 'Bespoke Packaging & Hampers',
        image: comingSoonImage,
        status: 'Soon',
      },
    ],
  },
]
