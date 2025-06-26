
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Fractional CTO",
    company: "TechStartup Advisor",
    content: "The Inner Circle transformed my practice. I went from hunting for clients to having founders reach out to me directly. The community support is incredible.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Fractional CPO",
    company: "Product Strategy Consulting",
    content: "Being able to collaborate with other fractionals and share insights has not only grown my network but also my expertise. The monthly sessions are gold.",
    rating: 5
  },
  {
    name: "Jennifer Walsh",
    role: "Fractional CRO",
    company: "Revenue Growth Partners",
    content: "Finally, a platform that understands the unique challenges of fractional work. The thought leadership opportunities have positioned me as a go-to expert.",
    rating: 5
  }
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-purple-200 mb-4" />
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-purple-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
