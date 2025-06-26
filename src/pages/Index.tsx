
import Hero from "@/components/Hero";
import ValuePropositions from "@/components/ValuePropositions";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <ValuePropositions />
      <HowItWorks />
      <Pricing />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Index;
