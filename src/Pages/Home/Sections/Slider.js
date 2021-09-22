import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import firstProfile from "../../../static/Images/profile1.png";
import secondProfile from "../../../static/Images/profile2.png";
import { AiFillStar } from "react-icons/ai";
import rightPanel from "../../../static/Images/right_dotted_square.png";
import leftPanel from "../../../static/Images/Left_dotted_square.png";
function SliderSection() {
  return (
    <section className="relative bg-lightGray py-16 px-5 md:px-20">
      <img
        src={rightPanel}
        alt="panel"
        className="hidden lg:block absolute -top-5 -right-3 w-44"
      />

      <div className={"md:mb-16 my-10 text-center"}>
        <h2 className={"text-base -mx-4   md:text-3xl font-bold"}>
          Valued customers with valuable feedback{" "}
        </h2>
        <p className={"text-sm md:text-xl text-customGray"}>
          Feedbacks from our happy users. Become one of them.{" "}
        </p>
      </div>
      {/* <Carousel>

      </Carousel> */}
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={7000}
        emulateTouch={true}
        showArrows={false}
        showStatus={false}
        className="cursor-pointer"
      >
        <div className="flex flex-wrap  ">
          <div className="flex w-full lg:w-2/4 f col-span-full md:col-span-6  flex-col lg:flex-row h-56">
            <div className="w-28 mt-8 place-self-center md:place-self-start">
              <img src={firstProfile} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col space-y-5 place-self-center ">
              <div className="flex items-center text-startGold space-x-4 lg:space-x-2  place-self-center md:place-self-start">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="flex flex-col space-y-4 text-left place-self-end">
                <p className="font-italic">
                  "I've been using servion for more than a year and I must say
                  I've never had such reliable service provider to work with.
                  They've helped me out a lot"
                </p>
                <h4>- Erich Marks</h4>
              </div>
            </div>
          </div>
          <div className="flex  w-full lg:w-2/4    col-span-full md:col-span-6  flex-col lg:flex-row h-56">
            <div className="w-28 mt-8 place-self-center md:place-self-start">
              <img src={firstProfile} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col space-y-5 place-self-center ">
              <div className="flex items-center text-startGold space-x-4 lg:space-x-2  place-self-center md:place-self-start">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="flex flex-col space-y-4 text-left place-self-end">
                <p className="font-italic">
                  "I've been using servion for more than a year and I must say
                  I've never had such reliable service provider to work with.
                  They've helped me out a lot"
                </p>
                <h4>- Erich Marks</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  ">
          <div className="flex w-full lg:w-2/4 f col-span-full md:col-span-6  flex-col lg:flex-row h-56">
            <div className="w-28 mt-8 place-self-center md:place-self-start">
              <img src={firstProfile} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col space-y-5 place-self-center ">
              <div className="flex items-center text-startGold space-x-4 lg:space-x-2  place-self-center md:place-self-start">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="flex flex-col space-y-4 text-left place-self-end">
                <p className="font-italic">
                  "I've been using servion for more than a year and I must say
                  I've never had such reliable service provider to work with.
                  They've helped me out a lot"
                </p>
                <h4>- Erich Marks</h4>
              </div>
            </div>
          </div>
          <div className="flex  w-full lg:w-2/4    col-span-full md:col-span-6  flex-col lg:flex-row h-56">
            <div className="w-28 mt-8 place-self-center md:place-self-start">
              <img src={firstProfile} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col space-y-5 place-self-center ">
              <div className="flex items-center text-startGold space-x-4 lg:space-x-2  place-self-center md:place-self-start">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="flex flex-col space-y-4 text-left place-self-end">
                <p className="font-italic">
                  "I've been using servion for more than a year and I must say
                  I've never had such reliable service provider to work with.
                  They've helped me out a lot"
                </p>
                <h4>- Erich Marks</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  ">
          <div className="flex w-full lg:w-2/4 f col-span-full md:col-span-6  flex-col lg:flex-row h-56">
            <div className="w-28 mt-8 place-self-center md:place-self-start">
              <img src={firstProfile} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col space-y-5 place-self-center ">
              <div className="flex items-center text-startGold space-x-4 lg:space-x-2  place-self-center md:place-self-start">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="flex flex-col space-y-4 text-left place-self-end">
                <p className="font-italic">
                  "I've been using servion for more than a year and I must say
                  I've never had such reliable service provider to work with.
                  They've helped me out a lot"
                </p>
                <h4>- Erich Marks</h4>
              </div>
            </div>
          </div>
          <div className="flex  w-full lg:w-2/4    col-span-full md:col-span-6  flex-col lg:flex-row h-56">
            <div className="w-28 mt-8 place-self-center md:place-self-start">
              <img src={firstProfile} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col space-y-5 place-self-center ">
              <div className="flex items-center text-startGold space-x-4 lg:space-x-2  place-self-center md:place-self-start">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="flex flex-col space-y-4 text-left place-self-end">
                <p className="font-italic">
                  "I've been using servion for more than a year and I must say
                  I've never had such reliable service provider to work with.
                  They've helped me out a lot"
                </p>
                <h4>- Erich Marks</h4>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <img
        src={leftPanel}
        alt="panel"
        className="hidden lg:block absolute -bottom-5 -left-3 w-44"
      />
    </section>
  );
}

export default SliderSection;
