"use client";
import "./style.css";
import React from "react";
import { GiPathDistance } from "react-icons/gi";
import TextGenerateEffect from "../ui/TextGenerateEffect";
import { expCards, expCardsTypes } from "@/lib/data";
import GlowCard from "./GlowCard";
import TimelineItem from "./Timeline";
import { motion } from "framer-motion";

const Journey = () => {
  return (
    <section className="text-white w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center pr-8 md:pr-12 lg:pr-40 py-10 gap-4 ">
        <h2 className="flex items-center justify-center gap-3 uppercase tracking-widest text-xs bg-purple-500 py-3 px-6 rounded-full ">
          <GiPathDistance className="text-xl" />
          Professional Journey
        </h2>
        <TextGenerateEffect
          words="Professional Work Experience"
          className="text-center text-[32px] md:text-5xl lg:text-6xl font-semibold leading-tight"
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
              <div className="xl:w-4/6 ">
                <div className="flex items-start">
                  <TimelineItem />
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="timeline-logo"
                    >
                      <img src={card.logoPath} alt="logo" />
                    </motion.div>
                    {/* <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 50 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
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
                    </motion.div> */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 50 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        // type: "spring",
                        // stiffness: 100,
                        // damping: 20,
                        // delay: 0.3,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="bg-black rounded-2xl p-6 shadow-md transition-all max-w-[500px]"
                    >
                      <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="font-semibold text-3xl text-white"
                      >
                        {card.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                        className="my-2 text-white/70"
                      >
                        🗓️&nbsp;{card.date}
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="text-[#839CB5] italic"
                      >
                        Responsibilities
                      </motion.p>

                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.1,
                              delayChildren: 0.9,
                            },
                          },
                        }}
                        className="list-disc ms-5 mt-2 flex flex-col gap-2 text-white/70"
                      >
                        {card.responsibilities.map((responsibility, index) => (
                          <motion.li
                            key={index}
                            variants={{
                              hidden: { opacity: 0, y: 10 },
                              visible: { opacity: 1, y: 0 },
                            }}
                            className="text-sm font-extralight"
                          >
                            {responsibility}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
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
