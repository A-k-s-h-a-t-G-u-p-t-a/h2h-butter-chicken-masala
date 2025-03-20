// components/community/CommunityLayout.tsx
import { ReactNode } from 'react';
import { Stage } from '@/config/communityRoutes';
import StageNavigation from './StageNavigation';
import { stageTitles } from '@/config/communityRoutes';
export default function CommunityLayout({
  children,
  stage
}: {
  children: ReactNode;
  stage: Stage;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <StageNavigation currentStage={stage} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
          {stageTitles[stage]}
        </h1>
        {children}
      </main>
    </div>
  );
}