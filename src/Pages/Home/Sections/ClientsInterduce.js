import React from "react";
import firstImage from "../../../static/Images/robinhood-1.png";
import secondImage from "../../../static/Images/reddit-1.png";
import thirdImage from "../../../static/Images/upcase.png";
import fourthImage from "../../../static/Images/hubspot.png";
import fithImage from "../../../static/Images/tunein.png";

function ClientsIntroduce() {
  return (
    <section className="my-32 flex flex-col">
      <div className={"md:mb-16 my-10 text-center"}>
        <h2 className={"text-base -mx-4   md:text-3xl font-bold"}>
          Our Clients{" "}
        </h2>
        <p className={"text-sm md:text-xl text-customGray"}>
          You can be the next one and may start for free{" "}
        </p>
      </div>
      <div className="flex flex-wrap ">
        <img
          className="mx-auto my-10 place-self-center"
          src={firstImage}
          alt="firstImage"
        />
        <img
          className="mx-auto my-10 place-self-center"
          src={secondImage}
          alt="secondImage"
        />
        <img
          className="mx-auto my-10 place-self-center"
          src={thirdImage}
          alt="thirdImage"
        />
        <img
          className="mx-auto my-10 place-self-center"
          src={fourthImage}
          alt="fourthImage"
        />
        <img
          className="mx-auto my-10 place-self-center"
          src={fithImage}
          alt="fithImage"
        />
      </div>
      <button className="btnPrimary bg-secondary hover:bg-primary transform hover:scale-125 text-customWhite mx-auto mt-10">
        GET FREE TRIAL
      </button>
    </section>
  );
}

export default ClientsIntroduce;
