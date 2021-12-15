import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 md:top-0 h-16 md:w-16 w-screen md:h-screen m-0 flex flex-row md:flex-col justify-center bg-gray-900 text-white shadow-2xl">
      <SideBarIcon icon={<FaFire size="28" />} text="Logo" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} text="Plus" />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Lighting" />
      <SideBarIcon icon={<FaPoo size="20" />} text="pee" />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} text="Settings" />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
