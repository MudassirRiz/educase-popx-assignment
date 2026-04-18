import React from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex md:justify-center md:items-center">
      <section className="w-full min-h-screen md:min-h-0 md:w-[400px] md:h-[95vh] bg-gray-100 shadow-sm">
        <div className="h-full bg-gray-100 flex flex-col">
          <div className="px-4 py-4 bg-white">
            <h1 className="text-[18px] font-semibold text-gray-700">Account Settings</h1>
          </div>

          <div className="flex-1 w-full bg-gray-100">
            <div className="p-4 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-[65px] h-[65px] shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1674723762879-9213e31d8649?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="User Image"
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-purple-600 w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                    <FaCamera size={14} color="white" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-[16px] font-bold text-gray-900">Marry Doe</h2>
                  <p className="text-[14px] font-medium text-gray-600">Marry@gmail.com</p>
                </div>
              </div>

              <p className="text-[14px] text-gray-500 leading-5 pr-2">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
              </p>
            </div>

            <div className="w-full min-h-[calc(93vh-220px)] md:min-h-[380px] border-t border-b border-dashed border-gray-400"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
