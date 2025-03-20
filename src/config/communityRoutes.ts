export const STAGES = [
  'ideation-and-validation',
  'mvp-and-early-traction',
  'product-market-fit-and-growth',
  'scaling-and-expansion'
] as const;

// Explicitly define and export the Stage type
export type Stage = typeof STAGES[number];

// Export stage titles with proper typing
export const stageTitles: Record<Stage, string> = {
  'ideation-and-validation': 'Ideation & Validation',
  'mvp-and-early-traction': 'MVP & Early Traction',
  'product-market-fit-and-growth': 'Product Market Fit & Growth',
  'scaling-and-expansion': 'Scaling & Expansion'
};

export const getStageDescription = (stage: Stage): string => {
  return {
    'ideation-and-validation': 'Validate your concept and build your foundation',
    'mvp-and-early-traction': 'Develop your MVP and gain initial traction',
    'product-market-fit-and-growth': 'Scale efficiently and optimize growth',
    'scaling-and-expansion': 'Expand your reach and maximize impact'
  }[stage];
};