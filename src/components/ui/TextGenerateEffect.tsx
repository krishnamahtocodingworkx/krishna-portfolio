"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

const TextGenerateEffect = ({
  words,
  className,
  filter = false,
  duration = 0.5,
  indexesToHighlight,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  indexesToHighlight: number[];
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.3),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={` opacity-0 ${
                indexesToHighlight.includes(idx)
                  ? "text-pink"
                  : "dark:text-white text-black"
              }`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white  leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
export default TextGenerateEffect;
