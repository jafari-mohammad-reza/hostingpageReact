import React, { useEffect } from "react";
import firstSectionImg from "../../../static/Images/firstSectionImg.png";
import secondSectionImg from "../../../static/Images/secondSectionImg.png";
import thirdSectionImg from "../../../static/Images/thirdSectionImg.png";
import firstSectionImage from "../../../static/Images/fristSectionImage.png";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function InterduceSection() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const ImageAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
      });
      ImageAnimation.start({
        opacity: 1,
        // x: 0,
        transition: { delay: 0.3, duration: 0.8 },
      });
    } else {
      animation.start({
        x: "-200vw",
      });
      ImageAnimation.start({
        // x: "200vw",
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <section ref={ref} className={"my-32 md:my-48 mx-5 md:mx-16 text-center"}>
      <div className={"mb-16"}>
        <h2 className={"text-lg md:text-3xl font-bold"}>
          What will you get if you'll join us
        </h2>
        <p className={"text-base md:text-xl text-customGray"}>
          Get the best web hosting service at the price you can afford
        </p>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-2"}>
        <div
          className={
            "flex flex-col items-start justify-between space-y-16 md:space-y-5 mb-10 md:mb-0 md:mr-10"
          }
        >
          <motion.div
            animate={animation}
            transition={{ duration: 0.4, bounce: 0.5 }}
            className={"block md:flex items-center "}
          >
            <img
              src={firstSectionImg}
              alt=""
              className={"w-16 h-16 mr-5 place-self-center"}
            />
            <div className={"text-left"}>
              <h4 className={"my-5 text-xl font-extrabold"}>WE GIVE A CARE </h4>
              <p className={"text-customGray "}>
                Beside the support we provide you with various tools to be able
                to host and manage your websites
              </p>
            </div>
          </motion.div>
          <motion.div
            animate={animation}
            transition={{ duration: 0.8, bounce: 0.5 }}
            className={"block md:flex items-center  "}
          >
            <img src={secondSectionImg} alt="" className={"w-16 h-16 mr-5"} />
            <div className={"text-left"}>
              <h4 className={"my-5 text-xl font-extrabold"}>WE GIVE A CARE </h4>
              <p className={"text-customGray"}>
                Beside the support we provide you with various tools to be able
                to host and manage your websites
              </p>
            </div>
          </motion.div>
          <motion.div
            animate={animation}
            transition={{ duration: 1.3, bounce: 0.5 }}
            className={"block md:flex items-center  "}
          >
            <img src={thirdSectionImg} alt="" className={"w-16 h-16 mr-5"} />
            <div className={"text-left"}>
              <h4 className={"my-5 text-xl font-extrabold"}>WE GIVE A CARE </h4>
              <p className={"text-customGray"}>
                Beside the support we provide you with various tools to be able
                to host and manage your websites
              </p>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.img
            animate={ImageAnimation}
            src={firstSectionImage}
            alt="fist section "
          />
        </div>
      </div>
    </section>
  );
}
