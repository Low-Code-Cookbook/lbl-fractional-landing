
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all">
            Join 500+ fractional experts growing their practice
          </div>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
          Stop Chasing Clients.<br />
          <span className="text-purple-600">Start Being Discovered.</span>
        </h1>
        
        <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
          Join the Launch by Lunch Inner Circle — where fractional CTOs, CROs, CPOs, and expert operators build their reputation, grow their revenue, and expand their reach.
        </p>
        
        <div className="mt-10 flex items-center justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 text-lg group"
            onClick={() => window.open('https://launchbylunch.co/community', '_blank')}
          >
            Join the Inner Circle
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
