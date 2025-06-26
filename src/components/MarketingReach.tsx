
import { Linkedin, Mail, TrendingUp, Users } from "lucide-react";

const marketingFeatures = [
  {
    name: "LinkedIn Promotion",
    description: "Get featured in our LinkedIn posts reaching 50k+ founders and investors monthly",
    icon: Linkedin,
    gradient: "from-blue-600 to-blue-500"
  },
  {
    name: "Email Marketing",
    description: "Be included in our weekly newsletter sent to 10k+ startup founders and VCs",
    icon: Mail,
    gradient: "from-purple-600 to-purple-500"
  },
  {
    name: "Thought Leadership",
    description: "Position yourself as an expert through our content distribution network",
    icon: TrendingUp,
    gradient: "from-green-600 to-green-500"
  },
  {
    name: "Network Access",
    description: "Direct connections to pre-vetted founders and investors in our community",
    icon: Users,
    gradient: "from-amber-600 to-amber-500"
  }
];

const MarketingReach = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">Marketing & Reach</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get promoted to our audience of founders and investors
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leverage our established marketing channels to reach thousands of potential clients who are actively seeking fractional expertise.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
            {marketingFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col group hover:scale-105 transition-transform duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-2 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default MarketingReach;
