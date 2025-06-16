"use client";

import { motion, useSpring } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const springConfig = { damping: 20, stiffness: 150, restDelta: 0.001 };

// Customize this to control how far the ball appears from the cursor
const OFFSET_X = 20; // move left by 20px
const OFFSET_Y = 20; // move above by 20px

export function BallPointer() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        position: "fixed",
        width: 12,
        height: 12,
        backgroundColor: "#ff0088",
        borderRadius: "50%",
        zIndex: 9999,
        pointerEvents: "none",
        top: 0,
        left: 0,
      }}
    />
  );
}

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const el = ref.current!;
      const ballWidth = el.offsetWidth;
      const ballHeight = el.offsetHeight;

      // Position above and to the left of cursor with offset
      x.set(clientX - ballWidth / 2 - OFFSET_X);
      y.set(clientY - ballHeight / 2 - OFFSET_Y);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}
