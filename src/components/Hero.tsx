import React from "react";
import Spotlight from "./Spotlight";
import { GridBackground } from "./GridBackground";
import { TextGenerateEffect } from "./TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <GridBackground />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Crafting Scalable Web Solutions with the MERN Stack
          </h2>
          <TextGenerateEffect
            words="Building Modern, Intuitive & High-Performance Applications"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            filter={true}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            Hi! I&apos;m Krishna — a passionate Software Developer specializing
            in the MERN stack, currently based in India.
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// <div className="pb-20 pt-36 ">
//   <div>
//     <Spotlight
//       className="-top-60 -left-10 md:-left-2 md:-top-40 h-[300vh] md:h-[300vh]"
//       fill="white"
//     />
//     <Spotlight
//       className="md:left-100 left-50 md:top-2 -top-10  h-[50vh] w-[50vw]"
//       fill="#7a73d1"
//     />

//     {/* <div className="rotate-90 ">
//         <Spotlight
//           className="h-[80vh] w-[50vw] -top-40 left-[20vw]"
//           fill="#cbacf9"
//         />
//       </div> */}

//     {/* <Spotlight
//         className="h-[80vh] w-[50vw] top-10 left-full"
//         fill="#cbacf9"
//       />
//       <Spotlight
//         className="left-80 top-28 h-[80vh] w-[50vw]"
//         fill="#7a73d1"
//       /> */}
//   </div>
//   <GridBackground />
//   <div className="flex justify-center relative my-20 z-10">
//     <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//       <h2 className=" uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
//         Dynamic Web Magic with Next.js
//       </h2>
//     </div>
//   </div>
// </div>
