import Link from 'next/link';
import { STAGES, stageTitles, Stage } from '@/config/communityRoutes';

export default function CommunityNavigation({ currentStage }: { currentStage: Stage }) {
  return (
    <nav className="border-b border-surface-tertiary bg-surface-secondary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex space-x-4">
          {STAGES.map((stage) => (
            <Link
              key={stage}
              href={`/community/${stage}`}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentStage === stage
                  ? 'bg-premium-accent/10 text-premium-accent'
                  : 'text-gray-400 hover:bg-surface-tertiary'
              }`}
            >
              {stageTitles[stage]}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}