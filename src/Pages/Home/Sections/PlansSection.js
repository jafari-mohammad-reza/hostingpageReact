import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import databaseIcon from "../../../static/Images/plansIcon1.png";
import { AiOutlineRight } from "react-icons/ai";
import transferImage from "../../../static/Images/transfer.png";
import Cloud from "../../../static/Images/Cloud.png";
import Internet from "../../../static/Images/WP_Icon.png";

function PlansSection() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
      });
    } else {
      animation.start({
        y: "1000vw",
      });
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      className={
        "my-32 md:my-48 mx-5 md:mx-16 text-center overflow-hidden max-h-full h-full p-10  "
      }
    >
      <div className={"mb-16"}>
        <h2 className={"text-lg md:text-3xl font-bold"}>
          Types of hosting that we provide{" "}
        </h2>
        <p className={"text-base md:text-xl text-customGray"}>
          Our service is always affordable for everyone.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 ">
        <motion.div
          animate={animation}
          transition={{ duration: 1.2, bounce: 0.7 }}
          className={
            "hover:border-opacity-100 hover:scale-105 border-opacity-0 border-t-8 border-primary  boxShadow     transform transition-all flex flex-col items-center justify-center space-y-5 rounded-tr-xl rounded-tl-xl rounded-md py-8 px-5"
          }
        >
          <div className="flex drop-shadow-sm flex-col items-center justify-center space-y-16  ">
            <img src={databaseIcon} alt="" />
            <div className="flex flex-col items-center space-y-3 text-center ">
              <h3 className="font-bold text-xl md:text-2xl">SHARED HOSTING</h3>
              <p className="w-full  ">
                Increase the rank of you website by the higher speed
              </p>
            </div>
          </div>
          <hr className="w-full -mr-4 -ml-4 h-0.5 rounded-full bg-opacity-60 bg-customGray" />
          <div className="">
            <p>Get started at</p>
            <h3 className=" font-bold text-lg md:text-3xl flex items-center tracking-widest text-customGray">
              $15.99 / <small className="font-light text-sm">month</small>
            </h3>
          </div>
          <button className="flex w-max items-center   btnPrimary bg-customWhite text-secondary hover:bg-primary hover:text-customWhite  transform  hover:scale-110  place-self-stretch mx-auto md:mx-0 md:place-self-center  ">
            LEARN MORE <AiOutlineRight className="hidden md:inline ml-2 " />
          </button>
        </motion.div>
        <motion.div
          transition={{ duration: 1.5, bounce: 0.7 }}
          animate={animation}
          className={
            "hover:border-opacity-100 hover:scale-105 border-opacity-0 border-t-8 border-primary  boxShadow     transform transition-all flex flex-col items-center justify-center space-y-5 rounded-tr-xl rounded-tl-xl rounded-md py-8 px-5"
          }
        >
          <div className="flex drop-shadow-sm flex-col items-center justify-center space-y-16  ">
            <img src={transferImage} alt="" />
            <div className="flex flex-col items-center space-y-3 text-center ">
              <h3 className="font-bold text-xl md:text-2xl">VPS HOSTING</h3>
              <p className="w-full  ">
                Be able to conceal your ID whenever needed
              </p>
            </div>
          </div>
          <hr className="w-full -mr-4 -ml-4 h-0.5 rounded-full bg-opacity-60 bg-customGray" />
          <div className="">
            <p>Get started at</p>
            <h3 className=" font-bold text-lg md:text-3xl flex items-center tracking-widest text-customGray">
              $8.99/ <small className="font-light text-sm">month</small>
            </h3>
          </div>
          <button className="flex w-max items-center   btnPrimary bg-customWhite text-secondary hover:bg-primary hover:text-customWhite  transform  hover:scale-110  place-self-stretch mx-auto md:mx-0 md:place-self-center  ">
            LEARN MORE <AiOutlineRight className="ml-2 hidden md:inline" />
          </button>
        </motion.div>
        <motion.div
          transition={{ duration: 1.8, bounce: 0.7 }}
          animate={animation}
          className={
            "hover:border-opacity-100 hover:scale-105 border-opacity-0 border-t-8 border-primary  boxShadow     transform transition-all flex flex-col items-center justify-center space-y-5 rounded-tr-xl rounded-tl-xl rounded-md py-8 px-5"
          }
        >
          <div className="flex drop-shadow-sm flex-col items-center justify-center space-y-16  ">
            <img src={Cloud} alt="" />
            <div className="flex flex-col items-center space-y-3 text-center ">
              <h3 className="font-bold text-xl md:text-2xl">CLOUD HOSTING</h3>
              <p className="w-full  ">
                Super convenient and highly customizable option{" "}
              </p>
            </div>
          </div>
          <hr className="w-full -mr-4 -ml-4 h-0.5 rounded-full bg-opacity-60 bg-customGray" />
          <div className="">
            <p>Get started at</p>
            <h3 className=" font-bold text-lg md:text-3xl flex items-center tracking-widest text-customGray">
              $15.99 / <small className="font-light text-sm">month</small>
            </h3>
          </div>
          <button className="flex w-max items-center   btnPrimary bg-customWhite text-secondary hover:bg-primary hover:text-customWhite  transform  hover:scale-110  place-self-stretch mx-auto md:mx-0 md:place-self-center   ">
            LEARN MORE <AiOutlineRight className="ml-2 hidden md:inline" />
          </button>
        </motion.div>
        <motion.div
          transition={{ duration: 2.1, bounce: 0.7 }}
          animate={animation}
          className={
            "hover:border-opacity-100 hover:scale-105 border-opacity-0 border-t-8 border-primary  boxShadow     transform transition-all flex flex-col items-center justify-center space-y-5 rounded-tr-xl rounded-tl-xl rounded-md py-8 px-5"
          }
        >
          <div className="flex drop-shadow-sm flex-col items-center justify-center space-y-16  ">
            <img src={Internet} alt="" />
            <div className="flex flex-col items-center space-y-3 text-center ">
              <h3 className="font-bold text-xl md:text-2xl">
                WORDPRESS HOSTING
              </h3>
              <p className="w-full  ">
                With low cost and high variety of tools, plugins of your choice{" "}
              </p>
            </div>
          </div>
          <hr className="w-full -mr-4 -ml-4 h-0.5 rounded-full bg-opacity-60 bg-customGray" />
          <div className="">
            <p>Get started at</p>
            <h3 className=" font-bold text-lg md:text-3xl flex items-center tracking-widest text-customGray">
              $15.99 / <small className="font-light text-sm">month</small>
            </h3>
          </div>
          <button className="flex w-max items-center   btnPrimary bg-customWhite text-secondary hover:bg-primary hover:text-customWhite  transform  hover:scale-110  place-self-stretch mx-auto md:mx-0 md:place-self-center  ">
            LEARN MORE <AiOutlineRight className="ml-2 hidden md:inline" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default PlansSection;
