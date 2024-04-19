import React, { useState } from 'react';
import { FiHome, FiBookOpen } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GoDeviceCameraVideo } from "react-icons/go";
// import  selectUser  from '../feaures/userSlice';
// import { useSelector } from 'react-redux';

const SidebarSection = () => {
  const [expanded, setExpanded] = useState(false);
//   const user= useSelector(selectUser)

  return (
    <div className={`transition-width duration-300 ${expanded ? 'w-64' : 'w-16'} h-full bg-white absolute shadow-xl` } onClick={() => setExpanded(!expanded)}>
      <div className="flex items-center justify-between p-4 m-4">
        <span className="font-semibold text-xl text-gray-700">
          {expanded ? 'Logo' : ''}
        </span>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? <IoIosArrowBack className="text-2xl" /> : <IoIosArrowForward className="text-2xl" />}
        </button>
      </div>
      <ul className="flex flex-col p-2">
        <li className={`flex p-2 cursor-pointer justify-center hover:text-sky-900	`}>
          <FiHome className="text-3xl" />
          {expanded && <span className="ml-4">Home</span>}
        </li>
        <li className={`flex p-2 cursor-pointer justify-center relative group hover:text-sky-900	`}>
          <GoDeviceCameraVideo className="text-3xl" />
          {expanded && <span className="ml-4">Record</span>}
          {/* Clickable pop-out card for Record */}
          <div className="absolute left-full top-0 w-32 px-2 py-1 ml-2 bg-white border rounded shadow-md hidden group-hover:block">
            <button className="w-full h-full text-black focus:outline-none" onClick={() => alert('Clicked!')}>
              Interview
            </button>
          </div>
        </li>
        <li className={`flex p-2 cursor-pointer justify-center hover:text-sky-900	`}>
          <FiBookOpen className="text-3xl" />
          {expanded && <span className="ml-4">Library</span>}
        </li>
      </ul>
      <div className="absolute bottom-0 w-full p-4 text-center">
        {expanded && <span className="text-gray-700">username</span>}
      </div>
    </div>
  );
};

export default SidebarSection;
