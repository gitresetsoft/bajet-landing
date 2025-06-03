
import { DollarSign, Calendar, Plus, Check, Clock, Circle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Smart Categorization",
      description: "AI-powered expense categorization that learns your spending habits",
      color: "from-apple-green to-apple-blue",
      delay: "0s"
    },
    {
      icon: Calendar,
      title: "Budget Planning",
      description: "Set monthly budgets and track your progress with beautiful visualizations",
      color: "from-apple-orange to-apple-red",
      delay: "0.2s"
    },
    {
      icon: Plus,
      title: "Goal Tracking",
      description: "Set savings goals and watch your progress with motivating animations",
      color: "from-apple-purple to-apple-pink",
      delay: "0.4s"
    },
    {
      icon: Check,
      title: "Bill Reminders",
      description: "Never miss a payment with smart notifications and reminders",
      color: "from-apple-blue to-apple-purple",
      delay: "0.6s"
    },
    {
      icon: Clock,
      title: "Real-time Sync",
      description: "Your data syncs instantly across all your devices",
      color: "from-apple-yellow to-apple-orange",
      delay: "0.8s"
    },
    {
      icon: Circle,
      title: "Privacy First",
      description: "Bank-level security with end-to-end encryption",
      color: "from-apple-pink to-apple-red",
      delay: "1s"
    }
  ];

  return (
    <section className="relative px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              master your money
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Built with love for people who want to take control of their finances 
            without the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card rounded-3xl p-6 hover-lift animate-slide-up"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 animate-float`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass-card rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Join thousands of users already saving money
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-white mb-2">$2.4M+</div>
              <div className="text-white/80">Total Saved</div>
            </div>
            
            <div className="animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-white mb-2">15,000+</div>
              <div className="text-white/80">Happy Users</div>
            </div>
            
            <div className="animate-bounce-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-white/80">App Store Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
