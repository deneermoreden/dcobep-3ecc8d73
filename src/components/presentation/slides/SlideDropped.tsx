import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, StrikethroughText } from "@/components/presentation/AnimatedElements";
import { X, ArrowRight } from "lucide-react";

const droppedItems = [
  { name: "구매왕 프로모션", reason: "치과는 매출 90%가 의료기기", type: "dropped" },
  { name: "루페/합금 영업", reason: "4분기 수요 예상했으나 안 팔림", type: "dropped" },
  { name: "쿠폰 프로모션", reason: "문자/카톡 직접 소구로 전환", type: "transformed" },
];

export const SlideDropped = () => {
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
          className="text-headline mb-12"
        >
          빠르게 관찰하고, 빠르게 조정
        </motion.h1>

        <div className="space-y-8 mb-12">
          {droppedItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeUpVariants}
              custom={index * 0.2 + 0.3}
              initial="hidden"
              animate="visible"
              className="flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-6"
            >
              {item.type === "dropped" ? (
                <>
                  <div className="flex items-center justify-center gap-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <StrikethroughText 
                      delay={0.8 + index * 0.2}
                      className="text-subtitle text-muted-foreground"
                    >
                      {item.name}
                    </StrikethroughText>
                  </div>
                  <span className="text-body text-foreground/80">
                    — {item.reason}
                  </span>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-subtitle text-foreground">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-body text-primary font-medium">
                    → {item.reason}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUpVariants}
          custom={1.2}
          initial="hidden"
          animate="visible"
          className="text-body text-muted-foreground"
        >
          아니다 싶으면 빠르게 조정했습니다
        </motion.p>
      </motion.div>
    </div>
  );
};
