// app/community/[stage]/page.tsx
import { STAGES, Stage, stageTitles } from '@/config/communityRoutes';

import CommunityLayout from '@/components/community/CommunityLayout';
import CommunityHub from '@/components/community/CommunityHub';
import GuidanceSection from '@/components/community/GuidanceSection';
import MarketplaceSection from '@/components/community/MarketplaceSection';
import ToolsSection from '@/components/community/ToolsSection';

export async function generateStaticParams() {
  return STAGES.map((stage) => ({ stage }));
}

export default function CommunityStagePage({ params }: { params: { stage: string } }) {
  const stage = params.stage as Stage;

  return (
    <CommunityLayout stage={stage}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommunityHub stage={stage} />
        <GuidanceSection stage={stage} />
        <MarketplaceSection stage={stage} />
        <ToolsSection stage={stage} />
      </div>
    </CommunityLayout>
  );
}