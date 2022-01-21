import React from "react";

import { scrollTo } from "./utils";

const ScrollToButton = ({ toId, toRef, duration, icon, text }) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

  // return <button onClick={handleClick}>{children}</button>;
  return (
    <div className="sidebar-icon group" onClick={handleClick}>
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};
export default ScrollToButton;
