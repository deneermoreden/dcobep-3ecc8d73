import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, scaleInVariants } from "@/components/presentation/AnimatedElements";
import { ArrowRight } from "lucide-react";
import dentexBooth from "@/assets/dentex-booth.jpg";

const flowNodes = ["소싱", "콘텐츠", "도서", "강의", "광고", "커머스"];

export const SlideConfidence = () => {
  return (
    <div className="slide slide-centered relative overflow-hidden">
      {/* Background image - balanced brightness */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url(${dentexBooth})`,
          willChange: 'transform',
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/30" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl w-full relative z-10 text-center"
      >
        <motion.h1 
          variants={fadeUpVariants}
          className="text-headline mb-8"
        >
          "피부미용하면 모어덴"
        </motion.h1>

        {/* Team composition */}
        <motion.div
          variants={fadeUpVariants}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <p className="text-body text-foreground/90 mb-2">
            치과의사 + 시니어 3명 + 영업/운영 + PD/디자이너
          </p>
          <p className="text-subtitle text-primary font-semibold">
            역량 갖춘 11명. 빠른 의사결정.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <motion.div 
          variants={fadeUpVariants}
          custom={0.4}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8"
        >
          {flowNodes.map((node, index) => (
            <motion.div
              key={node}
              variants={scaleInVariants}
              custom={index * 0.1 + 0.5}
              initial="hidden"
              animate="visible"
              className="flex items-center"
            >
              <span className="flow-node">{node}</span>
              {index < flowNodes.length - 1 && (
                <ArrowRight className="flow-arrow w-5 h-5 mx-1 md:mx-2" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          custom={0.9}
          initial="hidden"
          animate="visible"
          className="text-subtitle text-primary font-semibold"
        >
          유기적으로 연결.
        </motion.p>
      </motion.div>
    </div>
  );
};
