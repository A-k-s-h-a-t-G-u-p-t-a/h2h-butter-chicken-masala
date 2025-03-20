// components/community/StageNavigation.tsx
import Link from 'next/link';
import { STAGES, stageTitles, Stage } from '@/config/communityRoutes';

export default function StageNavigation({ currentStage }: { currentStage: Stage }) {
  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 flex space-x-8 overflow-x-auto">
        {STAGES.map((stage) => (
          <Link
            key={stage}
            href={`/community/${stage}`}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentStage === stage
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            {stageTitles[stage]}
          </Link>
        ))}
      </div>
    </nav>
  );
}