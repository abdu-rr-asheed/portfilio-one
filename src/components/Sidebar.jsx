import React from "react";
import { GiEarthAmerica, GiSkills } from "react-icons/gi";
import { FaFingerprint, FaBriefcase, FaFileCode } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed right-0 top-0 z-10 md:block hidden">
      <div className="w-16 h-screen m-0 flex flex-col justify-center text-white shadow-2xl">
        <SideBarIcon icon={<FaFingerprint size="24" />} text="About Me" />
        <SideBarIcon icon={<FaBriefcase size="20" />} text="Projects" />
        <SideBarIcon icon={<GiEarthAmerica size="26" />} text="Contact Me" />
        <SideBarIcon icon={<GiSkills size="26" />} text="Skills" />
        <SideBarIcon icon={<FaFileCode size="22" />} text="Resume" />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Sidebar;
