import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { First, Second, Third, Fourth } from "../../assets/illustration/index.jsx";
import EachStep from "./EachStep.jsx";

const Steps = () => {
  const controls = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (controls.current) {
        const elementTop = controls.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="works"
      className="px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8 lg:px-10 xl:px-[10rem] mt-20 flex flex-col"
      ref={controls}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="items-end text-[#2B7C85]">
        <p className="text-3xl font-bold w-full text-center lg:text-right">How It Works</p>
        <p className="mt-5 font-semibold text-center lg:text-right md:text-right w-full">
          Send money across borders in 4 easy steps
        </p>
      </div>
      <div className="grid mt-8 md:mt-10 lg:mt-12 place-items-center lg:gap-x-4 gap-y-5 gap-x-3 md:gap-y-10 lg:gap-y-64 xss:gap-y-10 xss:grid-cols-2 lg:grid-cols-4">
        <EachStep
          number="Step 1"
          info="Enter sender's details"
          img={First}
          class="text-center md:mb-10 text-[0.4rem] xss:text-[0.55rem] xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.7rem]"
          class2="w-[3rem] xss:w-[4.5rem] xs:w-[4rem] sm:w-[7rem] md:w-[6rem] object-contain"
        />
        <EachStep
          number="Step 2"
          info="Fill in receiver's details"
          img={Second}
          class="text-center md:mb-10 text-[0.4rem] xss:text-[0.55rem] xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.7rem]"
          class2="w-[3rem] xss:w-[4.5rem] xs:w-[4rem] sm:w-[7rem] md:w-[7rem] object-contain"
        />
        <EachStep
          number="Step 3"
          info="Confirm all details are correct"
          img={Third}
          class="text-center md:mb-8 text-[0.4rem] xss:text-[0.5rem] xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.7rem]"
          class2="w-[3rem] xss:w-[4.2rem] xs:w-[4rem] sm:w-[7rem] md:w-[6rem] object-contain"
        />
        <EachStep
          number="Step 4"
          info="Make payment"
          img={Fourth}
          class="text-center md:mb-10 text-[0.4rem] xss:text-[0.55rem] xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.7rem]"
          class2="w-[3rem] xss:w-[4.5rem] xs:w-[4.5rem] sm:w-[7rem] md:w-[7rem] object-contain"
        />
      </div>
    </motion.div>
  );
};

export default Steps;
