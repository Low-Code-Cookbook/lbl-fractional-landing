import { UserPlus, Video, MessageCircle, PenTool } from "lucide-react";

const steps = [
  {
    name: "Join the Platform",
    description: "$59/month gets you in",
    icon: UserPlus,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    name: "Host a Session",
    description: "Lead an expert Q&A or present on a topic",
    icon: Video,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    name: "Engage the Community",
    description: "Answer questions, offer advice, stay top of mind",
    icon: MessageCircle,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    name: "Publish Posts",
    description: "Share your insights in our community newsletter",
    icon: PenTool,
    color: "text-amber-600",
    bgColor: "bg-amber-100"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            One Simple Price, all the value
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow our proven system to build your reputation, expand your network, and grow your revenue.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.name} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className={`rounded-lg p-3 ${step.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                    <div className="ml-4 text-sm font-medium text-gray-500">
                      Step {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.name}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
