import React, { useEffect, useState } from 'react'
import backGround from '../static/Images/footer_bg.png'
import logo from '../static/Images/logo.png'
import visa from '../static/Images/visa.png'
import master from '../static/Images/mastercard-2.png'
import unionpay from '../static/Images/union-pay.png'
import paypal from '../static/Images/paypal.png'
import americaExpress from '../static/Images/american-express-1.png'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
function Footer() {
  const [smallScreen, setSmallScreen] = useState(null)
  const handler = () => {
    if (window.innerWidth < 445) {
      setSmallScreen(true)
    } else {
      setSmallScreen(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])
  return (
    <footer
      className="flex flex-col  md:h-screen    lg:space-y-36   text-customWhite px-16 justify-center mx-auto "
      style={{
        background: `url(${backGround})  no-repeat `,
        backgroundSize: 'cover',
        height: `${smallScreen ? '200vh' : '100vh'}`,
      }}
    >
      <div className="flex flex-wrap  items-center justify-center md:justify-between  ">
        <div className="m-3 flex flex-col items-center space-4">
          <h2 className="font-extrabold my-2">HOSTING</h2>
          <p className="cursor-pointer">Shared Hosting</p>
          <p className="cursor-pointer">VPS Hosting</p>
          <p className="cursor-pointer">Cloud Hosting</p>
          <p className="cursor-pointer">Wordpress Hosting</p>
        </div>
        <div className="m-3 flex flex-col items-center space-4">
          <h2 className="font-extrabold my-2">FEATURES</h2>
          <p className="cursor-pointer">Beginner Guide</p>
          <p className="cursor-pointer">Move to Servion</p>
          <p className="cursor-pointer">Website Builder</p>
          <p className="cursor-pointer">Tools and Resources</p>
        </div>
        <div className="m-3 flex flex-col items-center space-4">
          <h2 className="font-extrabold my-2">SUPPORT</h2>
          <p className="cursor-pointer">Help Center</p>
          <p className="cursor-pointer">Submit a Ticket</p>
          <p className="cursor-pointer">Contact Us</p>
          <p className="cursor-pointer">Blog</p>
        </div>
        <div className="m-3 flex flex-col items-center space-4 text-left">
          <h2 className="font-extrabold my-2">WE ACCEPT</h2>
          <div className="flex flex-wrap items-center space-x-3 mx-10 space-y-3 justify-start">
            <img
              src={visa}
              alt=""
              className="w-10 h-10 mt-2.5 p-0.5 ml-3 bg-primary1 flex items-center justify-center rounded-lg "
            />
            <img
              src={master}
              alt=""
              className="w-10 justify-self-end  h-10 p-0.5 bg-primary1 flex items-center justify-center rounded-lg "
            />
            <img
              src={unionpay}
              alt=""
              className="w-10 h-10 p-0.5 bg-primary1 flex items-center justify-center rounded-lg "
            />
            <img
              src={paypal}
              alt=""
              className="w-10 h-10 p-0.5 bg-primary1 flex items-center justify-center rounded-lg "
            />
            <img
              src={americaExpress}
              alt=""
              className="w-10 h-10 p-0.5 bg-primary1 flex items-center justify-center rounded-lg "
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-16 justify-center md:justify-between mx-10">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <img src={logo} alt="logo" className="w-24 h-8" />
            {/* <p>ServiOn</p> */}
          </div>
          <p>
            St. Patrick Ave., 10233 <br />
            USA
          </p>
        </div>
        <div className="flex flex-col flex-wrap space-y-4    ">
          <div className="flex space-x-2 text-secondary text-2xl md:place-self-end ">
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <AiOutlineYoutube />
            <FaFacebookF />
          </div>
          <div className="flex space-x-4 flex-wrap  text-base  md:text-xl  ">
            <p>Terms of Service</p>
            {/* <p>|</p> */}
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
