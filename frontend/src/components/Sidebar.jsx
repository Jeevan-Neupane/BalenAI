import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsAppIndicator, BsHouseDoorFill } from 'react-icons/bs';
import { AiFillCamera, AiOutlineUser } from 'react-icons/ai';

const Sidebar = () => {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  return (
    <>
      <div className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${sidebarHidden ? 'hidden' : ''}`}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <BsAppIndicator className="px-2 py-1 rounded-md bg-blue-600" />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">BalenAI</h1>
            <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar}></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <NavLink to="/" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <BsHouseDoorFill />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
        </NavLink>
        <NavLink to="/cameras" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <AiFillCamera />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Cameras</span>
        </NavLink>
        <NavLink to="/suspects" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <AiOutlineUser />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Suspects</span>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;