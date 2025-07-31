import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CountdownTimer } from "@/components/countdown-timer";
import { PurchaseNotification } from "@/components/purchase-notification";
import { FloatingPurchaseBalloon } from "@/components/floating-purchase-balloon";
import { 
  Shield, 
  Star, 
  Rocket, 
  Lock, 
  Flame, 
  TrendingUp, 
  Dumbbell, 
  Apple, 
  Smartphone,
  Gauge,
  CircleHelp,
  Instagram,
  Youtube,
  Facebook
} from "lucide-react";

export default function Home() {
  const handlePurchaseClick = () => {
    window.open('https://pay.kirvano.com/863bd6c6-bdcb-4e47-b9c4-f53cf11b8137', '_blank');
  };

  return (
    <div className="bg-slate-900 text-white font-sans overflow-x-hidden">
      <PurchaseNotification />
      <FloatingPurchaseBalloon />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-40 border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text flex items-center">
            <Rocket className="mr-2" />
            RunEvolution
          </div>
          <div className="text-sm text-gray-300 flex items-center">
            <Lock className="mr-1 w-4 h-4" />
            Compra 100% Segura
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Urgent Banner */}
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse-glow">
            <Flame className="inline w-4 h-4 mr-2" />
            OFERTA RELÂMPAGO - ÚLTIMAS 24 HORAS!
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-slide-up">
            <span className="gradient-text">Guia de Evolução</span><br />
            <span className="text-white">na Corrida</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Descubra os segredos para <span className="text-green-400 font-bold">correr distâncias mais longas</span> sem cansar, com estratégias profissionais que transformarão sua performance
          </p>

          {/* Hero Video */}
          <div className="mb-10 animate-fade-in">
            <div className="mx-auto max-w-4xl">
              <iframe 
                src="https://www.youtube.com/embed/wli4mpFFOZo" 
                title="Guia de Evolução na Corrida"
                className="w-full h-64 md:h-96 rounded-2xl shadow-2xl glow-effect"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Price Section */}
          <Card className="bg-slate-800/50 backdrop-blur-md max-w-lg mx-auto mb-8 neon-border animate-slide-up border-2">
            <CardContent className="p-8">
              <div className="text-gray-400 line-through text-xl mb-2">De R$ 97,00</div>
              <div className="text-6xl font-black gradient-text mb-4">R$ 17,90</div>
              <div className="text-green-400 font-bold text-lg mb-4">81% DE DESCONTO!</div>
              
              {/* Timer */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-4 mb-6">
                <div className="text-sm font-bold mb-2">Oferta expira em:</div>
                <CountdownTimer />
              </div>

              <Button 
                onClick={handlePurchaseClick}
                className="w-full bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-black text-xl py-6 rounded-xl hover:scale-105 transition-all duration-300 glow-effect animate-bounce-subtle"
              >
                <Rocket className="mr-2" />
                QUERO EVOLUIR NA CORRIDA AGORA!
              </Button>
              
              <div className="text-sm text-gray-400 mt-3 flex items-center justify-center">
                <Shield className="mr-1 w-4 h-4" />
                Garantia de 7 dias ou seu dinheiro de volta
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof Numbers */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-5xl font-black gradient-text mb-2">2.847</div>
              <div className="text-gray-300">Corredores Transformados</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-5xl font-black gradient-text mb-2">95%</div>
              <div className="text-gray-300">Melhoraram o Tempo</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-5xl font-black gradient-text mb-2">4.9★</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 gradient-text">
            O Que Você Vai Receber
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 8 Training Modules */}
            <Card className="bg-slate-800/50 backdrop-blur-md neon-border hover:scale-105 transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="text-green-400 text-4xl mb-4">
                  <Flame className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">8 Módulos de Treinos</h3>
                <p className="text-gray-300">Base aeróbica, HIIT, Fartlek, força funcional, nutrição, controle de ritmo, periodização e recuperação</p>
              </CardContent>
            </Card>

            {/* Training Spreadsheet */}
            <Card className="bg-slate-800/50 backdrop-blur-md neon-border hover:scale-105 transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="text-green-400 text-4xl mb-4">
                  <Gauge className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Planilha de Treinos</h3>
                <p className="text-gray-300">16 semanas de treinos progressivos com calculadora de pace e controle de evolução</p>
              </CardContent>
            </Card>

            {/* Email Support */}
            <Card className="bg-slate-800/50 backdrop-blur-md neon-border hover:scale-105 transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="text-green-400 text-4xl mb-4">
                  <CircleHelp className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Suporte por Email</h3>
                <p className="text-gray-300">90 dias de suporte direto com resposta garantida em até 24 horas</p>
              </CardContent>
            </Card>

            {/* Bonus Training */}
            <Card className="bg-slate-800/50 backdrop-blur-md neon-border hover:scale-105 transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="text-green-400 text-4xl mb-4">
                  <Rocket className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Bônus de Treinos</h3>
                <p className="text-gray-300">20 protocolos especiais utilizados por atletas de elite para quebrar recordes pessoais</p>
              </CardContent>
            </Card>

            {/* Fartlek Training */}
            <Card className="bg-slate-800/50 backdrop-blur-md neon-border hover:scale-105 transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="text-green-400 text-4xl mb-4">
                  <TrendingUp className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Treinos Fartlek</h3>
                <p className="text-gray-300">12 variações de fartlek: sueco, piramidal, progressivo, ladeira e por distância</p>
              </CardContent>
            </Card>

            {/* HIIT Training */}
            <Card className="bg-slate-800/50 backdrop-blur-md neon-border hover:scale-105 transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="text-green-400 text-4xl mb-4">
                  <Flame className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Treinos HIIT</h3>
                <p className="text-gray-300">15 protocolos de alta intensidade: Tabata, 4x4, 30-30, 8x400m e micro-intervalos</p>
              </CardContent>
            </Card>

            {/* Access Instructions */}
            <Card className="bg-slate-800/50 backdrop-blur-md neon-border hover:scale-105 transition-all duration-300 border-2 md:col-span-2 lg:col-span-3">
              <CardContent className="p-8 text-center">
                <div className="text-green-400 text-4xl mb-4 flex justify-center">
                  <Smartphone className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Como Acessar o Conteúdo</h3>
                <p className="text-gray-300">Você irá receber um PDF com link do Google Drive. Basta copiar e colar esse link no seu navegador e está lá!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 gradient-text">
            Depoimentos Reais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/20">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                  alt="Testimonial from Maria" 
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" 
                />
                <div className="text-center">
                  <div className="text-yellow-400 mb-3 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"Consegui baixar meu pace de 5:20 para 4:45 nos 10K em apenas 6 semanas! Os treinos intervalados revolucionaram minha corrida."</p>
                  <div className="font-bold text-cyan-400">Maria Silva</div>
                  <div className="text-sm text-gray-400">São Paulo, SP</div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-blue-900/20">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                  alt="Testimonial from João" 
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" 
                />
                <div className="text-center">
                  <div className="text-yellow-400 mb-3 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"Saí dos 55 minutos nos 10K para fazer em 45 minutos! O pace baixou para 4:30. O método HIIT é incrível mesmo!"</p>
                  <div className="font-bold text-cyan-400">João Santos</div>
                  <div className="text-sm text-gray-400">Rio de Janeiro, RJ</div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-green-900/20">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                  alt="Testimonial from Ana" 
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" 
                />
                <div className="text-center">
                  <div className="text-yellow-400 mb-3 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"Finalmente quebrei meu recorde pessoal! As dicas de alimentação fizeram toda diferença."</p>
                  <div className="font-bold text-cyan-400">Ana Costa</div>
                  <div className="text-sm text-gray-400">Belo Horizonte, MG</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-green-400 mb-6 flex justify-center">
              <Shield className="w-16 h-16" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 gradient-text">
              Garantia de 7 Dias
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Se você não ficar 100% satisfeito com o conteúdo, devolvemos seu dinheiro integral. Sem perguntas, sem burocracia. Nossa confiança no método é total!
            </p>
            <Card className="bg-slate-800/50 backdrop-blur-md max-w-2xl mx-auto neon-border border-2">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-green-400 mb-4">Risco Zero Para Você!</div>
                <p className="text-gray-300">Teste o guia por 7 dias completos. Se não ver resultados, cancelamos e devolvemos 100% do valor investido.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 gradient-text">
            Sua Evolução Começa Agora!
          </h2>
          
          <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 max-w-2xl mx-auto mb-8 neon-border border-2">
            <CardContent className="p-8">
              <div className="text-gray-400 line-through text-2xl mb-2">R$ 97,00</div>
              <div className="text-7xl font-black gradient-text mb-4">R$ 17,90</div>
              <div className="text-green-400 font-bold text-xl mb-6">DESCONTO DE 81% - SÓ HOJE!</div>
              
              <Button 
                onClick={handlePurchaseClick}
                className="w-full bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 font-black text-2xl py-6 rounded-xl hover:scale-105 transition-all duration-300 glow-effect mb-4"
              >
                <Rocket className="mr-3" />
                GARANTIR MINHA VAGA AGORA!
              </Button>
              
              <div className="text-sm text-gray-400 flex items-center justify-center gap-4">
                <span className="flex items-center">
                  <Lock className="mr-1 w-4 h-4" />
                  Pagamento 100% seguro
                </span>
                <span className="flex items-center">
                  <Shield className="mr-1 w-4 h-4" />
                  Garantia de 7 dias
                </span>
              </div>
            </CardContent>
          </Card>

          <div className="text-yellow-400 text-lg font-bold mb-4 animate-pulse">
            ⚠️ ATENÇÃO: Restam apenas 47 vagas com desconto!
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 gradient-text">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-md neon-border border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                  <CircleHelp className="mr-2 w-6 h-6" />
                  Por quanto tempo tenho acesso ao conteúdo?
                </h3>
                <p className="text-gray-300">Você tem acesso vitalício ao guia e todas as futuras atualizações, sem custo adicional.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-md neon-border border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                  <CircleHelp className="mr-2 w-6 h-6" />
                  Funciona para iniciantes?
                </h3>
                <p className="text-gray-300">Sim! O guia é progressivo e adequado para todos os níveis, desde iniciantes até corredores avançados.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-md neon-border border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                  <CircleHelp className="mr-2 w-6 h-6" />
                  Como funciona a garantia?
                </h3>
                <p className="text-gray-300">Se não ficar satisfeito em 7 dias, basta enviar um e-mail e devolvemos 100% do valor investido.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-md neon-border border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                  <CircleHelp className="mr-2 w-6 h-6" />
                  Preciso de equipamentos especiais?
                </h3>
                <p className="text-gray-300">Não! Todos os treinos podem ser feitos com o mínimo de equipamento. O foco está na técnica e metodologia.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-bold gradient-text mb-4 flex items-center justify-center">
            <Rocket className="mr-2" />
            RunEvolution
          </div>
          <p className="text-gray-400 mb-6">Transformando corredores em atletas de alta performance</p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2024 RunEvolution. Todos os direitos reservados. • 
            <a href="#" className="hover:text-cyan-400 ml-1">Política de Privacidade</a> • 
            <a href="#" className="hover:text-cyan-400 ml-1">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
