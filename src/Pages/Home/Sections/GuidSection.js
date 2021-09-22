import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import lunchImg from "../../../static/Images/launch.svg";
import Clouds from "../../../static/Images/MultiClouds.svg";
import GuidIcon from "../../../static/Images/GuidIcons.svg";
import GuidIcon2 from "../../../static/Images/guidIcon2.svg";
import { AiOutlineRight } from "react-icons/ai";

function GuidSection() {
  const { ref, inView } = useInView();
  const firstAnimation = useAnimation();
  const secondAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      firstAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          // ease: "easeInOut",
          // bounce: 0.5,
        },
      });
      secondAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          // ease: "easeInOut",
          // bounce: 0.5,
        },
      });
    } else {
      firstAnimation.start({
        x: "-200vw",
      });
      secondAnimation.start({
        x: "200vw",
      });
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      className={" p-2 md:p-16 text-center bg-lightGray w-full"}
    >
      <div className={"md:mb-16 my-10"}>
        <h2 className={"text-xl md:text-3xl font-bold"}>
          Don't know where to start from?{" "}
        </h2>
        <p className={"text-lg md:text-xl text-customGray"}>
          We've got the best articles,tools and resources to help you to start{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className={
            "flex flex-col p-7 rounded-md bg-secondary text-customWhite transform transition-transform hover:scale-110"
          }
          animate={firstAnimation}
        >
          <div className="flex justify-center md:justify-between items-center">
            <div className="bg-primary rounded-md py-2 px-4 flex items-center justify-center w-16 h-16">
              <img className="w-12 h-12" src={lunchImg} alt="luncher" />
            </div>
            <img src={Clouds} alt="clouds" className="hidden md:inline w-44" />
          </div>
          <div className=" text-customWhite  mt-10 text-left flex flex-col items-center justify-around ">
            <h4 className="text-md mb-4 md:mb-0  md:text-2xl place-self-start font-bold ">
              PLANING TO BUILD A WEBSITE
            </h4>
            <p className="w-full md:w-9/12 place-self-start">
              You want to build a new website but not sure what to start with?
              We've prepared a step by step guide for you to handle the whole
              process from design to launch{" "}
            </p>
            <button className=" flex items-center w-max  btnPrimary bg-customWhite text-secondary hover:bg-primary hover:text-customWhite  transform  hover:scale-110  mt-5 place-self-stretch mx-auto md:mx-0 md:place-self-start  ">
              LEARN MORE <AiOutlineRight className="ml-2 " />
            </button>
          </div>
        </motion.div>
        <motion.div
          className={
            "flex flex-col p-7 rounded-md bg-primary text-customWhite transform transition-transform hover:scale-110"
          }
          animate={secondAnimation}
        >
          <div className="flex justify-center md:justify-between items-center">
            <div className="bg-secondary rounded-md py-2 px-4 flex items-center justify-center w-16 h-16">
              <img className="w-12 h-12" src={GuidIcon} alt="luncher" />
            </div>
            <img
              src={GuidIcon2}
              alt="clouds"
              className="hidden md:inline w-32"
            />
          </div>
          <div className=" text-customWhite  mt-10 text-left flex flex-col items-center justify-around ">
            <h4 className="text-md mb-4 md:mb-0  md:text-2xl place-self-start font-bold ">
              PLANING TO BUILD A WEBSITE
            </h4>
            <p className="w-full md:w-9/12 place-self-start">
              You want to build a new website but not sure what to start with?
              We've prepared a step by step guide for you to handle the whole
              process from design to launch{" "}
            </p>
            <button className=" flex items-center w-max  btnPrimary bg-customWhite text-secondary hover:bg-secondary hover:text-customWhite  transform  hover:scale-110  mt-5 place-self-stretch mx-auto md:mx-0 md:place-self-start  ">
              LEARN MORE <AiOutlineRight className="ml-2 " />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GuidSection;
