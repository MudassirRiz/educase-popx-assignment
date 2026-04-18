
import React from "react";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    const form = e.target;
     const { fullName, phone, email, password, company } = form.elements;

    if(!fullName.value || !email.value || !password.value ||!company.value || !phone.value){
      
      return;
    }else{
      alert("form submitted")
      navigate('/profile')
    }

    
    




  }



  return (
    <div className="bg-gray-50 w-full min-h-screen flex md:justify-center md:items-center shadow-sm">
      <section className="w-full min-h-screen md:min-h-0 md:w-[400px] md:h-[95vh] text-shadow-popx-gray bg-gray-100 flex flex-col shadow-sm p-4 overflow-y-auto">
        <div>
          <h1 className="text-[23px] font-bold text-gray-900 mb-2 leading-tight">
            Create your <br /> PopX account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-1 mt-2">
          {[
            ['Full Name', 'fullName'],
            ['Phone number', 'phone'],
            ['Email address', 'email'],
            ['Password', 'password'],
            ['Company name', 'company']
          ].map(([label, name], i) => (
            <div className="relative mb-4" key={i}>
              <fieldset className="border border-gray-300 rounded-md px-3 pb-1 pt-0">
                <legend className="text-xs font-semibold text-purple-600 px-1">
                  {label}{label !== 'Company name' && <span className="text-red-500"> *</span>}
                </legend>
                <input
                  name={name}
                  required
                   type={
                    name === "email"
                      ? "email"
                      : name === "password"
                      ? "password"
                      : "text"
                  }
                  placeholder="Marry Doe"
                  
                  className="w-full outline-none text-[15px] font-medium bg-transparent"
                />
              </fieldset>
            </div>
          ))}

          <div className="mt-1 mb-6">
            <label className="block text-[13px] font-semibold text-gray-900 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>

            <div className="flex gap-5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="agency" className="accent-purple-600" />
                <span className="text-[15px]">Yes</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="agency" className="accent-purple-600" />
                <span className="text-[15px]">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-auto mb-4 h-10 bg-violet-600 text-white py-2.5 rounded-md font-semibold text-[14px]"
          >
            Create Account
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignUp;