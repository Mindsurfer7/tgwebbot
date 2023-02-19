import React from "react";
import headerCSS from "./";
const tg = window.Telegram.WebApp;

const Header = (props) => {
  const onClose = () => {
    tg.close();
  };

  return (
    <div className={headerCSS.header}>
      <button onClick={onClose}>close</button>
      <span className={headerCSS.username}>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  );
};
export default Header;
