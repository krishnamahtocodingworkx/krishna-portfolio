"use client";
import "./style.css";
import React from "react";
import { GiPathDistance } from "react-icons/gi";
import TextGenerateEffect from "../ui/TextGenerateEffect";
import { expCards, expCardsTypes } from "@/lib/data";
import GlowCard from "./GlowCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section className="text-white">
      {/* header */}
      <div className="flex flex-col justify-center items-center p-5">
        <h2 className="flex justify-center items-center gap-4 uppercase tracking-widest text-xs text-center text-white max-w-80 bg-purple-500 py-4 px-7 rounded-full">
          <GiPathDistance className="text-2xl" />
          Professional Journey
        </h2>
        <TextGenerateEffect
          words="Professional Work Experience"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          indexesToHighlight={[2]}
        />
      </div>

      {/* cards section */}
      <div className="relative mt-32 ">
        <div className="relative z-50 xl:space-y-32 space-y-10">
          {expCards.map((card: expCardsTypes, i) => (
            <div className="exp-card-wrapper  " key={i}>
              <div className=" xl:w-2/6 ">
                <GlowCard card={card} key={i} index={i}>
                  <div>
                    <img src={card.imgPath} alt={card.title} />
                  </div>
                </GlowCard>
              </div>

              {/* <div className="xl:w-4/6">
                <div className="flex items-start">
                  <div className="timeline-wrapper">
                    <div className="timeline" />
                    <div className="gradient-line w-1 h-full" />



                  </div>

                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20 ">
                    <div className="timeline-logo">
                      <img src={item.logoPath} alt={item.title} />
                    </div>

                    <div>
                      <h1 className="font-semibold text-3xl">{item.title}</h1>
                      <p className="my-5 text-white-50">🗓️{item.date}</p>
                      <p className="text-[#839cb5] italic">Responsibilities</p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                        {item.responsibilities.map((responsibility, index) => (
                          <li key={index} className="text-lg">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="xl:w-4/6 ">
                <div className="flex items-start">
                  <div className="timeline-wrapper">
                    <div className="timeline" />
                    <div className="gradient-line w-1 h-full" />
                  </div>
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <div className="timeline-logo">
                      <img src={card.logoPath} alt="logo" />
                    </div>
                    <div>
                      <h1 className="font-semibold text-3xl">{card.title}</h1>
                      <p className="my-2 text-white-50">🗓️&nbsp;{card.date}</p>
                      <p className="text-[#839CB5] italic">Responsibilities</p>
                      <ul className="list-disc ms-5 mt-2 flex flex-col gap-2 text-white-50">
                        {card.responsibilities.map((responsibility, index) => (
                          <li key={index} className="text-sm font-extralight">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
