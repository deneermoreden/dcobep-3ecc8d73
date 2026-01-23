import { motion } from "framer-motion";
import { CountingNumber, fadeUpVariants, glowVariants } from "../AnimatedElements";

export const SlideHook = () => {
  return (
    <div className="slide slide-centered">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(222 47% 12%) 0%, hsl(222 47% 4%) 70%)",
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl text-center">
        {/* Very top: Quarterly average (smallest, gray) */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0}
          className="text-caption text-muted-foreground/70 text-sm"
        >
          DCO 25년 1~3분기 월평균 매출총이익: 1,400만원
        </motion.p>

        {/* Top: BEP target (small, gray) */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0.1}
          className="text-caption text-muted-foreground"
        >
          12월 BEP 목표: 5,800만원
        </motion.p>

        {/* Middle: Actual result (large, white) */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0.2}
          className="text-headline text-foreground"
        >
          12월 매출총이익:{" "}
          <span className="font-black">
            <CountingNumber value={6440} suffix="만원" />
          </span>
        </motion.h1>

        {/* Below: Achievement (blue accent) */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0.4}
          className="text-title text-primary font-bold"
        >
          달성.
        </motion.p>

        {/* Bottom: Question (huge, with glow) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={glowVariants}
          className="mt-8"
        >
          <h2 
            className="text-hero text-foreground glow-text-white animate-glow-pulse"
            style={{
              fontSize: "clamp(4rem, 15vw, 10rem)",
            }}
          >
            어떻게?
          </h2>
        </motion.div>
      </div>
    </div>
  );
};
