import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const buyers = [
  'Maria S.', 'João P.', 'Ana C.', 'Carlos M.', 'Fernanda L.',
  'Ricardo B.', 'Julia R.', 'Pedro H.', 'Camila T.', 'Rafael G.'
];

export function PurchaseNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(buyers[0]);

  useEffect(() => {
    const showNotification = () => {
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentBuyer(randomBuyer);
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);
    
    // Show notification every 8-15 seconds
    const interval = setInterval(showNotification, Math.random() * 7000 + 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className={`fixed top-4 left-4 z-50 bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 px-6 py-3 rounded-full shadow-2xl font-semibold transition-transform duration-500 ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <CheckCircle className="inline w-5 h-5 mr-2" />
      <span>{currentBuyer} acabou de comprar o curso!</span>
    </div>
  );
}
