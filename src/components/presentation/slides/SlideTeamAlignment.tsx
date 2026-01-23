import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, scaleInVariants } from "@/components/presentation/AnimatedElements";

const steps = [
  { text: "매일 아침 공유", result: "상황 파악" },
  { text: "빠르게 판단", result: "바로 결정" },
  { text: "서로 피드백", result: "다음날 반영" },
];

export const SlideTeamAlignment = () => {
  return (
    <div className="slide slide-centered">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl text-center"
      >
        <motion.h1 
          variants={fadeUpVariants}
          className="text-headline mb-6"
        >
          매일 10분, 빠르게 맞췄습니다
        </motion.h1>

        <motion.p 
          variants={fadeUpVariants}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="text-body text-muted-foreground mb-12"
        >
          처음부터 계획한 건 아닙니다. 상황에 맞게 조정했습니다.
        </motion.p>

        {/* 3-step flow */}
        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.text}
              variants={scaleInVariants}
              custom={index * 0.15 + 0.4}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-4"
            >
              <span className="text-subtitle text-foreground">{step.text}</span>
              <span className="text-primary text-2xl">→</span>
              <span className="text-subtitle text-primary font-semibold">{step.result}</span>
            </motion.div>
          ))}
        </div>

        <motion.p 
          variants={fadeUpVariants}
          custom={0.8}
          initial="hidden"
          animate="visible"
          className="text-subtitle"
        >
          <span className="text-accent-glow font-semibold">
            서로 뭐 하는지 알아야, 중복 없이 빠르게.
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};
