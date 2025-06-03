
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, DollarSign, Calendar, Plus } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WaitlistForm from '@/components/WaitlistForm';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSuccess = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setShowWaitlist(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 overflow-hidden">
      {/* Animated Background Elements */}
      <FloatingElements />
      
      {/* Header */}
      <header className="relative z-20 p-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-apple-blue to-apple-purple rounded-2xl flex items-center justify-center">
              <DollarSign className="text-white w-6 h-6" />
            </div>
            <span className="text-white font-bold text-xl">BudgetPro</span>
          </div>
          
          <Button 
            onClick={() => setShowWaitlist(true)}
            className="glass-button text-white font-medium px-6 py-3 rounded-2xl hover:scale-105 transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection onJoinWaitlist={() => setShowWaitlist(true)} />
        <FeaturesSection />
      </main>

      {/* Waitlist Dialog */}
      <Dialog open={showWaitlist} onOpenChange={setShowWaitlist}>
        <DialogContent className="glass-card border-0 text-white max-w-md mx-auto rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              {isSubmitted ? "You're In!" : "Join the Waitlist"}
            </DialogTitle>
          </DialogHeader>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-apple-green rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <Check className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg">Welcome to the BudgetPro family!</p>
              <p className="text-sm opacity-80 mt-2">We'll notify you when we launch.</p>
            </div>
          ) : (
            <WaitlistForm onSuccess={handleWaitlistSuccess} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
