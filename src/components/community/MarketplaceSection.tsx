import { Stage } from '@/config/communityRoutes';
import { getMarketplaceResources } from '@/config/communityContent';

interface Product {
  name: string;
  category: string;
}

interface Freelancer {
  name: string;
  skills: string[];
}

export default function MarketplaceSection({ stage }: { stage: Stage }) {
  const marketplace = getMarketplaceResources(stage);
  
  return (
    <section className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      {/* ... */}
      {marketplace.products.map((product: Product, i: number) => (
        <div key={i}>
          <h4 className="text-white font-medium">{product.name}</h4>
          <p className="text-gray-400 text-sm">{product.category}</p>
        </div>
      ))}
      {/* Similar for freelancers */}
    </section>
  );
}