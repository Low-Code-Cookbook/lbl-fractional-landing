

import { Search, Users, Trophy, DollarSign } from "lucide-react";

const features = [
  {
    name: "Get Discovered",
    description: "Connect with a community of founders using AI to build their ideas—they need AI-enabled fractional thinkers like you to guide their journey.",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Grow Your Audience",
    description: "Already writing a newsletter? Publish articles to our platform and tap into a like-minded community of AI-forward founders ready to read, share, and engage.",
    icon: Users,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Build Credibility & Thought Leadership",
    description: "Share AI insights, answer questions from founders building with AI, and contribute to discussions. Position yourself as the go-to expert for AI-enabled businesses.",
    icon: Trophy,
    gradient: "from-amber-500 to-orange-500"
  },
  {
    name: "Stabilize Revenue",
    description: "Access a steady stream of AI-forward founders who value fractional expertise. Reduce feast-or-famine cycles with clients who understand the future of business.",
    icon: DollarSign,
    gradient: "from-green-500 to-emerald-500"
  }
];

const ValuePropositions = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">What We Offer</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Connect with AI-forward founders who need your expertise
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join a community where AI-enabled founders actively seek fractional experts to guide their ventures. Stop struggling with the feast-or-famine cycle.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
            {features.map((feature) => (
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

export default ValuePropositions;

