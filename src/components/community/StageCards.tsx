import { STAGES, stageTitles, Stage } from '@/config/communityRoutes';
import { getStageDescription } from '@/config/communityContent';

export default function StageCards({
  selectedStage,
  onSelect
}: {
  selectedStage: Stage | null;
  onSelect: (stage: Stage) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {STAGES.map((stage) => (
        <div
          key={stage}
          onClick={() => onSelect(stage)}
          className={`p-6 rounded-xl border-2 cursor-pointer transition-all
            ${selectedStage === stage 
              ? 'border-white bg-gray-800' 
              : 'border-gray-700 hover:border-gray-500'}
          `}
        >
          <h3 className="text-lg font-semibold mb-2">{stageTitles[stage]}</h3>
          <p className="text-gray-400 text-sm">
            {getStageDescription(stage)}
          </p>
        </div>
      ))}
    </div>
  );
}