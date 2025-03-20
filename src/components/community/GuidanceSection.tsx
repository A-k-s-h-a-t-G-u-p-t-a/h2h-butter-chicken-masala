// components/community/GuidanceSection.tsx
import { Stage } from '@/config/communityRoutes';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

interface Mentor {
  name: string;
  expertise: string;
  experience: string;
}

interface IndustryExpert {
  name: string;
  role: string;
  company: string;
}

export default function GuidanceSection({ stage }: { stage: Stage }) {
  const guidance = getGuidanceResources(stage);
  
  return (
    <section className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-gray-300 flex items-center gap-2">
        <AcademicCapIcon className="w-6 h-6 text-white" />
        Guidance & Mentorship
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <BriefcaseIcon className="w-5 h-5" />
            Recommended Mentors
          </h3>
          <div className="space-y-4">
            {guidance.mentors.map((mentor, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                <h4 className="text-white font-medium">{mentor.name}</h4>
                <p className="text-gray-400 text-sm mt-1">{mentor.expertise}</p>
                <p className="text-gray-500 text-xs mt-2">{mentor.experience}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Industry Experts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guidance.industryExperts.map((expert, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                <h4 className="text-white font-medium">{expert.name}</h4>
                <p className="text-gray-400 text-sm mt-1">{expert.role}</p>
                <p className="text-gray-500 text-xs mt-2">{expert.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getGuidanceResources(stage: Stage): { mentors: Mentor[]; industryExperts: IndustryExpert[] } {
  const stageData = {
    'ideation-and-validation': {
      mentors: [
        {
          name: "Sarah Johnson",
          expertise: "Idea Validation & Market Research",
          experience: "10+ years helping startups validate concepts",
        },
        {
          name: "Michael Chen",
          expertise: "Prototyping & User Testing",
          experience: "Built 50+ prototypes for early-stage startups",
        },
      ],
      industryExperts: [
        {
          name: "Emma Wilson",
          role: "VC Partner",
          company: "Seed Innovators",
        },
        {
          name: "David Kim",
          role: "Product Strategist",
          company: "TechAdvisors Inc",
        },
      ],
    },
    'mvp-and-early-traction': {
      mentors: [
        {
          name: "Alex Martinez",
          expertise: "MVP Development & Iteration",
          experience: "Helped launch 30+ successful MVPs",
        },
        {
          name: "Priya Patel",
          expertise: "Early User Acquisition",
          experience: "Growth expert for SaaS startups",
        },
      ],
      industryExperts: [
        {
          name: "James Carter",
          role: "Product Manager",
          company: "ScaleFast",
        },
        {
          name: "Linda Nguyen",
          role: "UX Lead",
          company: "DigitalFoundry",
        },
      ],
    },
    'product-market-fit-and-growth': {
      mentors: [
        {
          name: "Rachel Green",
          expertise: "Scaling Operations",
          experience: "Scaled 10+ startups to $10M ARR",
        },
        {
          name: "Mark Taylor",
          expertise: "Growth Marketing",
          experience: "Expert in viral growth strategies",
        },
      ],
      industryExperts: [
        {
          name: "Sophia Lee",
          role: "CFO",
          company: "GrowthCapital Partners",
        },
        {
          name: "Daniel Roy",
          role: "CTO",
          company: "TechScale Inc",
        },
      ],
    },
    'scaling-and-expansion': {
      mentors: [
        {
          name: "Emily Zhang",
          expertise: "Enterprise Sales",
          experience: "Built sales teams for 5 unicorn startups",
        },
        {
          name: "Ryan Park",
          expertise: "International Expansion",
          experience: "Led global expansion for 10+ companies",
        },
      ],
      industryExperts: [
        {
          name: "Olivia Brown",
          role: "Investment Partner",
          company: "GlobalVentures",
        },
        {
          name: "Kevin Smith",
          role: "M&A Specialist",
          company: "CorporateGrowth Advisors",
        },
      ],
    },
  };

  return stageData[stage];
}