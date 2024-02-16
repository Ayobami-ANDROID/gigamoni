import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Accordion from "./Accordion";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const Faqs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({ opacity: 1, y: 0 });
  }

  return (
    <div
      id="faqs"
      ref={ref}
      className=" mt-20 text-center  w-full px-2 xss:px-4 xs:px-6 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem]  py-[1rem] "
    >
      <motion.p
        className="text-[#2B7C85] text-sm  md:text-[20px] text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        Frequently Asked Questions
      </motion.p>

      <motion.p
        className="text-center text-[#175873] font-semibold text-xl md:text-[1.8rem] lg:text-[1.7rem]  xl:text-2xl 2xl:text-3xl md:mt-4  mt-10 "
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        Everything you need to know about sending money with Gigamoni
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        {" "}
        <Accordion />
      </motion.div>
    </div>
  );
};

export default Faqs;
