import { motion } from "framer-motion";
import { fadeUpVariants, glowVariants } from "@/components/presentation/AnimatedElements";
import { useEffect, useState } from "react";

// Subtle dust/star particle
const Particle = ({ delay }: { delay: number }) => {
  // Softer, lighter colors - light blues and whites
  const colors = [
    "rgba(147, 197, 253, 0.6)", // light blue
    "rgba(219, 234, 254, 0.5)", // very light blue
    "rgba(255, 255, 255, 0.7)", // white
    "rgba(191, 219, 254, 0.5)", // soft blue
    "rgba(224, 231, 255, 0.4)", // pale indigo
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const left = Math.random() * 100;
  const rotation = Math.random() * 360;
  // Smaller particles (1-3px) like dust or stars
  const size = Math.random() * 2 + 1;

  return (
    <motion.div
      initial={{ y: -10, x: 0, opacity: 0, rotate: 0, scale: 0 }}
      animate={{ 
        y: "100vh", 
        x: Math.random() * 100 - 50,
        opacity: [0, 0.8, 0.6, 0], 
        rotate: rotation,
        scale: [0, 1, 1, 0.5]
      }}
      transition={{ 
        duration: (6 + Math.random() * 4), // 50% slower (was 3-5s, now 6-10s)
        delay: delay,
        ease: "easeOut",
        opacity: { duration: (6 + Math.random() * 4), times: [0, 0.1, 0.7, 1] },
        scale: { duration: (6 + Math.random() * 4), times: [0, 0.1, 0.8, 1] }
      }}
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        boxShadow: `0 0 ${size * 2}px ${color}`, // Soft glow effect
      }}
    />
  );
};

export const SlideClosing = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // Start 1 second after slide appears
    const timer = setTimeout(() => setShowParticles(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-centered relative overflow-hidden">
      {/* Subtle dust/star particles */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 35 }).map((_, i) => (
            <Particle key={i} delay={i * 0.08} />
          ))}
        </div>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center relative z-10"
      >
        <motion.div
          variants={glowVariants}
          className="mb-12"
        >
          <h1 className="text-title md:text-headline font-bold leading-tight">
            DCM은 돈 버는 사업이 될 겁니다.
          </h1>
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          custom={0.5}
          initial="hidden"
          animate="visible"
          className="text-subtitle text-muted-foreground mb-8"
        >
          12월에 증명했고, 상반기에도 증명하겠습니다.
        </motion.p>

        <motion.p
          variants={fadeUpVariants}
          custom={1.2}
          initial="hidden"
          animate="visible"
          className="text-title text-accent-glow font-semibold"
        >
          감사합니다. 지켜봐 주세요.
        </motion.p>
      </motion.div>
    </div>
  );
};
