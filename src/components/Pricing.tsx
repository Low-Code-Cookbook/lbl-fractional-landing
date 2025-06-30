
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Access to founder and startup network",
  "Host monthly expert sessions",
  "Publish in community newsletter",
  "LinkedIn promotion support",
  "Collaboration opportunities",
  "Revenue stabilization tools",
  "Thought leadership platform",
  "Cross-referral network"
];

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            One plan, everything included. Cancel anytime.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Inner Circle Membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Join a curated community of fractional experts and startup founders. Grow your practice through discovery, thought leadership, and collaboration.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-purple-600">What's included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-purple-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Monthly membership</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$59</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-medium text-green-800">
                    💰 Save with Annual Plan
                  </p>
                  <p className="text-xs text-green-700 mt-1">
                    Pay yearly and get 2 months free!
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="mt-10 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 group"
                  asChild
                >
                  <Link to="/apply">
                    Get started today
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Cancel anytime. No long-term commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
