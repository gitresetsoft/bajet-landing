
import { Button } from '@/components/ui/button';
import { DollarSign, Calendar, Plus } from 'lucide-react';

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section className="relative px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Text */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-slide-up">
          Budget Like a
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Pro
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          The most beautiful and intuitive way to track your expenses, 
          set budgets, and achieve your financial goals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={onJoinWaitlist}
            className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-2xl text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Join Waitlist
          </Button>
          
          <Button 
            variant="outline"
            className="glass-button text-white border-white/30 font-semibold px-8 py-4 rounded-2xl text-lg"
          >
            Watch Demo
          </Button>
        </div>

        {/* App Preview */}
        <div className="relative max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card rounded-3xl p-8 hover-lift">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl">
              {/* Mock App Interface */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-xl font-semibold">This Month</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-apple-green to-apple-blue p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-white/80 text-sm">Income</p>
                      <p className="text-white font-bold text-lg">$5,240</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-apple-orange to-apple-red p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-white/80 text-sm">Expenses</p>
                      <p className="text-white font-bold text-lg">$3,180</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-apple-purple to-apple-pink p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Plus className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-white/80 text-sm">Saved</p>
                      <p className="text-white font-bold text-lg">$2,060</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Bars */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Food & Dining</span>
                  <span className="text-white">$520 / $600</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-apple-green to-apple-blue h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Transportation</span>
                  <span className="text-white">$280 / $400</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-apple-orange to-apple-yellow h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Entertainment</span>
                  <span className="text-white">$150 / $300</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-apple-purple to-apple-pink h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
