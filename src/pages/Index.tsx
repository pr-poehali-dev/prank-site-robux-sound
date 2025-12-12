import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    const audio = new Audio('https://www.myinstants.com/media/sounds/roblox-death-sound.mp3');
    audio.volume = 0.5;
    audio.play();
    setClicks(clicks + 1);
  };

  const handleWithdraw = () => {
    const audio = new Audio('https://www.myinstants.com/media/sounds/evil-laugh.mp3');
    audio.volume = 0.6;
    audio.play();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-purple-900/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Logo/Title */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="text-7xl md:text-9xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">
            FREE ROBUX
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-semibold tracking-wider">
            🎮 Получи робуксы прямо сейчас! 🎮
          </p>
        </div>

        {/* Counter */}
        {clicks > 0 && (
          <div className="mb-8 animate-in fade-in zoom-in duration-300">
            <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/50 rounded-2xl px-8 py-4">
              <p className="text-3xl font-bold text-center">
                <Icon name="Coins" className="inline-block mr-2" size={32} />
                Кликов: <span className="text-accent">{clicks}</span>
              </p>
            </div>
          </div>
        )}

        {/* Main button */}
        <div className="animate-in fade-in zoom-in duration-700" style={{ animationDelay: '200ms' }}>
          <Button
            onClick={handleClick}
            size="lg"
            className="text-2xl md:text-4xl font-black px-16 py-12 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-right transition-all duration-500 shadow-2xl hover:shadow-primary/50 hover:scale-110 active:scale-95 border-4 border-accent/50"
            style={{
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          >
            <Icon name="Gift" className="mr-4" size={40} />
            ПОЛУЧИТЬ РОБУКСЫ
            <Icon name="Sparkles" className="ml-4" size={40} />
          </Button>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '400ms' }}>
          {[
            { icon: 'Zap', title: 'Мгновенно', desc: 'Получай сразу!' },
            { icon: 'Shield', title: 'Безопасно', desc: '100% надёжно' },
            { icon: 'Infinity', title: 'Безлимит', desc: 'Сколько хочешь!' }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-card/30 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-6 text-center hover:border-accent/50 hover:bg-card/50 transition-all duration-300 hover:scale-105"
            >
              <Icon name={feature.icon} className="mx-auto mb-4 text-accent" size={48} />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;