import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, scaleInVariants } from "@/components/presentation/AnimatedElements";
import { ArrowRight } from "lucide-react";

const oodaSteps = [
  { id: "observe", label: "Observe" },
  { id: "orient", label: "Orient" },
  { id: "decide", label: "Decide" },
  { id: "act", label: "Act" },
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
          매일 10분, OODA 루프
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

        {/* OODA Loop Diagram */}
        <motion.div 
          variants={fadeUpVariants}
          custom={0.4}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12"
        >
          {oodaSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={scaleInVariants}
              custom={index * 0.1 + 0.5}
              initial="hidden"
              animate="visible"
              className="flex items-center"
            >
              <span className="px-4 py-2 md:px-6 md:py-3 rounded-full border border-muted-foreground/30 bg-muted/20 text-foreground text-sm md:text-base font-medium">
                {step.label}
              </span>
              {index < oodaSteps.length - 1 ? (
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 mx-2 text-primary" />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center ml-2"
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary rotate-[135deg]" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

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
