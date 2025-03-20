// components/community/StageForm.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { STAGES, Stage } from '@/config/communityRoutes';
import { getStageDescription } from '@/config/communityContent';
import { stageTitles } from '@/config/communityRoutes';
export default function StageForm() {
  const [stage, setStage] = useState<Stage | null>(null);
  const [details, setDetails] = useState({
    name: '',
    industry: '',
    description: ''
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (stage) router.push(`/community/${stage}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-6 rounded-xl border border-gray-800">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Startup Name"
          className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 text-white"
          value={details.name}
          onChange={(e) => setDetails({...details, name: e.target.value})}
        />
        <input
          type="text"
          placeholder="Industry"
          className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 text-white"
          value={details.industry}
          onChange={(e) => setDetails({...details, industry: e.target.value})}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STAGES.map((s) => (
            <div
              key={s}
              onClick={() => setStage(s)}
              className={`p-6 rounded-xl border-2 cursor-pointer ${
                stage === s ? 'border-white bg-gray-800' : 'border-gray-700'
              }`}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">
                {stageTitles[s]}
              </h3>
              <p className="text-gray-400 text-sm">
                {getStageDescription(s)}
              </p>
            </div>
          ))}
        </div>
        <button
          type="submit"
          disabled={!stage}
          className="w-full bg-white text-black py-3 rounded-lg font-medium disabled:opacity-50"
        >
          Access Community
        </button>
      </div>
    </form>
  );
}