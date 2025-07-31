import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Rocket, Shield, Flame } from "lucide-react";

export function FloatingPurchaseBalloon() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show balloon after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handlePurchaseClick = () => {
    window.open('https://pay.kirvano.com/863bd6c6-bdcb-4e47-b9c4-f53cf11b8137', '_blank');
  };

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-6 py-3 rounded-full shadow-2xl animate-pulse-glow hover:scale-105 transition-all duration-300"
        >
          <Flame className="w-5 h-5 mr-2" />
          OFERTA ESPECIAL
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs md:max-w-sm animate-slide-up">
      <Card className="bg-gradient-to-br from-slate-800/95 to-purple-900/95 backdrop-blur-md neon-border border-2 shadow-2xl">
        <CardContent className="p-4 md:p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              <Flame className="inline w-3 h-3 mr-1" />
              OFERTA IMPERDÍVEL
            </div>
            <div className="flex gap-1">
              <Button
                onClick={() => setIsMinimized(true)}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-1 h-auto"
              >
                _
              </Button>
              <Button
                onClick={() => setIsVisible(false)}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-1 h-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <h3 className="text-base md:text-lg font-bold text-white mb-2">
            🏃‍♂️ Guia RunEvolution
          </h3>
          
          <div className="text-center mb-3">
            <div className="text-gray-400 line-through text-xs md:text-sm">R$ 97,00</div>
            <div className="text-2xl md:text-3xl font-black gradient-text">R$ 17,90</div>
            <div className="text-green-400 font-bold text-xs md:text-sm">81% OFF!</div>
          </div>

          <ul className="text-xs md:text-sm text-gray-300 mb-3 space-y-1">
            <li>✅ Estratégias de pace</li>
            <li>✅ Treinos HIIT e Fartlek</li>
            <li>✅ Plano nutricional</li>
            <li>✅ Suporte especializado</li>
          </ul>

          <Button
            onClick={handlePurchaseClick}
            className="w-full bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-bold text-xs md:text-sm py-2 md:py-3 rounded-lg hover:scale-105 transition-all duration-300 glow-effect mb-2"
          >
            <Rocket className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            GARANTIR AGORA!
          </Button>

          <div className="text-xs text-gray-400 text-center flex items-center justify-center">
            <Shield className="w-3 h-3 mr-1" />
            Garantia de 7 dias
          </div>
        </CardContent>
      </Card>
    </div>
  );
}