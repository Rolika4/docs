import { NoteAsterisk } from '../../components/NoteAsterisk';
import { PricingItem } from './types';

export const pricingList: PricingItem[] = [
  {
    title: 'Open Source',
    description: 'Enjoy essential features at no cost, perfect for getting started.',
    price: 0,
    features: ['Community Support', 'Run on any Kubernetes Cluster', 'Pipelines for Polyglot Microservice'],
    link: {
      href: '/docs/quick-start/quick-start-overview',
      label: 'Start',
    },
    color: 'rgba(239, 239, 255, 1)',
  },
  {
    title: 'Team',
    description: 'Boost teamwork with a plan tailored for small to medium-sized teams.',
    price: 3000,
    features: ['Community Support', 'Run on any Kubernetes Cluster', 'Pipelines for Polyglot Microservice'],
    moreFeatures: {
      features: [
        <>
          25 professional service hours <NoteAsterisk />
        </>,
        <>
          6 months minimum <NoteAsterisk />
          <NoteAsterisk />
        </>,
      ],
    },
    link: {
      href: 'mailto:SupportEPMD-EDP@epam.com',
      label: 'Contact US',
    },
    color: 'rgba(0, 148, 255, 1)',
    label: {
      text: 'Popular',
      color: 'rgba(33, 150, 243, 1)',
    },
  },
  {
    title: 'Scale',
    description: "Access advanced features and scalability options to meet the evolving needs of your growing enterprise.",
    price: 6000,
    features: ['Community Support', 'Run on any Kubernetes Cluster', 'Pipelines for Polyglot Microservice'],
    moreFeatures: {
      features: [
        <>
          60 professional service hours <NoteAsterisk />
        </>,
        <>
          6 months minimum <NoteAsterisk />
          <NoteAsterisk />
        </>,
      ],
    },
    link: {
      href: 'mailto:SupportEPMD-EDP@epam.com',
      label: 'Contact US',
    },
    color: 'rgba(24, 190, 148, 1)',
  },
  {
    title: 'Enterprise',
    description:
      'For mission-critical projects and extensive needs, it delivers top-tier features, priority support, and customizable solutions.',
    price: 13000,
    features: ['Community Support', 'Run on any Kubernetes Cluster', 'Pipelines for Polyglot Microservice'],
    moreFeatures: {
      features: [
        <>
          160 professional service hours <NoteAsterisk />
        </>,
        <>
          3 months minimum <NoteAsterisk />
          <NoteAsterisk />
        </>,
      ],
    },
    link: {
      href: 'mailto:SupportEPMD-EDP@epam.com',
      label: 'Contact US',
    },
    color: 'rgba(153, 85, 239, 1)',
  },
];
