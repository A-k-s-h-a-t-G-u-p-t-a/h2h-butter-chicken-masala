// components/community/CommunityHub.tsx
import { Stage } from '@/config/communityRoutes';
import { UsersIcon } from '@heroicons/react/24/outline';
import { stageTitles } from '@/config/communityRoutes';
export default function CommunityHub({ stage }: { stage: Stage }) {
  return (
    <section className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
        <UsersIcon className="w-6 h-6" />
        Community Hub
      </h2>
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white">Network Hub</h3>
          <p className="text-gray-400 mt-2">Connect with {stageTitles[stage]} startups</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white">Events and Webinar</h3>
          <p className="text-gray-400 mt-2">Organise events for wider audience </p>
        </div>
      </div>
    </section>
  );
}