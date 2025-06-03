
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface WaitlistFormProps {
  onSuccess: () => void;
}

const WaitlistForm = ({ onSuccess }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Waitlist signup:', { name, email });
    setIsLoading(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl p-4 text-lg focus:bg-white/30 transition-all duration-300"
          required
        />
      </div>
      
      <div>
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl p-4 text-lg focus:bg-white/30 transition-all duration-300"
          required
        />
      </div>
      
      <Button
        type="submit"
        disabled={isLoading || !email || !name}
        className="w-full bg-gradient-to-r from-apple-blue to-apple-purple hover:from-apple-purple hover:to-apple-blue text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
            Joining...
          </div>
        ) : (
          'Join the Waitlist'
        )}
      </Button>
      
      <p className="text-center text-white/60 text-sm">
        Be the first to know when BudgetPro launches
      </p>
    </form>
  );
};

export default WaitlistForm;
