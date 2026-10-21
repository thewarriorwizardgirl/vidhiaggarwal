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
    title: 'Business Websites',
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
        name: 'New India Logistics (Import Export Business)',
        description: 'Global Freight & Supply Chain',
        image: comingSoonImage,
        status: 'Soon',
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
  {
    title: 'Personal Portfolios',
    subtitle: 'Profiles & Case Studies',
    projects: [
      {
        name: 'CA Bhawna',
        description: 'Chartered Accountancy Practice',
        image: comingSoonImage,
        status: 'Soon',
      },
      {
        name: 'Versatile Shruti',
        description: 'Creative Portfolio & Design',
        image: comingSoonImage,
        status: 'Soon',
      },
      {
        name: 'Product Manager Ishika',
        description: 'Product Leadership & Systems',
        image: comingSoonImage,
        status: 'Soon',
      },
    ],
  },
]
