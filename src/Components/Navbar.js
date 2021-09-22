import { useAnimation } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../static/Images/logo.png";

function Navbar() {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("");
  const transitionNavBar = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const openingMenuGHandler = () => {
    if (openMenu) setOpenMenu(false);
  };
  useEffect(() => {
    window.addEventListener("click", openingMenuGHandler);
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
      window.removeEventListener("click", openingMenuGHandler);
    };
  });

  // eslint-disable-next-line no-lone-blocks
  {
    return openMenu ? (
      <AnimatePresence>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          className="fixed z-50 max-h-full h-full"
        >
          <ul className=" flex flex-col place-items-start   bg-primary bg-opacity-80   text-customWhite  max-h-full h-full space-y-10 p-10">
            <li className="listItem">
              <Link to="/" href="localhost:3000">
                Home
              </Link>
            </li>
            <li className="listItem">
              <Link to="/service" href="localhost:3000">
                Services
              </Link>
            </li>{" "}
            <li className="listItem">
              <Link to="/" href="localhost:3000">
                Plans
              </Link>
            </li>{" "}
            <li className="listItem">
              <Link to="/" href="localhost:3000">
                Tools
              </Link>
            </li>
            <li
              className={"transform   transition-all  hover:-translate-y-1.5"}
            >
              <Link
                to="/login"
                className="btnPrimary bg-customWhite  text-secondary hover:text-customWhite hover:bg-secondary"
                href="localhost:3000"
              >
                Login
              </Link>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    ) : (
      <nav
        className={`fixed z-50 text-customWhite  items-center top-0 w-full  ${
          show
            ? "bg-primary bg-opacity-90"
            : "bg-opacity-0 animate__animated animate__fadeIn"
        } `}
        style={{ transition: "all .6s" }}
      >
        <div
          className={`flex transition  px-8 ${
            active !== "" ? "py-0" : "py-5"
          }  items-center justify-between`}
        >
          <img src={logo} alt="logo" />
          <AiOutlineBars
            onClick={() => setOpenMenu(!openMenu)}
            className="inline md:hidden w-8 h-8 cursor-pointer "
          />
          <ul className="hidden md:flex items-center  text-white justify-between space-x-10">
            <li
              className={`${
                active === "Home" ? "activePage" : "bg-opacity-0"
              }  listItem `}
              onClick={() => setActive("Home")}
            >
              <Link to="/" href="localhost:3000">
                Home
              </Link>
            </li>
            <li
              className={`${
                active === "Service" ? "activePage" : "bg-opacity-0"
              }  listItem `}
              onClick={() => setActive("Service")}
            >
              <Link to="/Service" href="localhost:3000">
                Service
              </Link>
            </li>
            <li
              className={`${
                active === "Plans" ? "activePage" : "bg-opacity-0"
              }  listItem `}
              onClick={() => setActive("Plans")}
            >
              <Link to="/" href="localhost:3000">
                Plans
              </Link>
            </li>
            <li
              className={`${
                active === "Tools" ? "activePage" : "bg-opacity-0"
              }  listItem `}
              onClick={() => setActive("Tools")}
            >
              <Link to="/" href="localhost:3000">
                Tools & Service
              </Link>
            </li>
            <li className={"transform   transition-all hover:-translate-y-1.5"}>
              <Link
                to="/login"
                className="btnPrimary bg-customWhite text-secondary hover:text-customWhite hover:bg-secondary"
                href="localhost:3000"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
