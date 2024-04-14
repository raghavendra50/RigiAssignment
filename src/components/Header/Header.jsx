import React from "react";
import Thumbnail from "../../assets/Thumbnail.png";

const Header = () => {
  return (
    <header className="w-[100%] h-auto p-5 box-border bg-white dark:bg-slate-800 flex relative items-center justify-between border-b-[1px]">
      <div className="w-[40px] h-[40px] bg-black rounded-md">
        <img
          src={Thumbnail}
          alt="Thumbnail"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1 h-full flex items-center justify-end sm:justify-center">
        <input
          type="text"
          className=" w-[250px] sm:w-[400px] h-[40px] rounded-full bg-slate-200"
        />
      </div>
    </header>
  );
};

export default Header;
