"use client";
import { expCardsTypes } from "@/lib/data";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const GlowCard = ({
  card,
  children,
  index,
}: {
  card: expCardsTypes;
  children: React.ReactNode;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(y, x) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + "60");
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: -200 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 , ease: "easeInOut" }}
      className="card card-border timeline-card rounded-xl p-10 text-white"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src={"/images/star.png"} alt="star" key={i} className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </motion.div>
  );
};

export default GlowCard;
