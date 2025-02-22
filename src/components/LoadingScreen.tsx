import  { useState, useEffect } from 'react';
import LandingPage from "./landingPage";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing systems...');
  const [isLoading, setIsLoading] = useState(true);

  const loadingTexts = [
    'Initializing systems...',
    'Establishing secure connection...',
    'Bypassing firewalls...',
    'Decrypting data streams...',
    'Loading neural networks...',
    'Synchronizing quantum processors...',
    'Accessing mainframe...'
  ];

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += Math.random() * 15;
        if (currentProgress > 100) currentProgress = 100;
        setProgress(Math.floor(currentProgress));
        setLoadingText(loadingTexts[Math.floor((currentProgress / 100) * loadingTexts.length)]);
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) {
    return <LandingPage />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Matrix rain effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#58d5c2] font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fall ${Math.random() * 2 + 1}s linear infinite`,
            }}
          >
            {String.fromCharCode(33 + Math.random() * 93)}
          </div>
        ))}
      </div>

      {/* Circuit board lines */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-[#58d5c2] opacity-20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative w-32 h-32 mb-8">
        <img
          src="logo-fox-light.png"
          alt="Fox Logo"
          className="w-full h-full object-contain animate-pulse"
        />
        <div className="absolute inset-0 cyber-glitch-effect" />
      </div>

      {/* Loading bar */}
      <div className="w-64 h-2 bg-gray-800 rounded-full mb-4 relative overflow-hidden">
        <div
          className="h-full bg-[#58d5c2] rounded-full transition-all duration-300 relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 cyber-loading-glitch" />
        </div>
      </div>

      {/* Progress text */}
      <div className="text-[#58d5c2] font-mono mb-2">
        {progress}% Complete
      </div>

      {/* Loading message */}
      <div className="text-[#58d5c2] font-mono text-sm min-h-[20px] relative">
        <span className="cyber-text-glitch">{loadingText}</span>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(1000%); opacity: 0; }
        }

        .cyber-glitch-effect {
          animation: glitch 1s infinite;
          opacity: 0.5;
          background: linear-gradient(45deg, transparent 65%, #58d5c2 70%, transparent 75%);
        }

        .cyber-loading-glitch {
          background: linear-gradient(90deg, transparent, rgba(88, 213, 194, 0.4), transparent);
          animation: loading-glitch 1s infinite;
        }

        .cyber-text-glitch {
          animation: text-glitch 0.3s infinite;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes loading-glitch {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes text-glitch {
          0% { opacity: 1; }
          50% { opacity: 0.8; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;