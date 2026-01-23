import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CountingNumber, fadeUpVariants, glowVariants } from "@/components/presentation/AnimatedElements";

export const SlideFutureGoal = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Show December BEP after 0.5s
    const timer1 = setTimeout(() => setPhase(1), 500);
    // Phase 2: Transform to target after 6s (slowed down for presenter)
    const timer2 = setTimeout(() => setPhase(2), 6000);
    // Phase 3: Show label and conclusion after 8s
    const timer3 = setTimeout(() => setPhase(3), 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="slide slide-centered">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center"
      >
        {/* Phase 1: December BEP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: phase >= 1 && phase < 2 ? 1 : phase >= 2 ? 0 : 0,
            y: phase >= 1 ? 0 : 20,
            scale: phase >= 2 ? 0.8 : 1,
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <p className="text-subtitle text-muted-foreground mb-4">
              12월 BEP
            </p>
            <h1 
              className="text-foreground font-bold"
              style={{
                fontSize: "clamp(3rem, 12vw, 8rem)",
                lineHeight: 1,
              }}
            >
              5,800만원
            </h1>
          </div>
        </motion.div>

        {/* Phase 2 & 3: Target Goal */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ 
            opacity: phase >= 2 ? 1 : 0,
            scale: phase >= 2 ? 1 : 1.2,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: phase >= 3 ? 1 : 0,
              y: phase >= 3 ? 0 : -20,
            }}
            transition={{ duration: 0.5 }}
            className="text-subtitle text-muted-foreground mb-4"
          >
            26년 상반기 BEP
          </motion.p>

          <motion.div
            variants={glowVariants}
            className="mb-8"
          >
            <h1 
              className="text-foreground glow-text-white font-black"
              style={{
                fontSize: "clamp(4rem, 18vw, 12rem)",
                lineHeight: 1,
              }}
            >
              월{" "}
              {phase >= 2 ? (
                <CountingNumber 
                  value={1.2} 
                  suffix="억"
                  formatNumber={false}
                  className="text-primary"
                />
              ) : (
                <span className="text-primary">0억</span>
              )}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: phase >= 3 ? 1 : 0,
              y: phase >= 3 ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-title text-accent-glow font-bold"
          >
            두 배입니다. 충분히 할 수 있습니다.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};
