
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart3, BookOpen, Sparkles, GraduationCap, ArrowLeft, MessageSquare, Brain, Trophy, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getRecentAttempts } from "@/lib/performanceUtils";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";

const generateStars = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
  }));

const generateShootingStars = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 60 + 20,
    y: Math.random() * 40 + 5,
    duration: Math.random() * 2 + 1.5,
    delay: Math.random() * 8 + 4 + i * 6,
    totalDelay: Math.random() * 15 + 8 + i * 8,
  }));

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const stars = useMemo(() => generateStars(60), []);
  const shootingStars = useMemo(() => generateShootingStars(4), []);

  const features = [
    {
      icon: BookOpen,
      title: t('index.exploreSubjects'),
      description: t('index.browseDescription'),
      buttonText: t('index.browseQuizzes'),
      route: '/grades',
      accent: "from-violet-500 to-fuchsia-500",
      glow: "violet-500",
      ring: "ring-violet-400/30",
    },
    {
      icon: BarChart3,
      title: t('index.myPerformance'),
      description: t('index.trackProgress'),
      buttonText: t('index.viewDashboard'),
      route: '/performance',
      accent: "from-emerald-500 to-teal-500",
      glow: "emerald-500",
      ring: "ring-emerald-400/30",
    },
    {
      icon: Sparkles,
      title: "🚀 Future Me Mode",
      description: "AI-powered career simulator — experience a day in any career!",
      buttonText: "Try Career Simulator",
      route: '/career-simulator',
      accent: "from-amber-400 to-orange-500",
      glow: "amber-500",
      ring: "ring-amber-400/30",
      colSpan: true,
    },
  ];

  const stats = [
    { value: "2050+", label: t('common.questions'), icon: MessageSquare, color: "from-emerald-400 to-teal-400" },
    { value: "12", label: t('common.subjects'), icon: BookOpen, color: "from-blue-400 to-cyan-400" },
    { value: "12", label: t('common.gradeLevels'), icon: GraduationCap, color: "from-violet-400 to-purple-400" },
    { value: "AI", label: t('common.powered'), icon: Brain, color: "from-pink-400 to-rose-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-4 md:p-8 overflow-hidden relative">
      <LanguageSwitcher />

      {/* Floating stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `float-star ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="absolute pointer-events-none"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), rgba(168,130,255,0.6), transparent)',
            borderRadius: '9999px',
            animation: `shooting-star ${star.duration}s ease-in ${star.totalDelay}s infinite`,
            boxShadow: '0 0 6px 1px rgba(168,130,255,0.4)',
          }}
        />
      ))}

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        {/* Hero */}
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-6">
            <GraduationCap className="h-4 w-4" />
            Ethiopian Curriculum
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent">
            {t('index.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-lg mx-auto">
            {t('index.subtitle')}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                onClick={() => navigate(feature.route)}
                className={`group relative cursor-pointer opacity-0 animate-fade-in ${feature.colSpan ? 'md:col-span-2' : ''}`}
                style={{ animationDelay: `${0.3 + 0.15 * index}s`, animationFillMode: 'forwards' }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.accent} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                <div className={`relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.15] group-hover:scale-[1.02] shadow-2xl`}>
                  <Sparkles className="absolute top-4 right-4 h-5 w-5 text-white/10 group-hover:text-white/30 transition-colors duration-500" />
                  <div className="mb-5">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.accent} shadow-lg group-hover:shadow-xl transition-shadow duration-500 ring-4 ${feature.ring} group-hover:ring-8`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{feature.title}</h2>
                  <p className="text-white/40 text-sm mb-6">{feature.description}</p>
                  <div className="flex items-center text-white/30 group-hover:text-white/60 text-sm transition-colors duration-300">
                    <span>{feature.buttonText}</span>
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div
          className="w-full max-w-2xl opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="text-center">
                    <Icon className="h-5 w-5 mx-auto mb-2 text-white/30" />
                    <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
