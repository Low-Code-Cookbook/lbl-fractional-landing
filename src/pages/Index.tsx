
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
      
      {/* SMS-style testimonial section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-3xl p-6 max-w-md mx-auto shadow-sm">
              {/* SMS header */}
              <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-gray-200">
                <img 
                  src="/lovable-uploads/2911f019-445e-4c4d-8057-23611396794e.png" 
                  alt="Jamie" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900 text-sm">Jamie</div>
                  <div className="text-xs text-gray-500">Inner Circle Member</div>
                </div>
                <div className="ml-auto text-xs text-gray-400">now</div>
              </div>
              
              {/* SMS message bubble */}
              <div className="space-y-2">
                <div className="bg-blue-500 text-white rounded-2xl rounded-bl-md px-4 py-3 max-w-xs ml-auto">
                  <p className="text-sm leading-relaxed">
                    One of your accelerator members hired me actually. We were in the same cohort. Connecting with other community members is the easiest way to build dealflow.
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="text-xs text-gray-400">Delivered</div>
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
