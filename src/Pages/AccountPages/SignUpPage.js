import React, { useRef } from 'react'
import { FiFacebook, FiGithub } from 'react-icons/fi'
import Swal from 'sweetalert2'
import zxcvbn from 'zxcvbn'
import { FcGoogle } from 'react-icons/fc'
function SignUpPage() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })
  const emailRef = useRef(null)
  const PasswordRef = useRef(null)
  const RePasswordRef = useRef(null)

  const handleInputs = () => {
    if (emailRef.current.value === '') {
      Toast.fire({
        icon: 'error',
        title: 'Insert Your Email',
      })
      return false
    }
    if (PasswordRef.current.value === '') {
      Toast.fire({
        icon: 'error',
        title: 'Insert Your Password',
      })
      return false
    }
    if (PasswordRef.current.value.length < 8) {
      Toast.fire({
        icon: 'error',
        title: 'Password Should Be more than 8 Character',
      })
      return false
    }

    if (RePasswordRef.current.value !== PasswordRef.current.value) {
      Toast.fire({
        icon: 'error',
        title: 'Password Are Not Same',
      })
      return false
    }

    return true
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-secondary to-primary1">
      <div className="bg-customWhite w-5/6 rounded-xl py-16 px-10  md:w-4/6 lg:w-3/6 h-5/6">
        <h1 className="font-extrabold text-4xl text-center">
          Login with Email
        </h1>
        <form className="my-10 flex flex-col">
          <input
            ref={emailRef}
            placeholder="Email"
            type="email"
            className="block py-3 font-bold tracking-wider px-2 w-full md:w-3/5 mx-auto my-5  bg-secondary bg-opacity-80  outline-none rounded-lg text-customGray"
          ></input>
          <input
            ref={PasswordRef}
            placeholder="Password"
            type="password"
            className="block py-3 font-bold tracking-wider px-2 w-full md:w-3/5 mx-auto my-5  bg-secondary bg-opacity-80  outline-none rounded-lg text-customGray"
          ></input>
          <input
            ref={RePasswordRef}
            placeholder="Password"
            type="password"
            className="block py-3 font-bold tracking-wider px-2 w-full md:w-3/5 mx-auto my-5  bg-secondary bg-opacity-80  outline-none rounded-lg text-customGray"
          ></input>
          <button
            type="submit"
            className="btnPrimary w-2/4 md:w-2/5  mx-auto bg-primary1 hover:bg-primary transform  text-customWhite"
            onClick={(e) => {
              e.preventDefault()
              handleInputs()
            }}
          >
            Login
          </button>
        </form>
        <h1 className="font-extrabold text-2xl text-center border-b-2">OR</h1>
        <div className="flex items-center md:justify-around justify-between mt-10  ">
          <div className=" flex items-center justify-center text-5xl bg-gradient-to-br from-FaceBookBlue to-customGray p-3 rounded-xl text-customWhite transform transition-all hover:scale-110   ">
            <FiFacebook />
          </div>
          <div className=" flex items-center justify-center text-5xl bg-lightGray2 p-3 rounded-xl text-customWhite transform transition-all hover:scale-110   ">
            <FcGoogle />
          </div>
          <div className=" flex items-center justify-center text-5xl bg-gradient-to-br from-customGray to-lightGray p-3 rounded-xl text-customWhite transform transition-all hover:scale-110   ">
            <FiGithub />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
