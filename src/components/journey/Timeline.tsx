"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const TimelineItem = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      scaleY: 0,
      opacity: 0,
      transformOrigin: "top",
    },
    visible: {
      scaleY: 1.1,
      opacity: 1,
      transition: {
        duration: 3.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="timeline-wrapper origin-top"
    >
      <div className="timeline  z-10" />
      <div className="gradient-line w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 shadow-lg rounded-full z-0" />
    </motion.div>
  );
};

export default TimelineItem;
