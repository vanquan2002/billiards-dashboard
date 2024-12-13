import { useContext } from "react";
import { AppContext } from "../AppContext";
import { LuSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  const { themeDarkMode, toggleThemeDarkMode } = useContext(AppContext);

  return (
    <div className="lg:hidden z-30 fixed left-0 top-0 w-full py-3 px-3.5 bg-white dark:bg-black flex justify-between items-center border-b border-neutral-200 dark:border-neutral-700">
      <img
        src="https://bidaa.transtechvietnam.com/transtech/panel.png"
        alt=""
        className="w-1/3"
      />
      {themeDarkMode ? (
        <LuSun className="text-[22px]" onClick={() => toggleThemeDarkMode()} />
      ) : (
        <IoMoonOutline
          className="text-[22px]"
          onClick={() => toggleThemeDarkMode()}
        />
      )}
    </div>
  );
};

export default Header;
