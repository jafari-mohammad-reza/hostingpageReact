import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeaderBackGround from "../static/Images/HeaderBackGround.png";
import picture from "../static/Images/Illustration.svg";
// import picture form "../static/Images/Illustration.svg" ;

function Header() {
  const wordsList = ["Fast", "Secure", "Protected"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeOut = setInterval(() => {
      let currentIndex = index;
      setIndex(currentIndex + 1);
    }, 1500);
    return () => {
      clearInterval(timeOut);
    };
  }, [wordsList]);
  let textThatChanges = wordsList[index % wordsList.length];
  return (
    <header
      className="h-screen w-full relative p-5 text-customWhite text-red-100"
      style={{
        background: `url(${HeaderBackGround})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mt-28 items-center">
        <div className="animate__animated animate__fadeIn">
          <h1 className="text-xl sm:text-3xl lg:text-5xl ">
            Web Hosting Easy and <span>{textThatChanges}</span>
          </h1>
          <p className="tracking-widest text-xs md:text-lg">
            Full control of what you use and pay for
          </p>
          <div className="flex mt-5 space-x-1">
            <input
              type="text"
              placeholder="Insert Your Domain"
              className="bg-primary1 p-3 rounded-tl-xl rounded-bl-xl text-white w-4/6 border-0 outline-none text-xs md:text-lg"
            />
            <select className="border-0 outline-none bg-primary1 p-3 rounded-tr-xl rounded-br-xl text-white w-1/6 text-xs md:text-lg">
              <option className="outline-none border-none">.com</option>
              <option className="outline-none border-none">.ir</option>
              <option className="outline-none border-none">.net</option>
              <option className="outline-none border-none">.gov</option>
            </select>
          </div>
        </div>
        <div className="animate__animated animate__backInRight ">
          <img src={picture} alt="heropicture" className="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
