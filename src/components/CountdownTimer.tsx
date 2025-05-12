import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  hours: number;
  onComplete?: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  hours, 
  onComplete 
}) => {
  // Set initial time (in seconds)
  const initialTime = hours * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  // Convert seconds to hours, minutes, seconds
  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    };
  };

  const { hours: h, minutes: m, seconds: s } = formatTime();

  return (
    <div className="w-full bg-cyber-dark border-2 border-cyber-orange rounded-md p-4 my-4">
      <p className="text-cyber-yellow font-cyber text-center uppercase mb-2">INSANE DEAL ENDS IN:</p>
      <div className="flex justify-center items-center space-x-2 font-display text-xl md:text-3xl">
        <div className="flex flex-col items-center">
          <div className="bg-cyber-black px-2 py-1 rounded border border-cyber-pink text-cyber-pink">
            {h}
          </div>
          <span className="text-xs text-cyber-green mt-1">HRS</span>
        </div>
        <div className="text-cyber-pink animate-pulse">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-cyber-black px-2 py-1 rounded border border-cyber-blue text-cyber-blue">
            {m}
          </div>
          <span className="text-xs text-cyber-green mt-1">MIN</span>
        </div>
        <div className="text-cyber-pink animate-pulse">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-cyber-black px-2 py-1 rounded border border-cyber-green text-cyber-green animate-pulse">
            {s}
          </div>
          <span className="text-xs text-cyber-green mt-1">SEC</span>
        </div>
      </div>
    </div>
  );
};