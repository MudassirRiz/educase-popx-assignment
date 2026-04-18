import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handelSubmmit = (e)=>{
    e.preventDefault();

    const form  = e.target;
    const {email, password} = form.elements;

    if(!email.value || !password.value){
      alert('fill the required fields')
    }else{
      navigate('/profile')
    }






  }





  return (
    <div className='bg-gray-50 w-full min-h-screen flex md:justify-center md:items-center shadow-sm'>
      <section className='w-full min-h-screen md:min-h-0 md:w-[400px] md:h-[95vh] text-shadow-popx-gray bg-gray-100 flex flex-col shadow-sm p-4'>
        <div>
          <h1 className='text-[23px] font-bold text-gray-900 mb-1 mt-3 leading-tight'>
            Signin to your <br /> PopX account
          </h1>
        </div>

        <div className='text-shadow-popx-gray text-sm py-3'>
          <p className='text-gray-500 text-sm leading-5'>
            Lorem ipsum dolor sit  amet,<br /> consectetur adipisicing elit.
          </p>
        </div>

        <form onSubmit={handelSubmmit} className='flex flex-col flex-1'>
          <div className='relative mb-4'>
            <fieldset className='border border-gray-300 rounded-md px-3 pb-1 pt-0'>
              <legend className='text-xs font-semibold text-purple-600 px-1'>
                Email address <span className='text-red-500'>*</span>
              </legend>
              <input
                name='email'
                required
                placeholder='Marry Doe'
                className='w-full outline-none text-[15px] font-medium bg-transparent'
              />
            </fieldset>
          </div>

          <div className='relative mb-4'>
            <fieldset className='border border-gray-300 rounded-md px-3 pb-1 pt-0'>
              <legend className='text-xs font-semibold text-purple-600 px-1'>
                Password <span className='text-red-500'>*</span>
              </legend>
              <input
                name='password'
                required
                placeholder='Marry Doe'
                className='w-full outline-none text-[15px] font-medium bg-transparent'
              />
            </fieldset>
          </div>

          <button
            type='submit'
            className='w-full mt-2 h-10 bg-violet-600 text-white py-2.5 rounded-md font-semibold text-[14px]'
          >
            Login
          </button>
        </form>
      </section>
    </div>
  )
}

export default Login