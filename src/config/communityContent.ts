import { Stage } from './communityRoutes';

// Stage Cards Data
export const getStageDescription = (stage: Stage): string => {
  return {
    'ideation-and-validation': 'Validating business idea, building prototype',
    'mvp-and-early-traction': 'Launched MVP, acquiring first customers',
    'product-market-fit-and-growth': 'Scaling user base, optimizing operations',
    'scaling-and-expansion': 'Expanding to new markets, fundraising'
  }[stage];
};

// Marketplace Data
export const getMarketplaceResources = (stage: Stage) => {
  const commonFreelancers = [
    { name: 'John TechLead', skills: ['React', 'Node.js', 'AWS'] },
    { name: 'Sarah MVP', skills: ['Product Design', 'Prototyping'] }
  ];

  return {
    freelancers: stage === 'ideation-and-validation' 
      ? commonFreelancers 
      : [...commonFreelancers, { name: 'Growth Marketer', skills: ['SEO', 'Customer Acquisition'] }],
    products: [
      { name: 'Analytics Suite', category: 'Productivity' },
      { name: 'CRM Tool', category: 'Sales' }
    ]
  };
};

// Entrepreneur Tools Data
export const getEntrepreneurTools = (stage: Stage) => {
  return [
    { 
      name: 'Financial Model Template', 
      description: 'Stage-specific financial planning template',
      link: '#'
    },
    { 
      name: 'User Survey Generator', 
      description: 'AI-powered survey question builder',
      link: '#'
    }
  ];
};

// Add this to communityRoutes.ts
export const stageTitles: Record<Stage, string> = {
  'ideation-and-validation': 'Ideation & Validation',
  'mvp-and-early-traction': 'MVP & Early Traction',
  'product-market-fit-and-growth': 'Product Market Fit & Growth',
  'scaling-and-expansion': 'Scaling & Expansion'
};
export const getCommunityResources = (stage: Stage) => {
  return {
    knowledgeResources: [
      'Market validation toolkit',
      'User research templates',
      'Competitive analysis framework'
    ],
    nextEvent: 'Startup Growth Workshop - October 15th'
  };
};

