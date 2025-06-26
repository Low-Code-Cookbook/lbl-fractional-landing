
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
      
      {/* Testimonial section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
              <blockquote className="text-xl text-gray-700 mb-6">
                "One of your accelerator members hired me actually. We were in the same cohort."
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src="/lovable-uploads/2911f019-445e-4c4d-8057-23611396794e.png" 
                    alt="Jamie" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Jamie</div>
                    <div className="text-sm text-purple-600">Inner Circle Member</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
