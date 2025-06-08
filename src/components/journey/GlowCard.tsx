"use client";
import { expCardsTypes } from "@/lib/data";
import React, { useRef } from "react";

const GlowCard = ({
  card,
  children,
  index,
}: {
  card: expCardsTypes;
  children: React.ReactNode;
  index: number;
}) => {
  const cardRef = useRef<HTMLElement[]>([]);

  const handleMouseMove = (index: number) => (e: React.MouseEvent) => {
    const card: HTMLElement = cardRef.current[index];
    if (!card) return;

    // get mouse position relative to the card
    const rect: DOMRect = (card as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from center of the card
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + "60");
  };
  return (
    <div
      ref={(el) => (cardRef.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 text-white"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <img
              src={"/images/star.png"}
              alt="star"
              key={i}
              className="size-5"
            />
          );
        })}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
