
import { Search, Users, Trophy, DollarSign, Handshake } from "lucide-react";

const features = [
  {
    name: "Get Discovered",
    description: "Referrals are great—but limited. We help you become discoverable to founders and teams actively looking for your expertise.",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Grow Your Audience",
    description: "Already writing a newsletter? Publish articles to our platform and tap into a like-minded community ready to read, share, and engage.",
    icon: Users,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Build Credibility & Thought Leadership",
    description: "Share insights, answer questions, and contribute to discussions. Earn trust, grow your brand, and position yourself as a go-to expert.",
    icon: Trophy,
    gradient: "from-amber-500 to-orange-500"
  },
  {
    name: "Stabilize Revenue",
    description: "We help you reduce feast-or-famine cycles by giving you visibility and tools to attract long-term, better-fit clients.",
    icon: DollarSign,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "Expand Through Collaboration",
    description: "Fractionals need other fractionals. Partner on projects, cross-refer clients, and sharpen your edge through peer conversations.",
    icon: Handshake,
    gradient: "from-indigo-500 to-purple-500"
  }
];

const ValuePropositions = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">What We Offer</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to grow your fractional practice
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stop struggling with the feast-or-famine cycle. Join a community designed specifically for fractional experts who want to scale.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
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
