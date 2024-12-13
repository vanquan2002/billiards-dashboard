import { RiHome6Line } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { BsFolder } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { RxLightningBolt } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useContext, useState } from "react";
import { LuSun } from "react-icons/lu";
import { AppContext } from "../AppContext";
import { IoMoonOutline } from "react-icons/io5";

const Sidebar = () => {
  const [isDrop, setIsDrop] = useState(true);
  const { themeDarkMode, toggleThemeDarkMode } = useContext(AppContext);

  return (
    <div className="hidden col-span-2 sticky left-0 top-0 h-screen bg-white dark:bg-black px-4 py-6 lg:flex flex-col justify-between">
      <div>
        <div className="flex justify-center">
          <img
            src="https://bidaa.transtechvietnam.com/transtech/panel.png"
            alt=""
            className="w-full"
          />
        </div>
        <nav className="mt-6 flex flex-col dark:text-white text-black">
          <button className="flex items-center gap-2.5 px-2.5 py-2">
            <RiHome6Line className="text-2xl" />
            <span className="text-[17px]">Tổng quan</span>
          </button>

          <button
            onClick={() => setIsDrop(!isDrop)}
            className="flex items-center justify-between px-2.5 py-2 bg-neutral-100 dark:bg-neutral-900 border-l-[3px] border-teal-400"
          >
            <div className="flex gap-2.5">
              <BsFolder className="text-xl" />
              <span className="text-[17px]">Quản lý</span>
            </div>

            <IoIosArrowUp
              className={`transform transition-transform ${
                isDrop ? "" : "rotate-180"
              }`}
            />
          </button>

          <div
            className={`${
              isDrop ? "block" : "hidden"
            } w-full flex flex-col items-start justify-start`}
          >
            <button className="w-full py-2 text-left p-12">Cửa hàng</button>
            <button className="w-full py-2 text-left p-12 bg-neutral-100 dark:bg-neutral-900">
              Bàn bida
            </button>
          </div>

          <button className="flex items-center gap-2.5 px-2.5 py-2">
            <FiSettings className="text-xl" />
            <span className="text-[17px]">Cài đặt</span>
          </button>

          <button
            onClick={() => toggleThemeDarkMode()}
            className="flex items-center gap-2.5 px-2.5 py-2"
          >
            {themeDarkMode ? (
              <LuSun className="text-[22px]" />
            ) : (
              <IoMoonOutline className="text-[22px]" />
            )}

            {themeDarkMode ? (
              <span className="text-[17px]">Chế độ sáng</span>
            ) : (
              <span className="text-[17px]">Chế độ tối</span>
            )}
          </button>
        </nav>
      </div>

      <div className="mt-6 p-3.5 text-black dark:text-white bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-300 dark:border-neutral-700">
        <div className="flex justify-between">
          <div className="border border-neutral-300 dark:border-neutral-700 p-2 rounded-lg">
            <RxLightningBolt className="" />
          </div>
          <IoIosClose className="text-2xl" />
        </div>

        <p className="text-[15px] mt-2">
          Upgrade to Pro <span>20% OFF</span>
        </p>
        <p className="text-sm font-light mt-1">
          Unlock 200+ integrations, 40 GB data, and advanced reporting.
        </p>

        <button className="mt-4 text-black bg-teal-400 w-full py-1.5 rounded-lg text-[15px] font-medium">
          Nâng cấp ngay
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
