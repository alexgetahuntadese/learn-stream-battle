import { useMemo } from 'react';

const generateStars = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
  }));

const generateShootingStars = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 40,
    duration: Math.random() * 2 + 2,
    totalDelay: Math.random() * 12 + i * 5,
  }));

const StarField = ({ starCount = 50, shootingCount = 3 }: { starCount?: number; shootingCount?: number }) => {
  const stars = useMemo(() => generateStars(starCount), [starCount]);
  const shootingStars = useMemo(() => generateShootingStars(shootingCount), [shootingCount]);

  return (
    <>
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
    </>
  );
};

export default StarField;
