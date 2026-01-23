import { motion } from "framer-motion";
import { fadeUpVariants, glowVariants } from "@/components/presentation/AnimatedElements";
import { useEffect, useState } from "react";

// Enhanced dust/star particle with more visibility
const Particle = ({ delay }: { delay: number }) => {
  // Brighter, more vivid colors
  const colors = [
    "rgba(147, 197, 253, 0.85)", // bright light blue
    "rgba(219, 234, 254, 0.75)", // light blue
    "rgba(255, 255, 255, 0.9)", // bright white
    "rgba(96, 165, 250, 0.8)", // vivid blue
    "rgba(191, 219, 254, 0.7)", // soft blue
    "rgba(59, 130, 246, 0.7)", // primary blue
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const left = Math.random() * 100;
  const rotation = Math.random() * 360;
  // Larger particles (2-5px) for better visibility
  const size = Math.random() * 3 + 2;

  return (
    <motion.div
      initial={{ y: -10, x: 0, opacity: 0, rotate: 0, scale: 0 }}
      animate={{ 
        y: "100vh", 
        x: Math.random() * 120 - 60,
        opacity: [0, 1, 0.85, 0], 
        rotate: rotation,
        scale: [0, 1.2, 1, 0.6]
      }}
      transition={{ 
        duration: (10 + Math.random() * 6), // Longer duration (10-16s)
        delay: delay,
        ease: "easeOut",
        opacity: { duration: (10 + Math.random() * 6), times: [0, 0.08, 0.75, 1] },
        scale: { duration: (10 + Math.random() * 6), times: [0, 0.08, 0.8, 1] }
      }}
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        boxShadow: `0 0 ${size * 4}px ${color}, 0 0 ${size * 8}px ${color}`, // Enhanced glow
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
          {Array.from({ length: 50 }).map((_, i) => (
            <Particle key={i} delay={i * 0.12} />
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
          <motion.h1 
            className="text-title md:text-headline font-bold leading-tight"
            animate={{
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            DCM은 돈 버는 사업이 될 겁니다.
          </motion.h1>
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
