
import Hero from "@/components/Hero";
import ValuePropositions from "@/components/ValuePropositions";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <ValuePropositions />
      <HowItWorks />
      
      {/* Image section between How It Works and Pricing */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/4ebd6774-8380-4258-969f-5199ddc19202.png" 
              alt="Inner Circle Community Mobile Views" 
              className="w-full h-auto max-w-4xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
