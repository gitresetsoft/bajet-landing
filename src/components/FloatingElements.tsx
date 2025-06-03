
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-apple-blue/20 to-apple-purple/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-apple-pink/20 to-apple-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-apple-green/20 to-apple-yellow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-8 h-8 bg-white/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/10 rounded-sm rotate-12 animate-float" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/6 left-1/6 w-32 h-32 bg-gradient-to-r from-apple-blue/30 to-transparent rounded-full blur-2xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-gradient-to-r from-apple-green/30 to-transparent rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default FloatingElements;
