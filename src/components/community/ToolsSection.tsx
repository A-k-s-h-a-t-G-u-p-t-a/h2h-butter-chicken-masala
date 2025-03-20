import { Stage } from '@/config/communityRoutes';
import { getEntrepreneurTools } from '@/config/communityContent';

interface Tool {
  name: string;
  description: string;
  link: string;
}

export default function ToolsSection({ stage }: { stage: Stage }) {
  const tools = getEntrepreneurTools(stage);
  
  return (
    <section className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      {tools.map((tool: Tool, i: number) => (
        <div key={i}>
          <h3 className="text-white font-medium mb-2">{tool.name}</h3>
          <p className="text-gray-400 text-sm">{tool.description}</p>
        </div>
      ))}
    </section>
  );
}