import React from 'react'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();
  const moveToSignUpPage = ()=>{
    navigate('/signup')
  }
  const moveToLoginPage = ()=>{
    navigate('/login')
  }
  return (
    <div className='bg-gray-50 w-full min-h-screen flex md:justify-center md:items-center shadow-sm'>
      <section className='w-full min-h-screen md:min-h-0 md:w-[400px] md:h-[95vh] bg-gray-100 flex justify-center items-center shadow-sm p-4'>
        <div className='w-full h-full flex flex-col'>
          <div className='flex-1 flex flex-col justify-end'>
            <div className='w-full py-4'>
              <h1 className='mb-1.5 font-black text-2xl'>Welcome to PopX</h1>
              <p className=' text-sm font-medium tracking-wide  text-gray-500'>
                Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-3 pb-4'>
            <section className='w-full h-10 bg-violet-600 rounded-md flex justify-center items-center text-white cursor-pointer transition-all duration-300 hover:bg-violet-700' onClick={moveToSignUpPage}>
              <h2>Create Account</h2>
            </section>

            <section className='w-full h-10 bg-violet-300 rounded-md flex justify-center items-center text-black cursor-pointer transition-all duration-300 hover:bg-violet-400' onClick={moveToLoginPage}>
              <h2>Already Registred? Login</h2>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
