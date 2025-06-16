"use client";
import React from "react";
import TextGenerateEffect from "../ui/TextGenerateEffect";
import { desktopImage } from "@/lib/data";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <section className="flex justify-center mt-20 flex-col items-center text-white w-full">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-xs text-center text-white max-w-80">
          Have questions or ideas? Let&apos;s talk! 🚀
        </h2>
        <TextGenerateEffect
          words="Get in Touch – Let's Connect"
          className="text-center text-[40px] "
          filter={false}
          indexesToHighlight={[5]}
        />
      </div>
      <div className="w-full px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mt-10 ">
        <div
          className="border border-[#1C1C21]  w-full bg-[#0E0E08] p-7 md:p-20  
        flex flex-col  gap-5 rounded-xl"
        >
          <div className="flex flex-col gap-1">
            <label className="text-[#D9ECFF] font-semibold line-clamp-1">
              Your name
            </label>
            <input
              placeholder="What’s your good name?"
              className="w-full bg-[#2D2D38] p-3 rounded-md font-medium text-[#D9ECFF] outline-none text-lg"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#D9ECFF] font-semibold line-clamp-1">
              Your email
            </label>
            <input
              placeholder="What’s your email address?"
              className="w-full bg-[#2D2D38] p-3 rounded-md font-medium text-[#D9ECFF] outline-none text-lg"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#D9ECFF] font-semibold line-clamp-1">
              Your message
            </label>
            <textarea
              placeholder="How can I help you?"
              rows={4}
              className="w-full bg-[#2D2D38] p-3 rounded-md font-medium text-[#D9ECFF] outline-none text-lg resize-none"
            />
          </div>
        </div>
        <motion.img
          src={desktopImage}
          alt="desktopImage"
          className="w-full h-full object-cover border border-[#1C1C21] rounded-xl "
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />
      </div>
    </section>
  );
};

export default GetInTouch;
