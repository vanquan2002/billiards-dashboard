import { RiHome6Line } from "react-icons/ri";
import { BsFolder } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="z-30 lg:hidden fixed left-0 bottom-0 w-full bg-neutral-100 dark:bg-neutral-900 rounded-t-3xl px-5 pt-6 pb-9 flex justify-between">
      <div className="flex flex-col items-center gap-1.5">
        <button className="flex items-center justify-center w-11 h-11 bg-neutral-200 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
          <RiHome6Line className="text-xl" />
        </button>
        <span className="text-xs">Tổng quan</span>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <button className="flex items-center justify-center w-11 h-11 bg-neutral-200 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
          <BsFolder className="text-xl" />
        </button>
        <span className="text-xs">Quản lý</span>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <button className="flex items-center justify-center w-11 h-11 bg-neutral-200 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
          <IoNotificationsOutline className="text-xl" />
        </button>
        <span className="text-xs">Thông báo</span>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <button className="flex items-center justify-center w-11 h-11 bg-neutral-200 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
          <FiSettings className="text-xl" />
        </button>
        <span className="text-xs">Cài đặt</span>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <button className="rounded-full w-11 h-11  overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1733280656389-e05852262bcd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full object-cover"
          />
        </button>
        <span className="text-xs">Admin</span>
      </div>
    </div>
  );
};

export default Footer;
