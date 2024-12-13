import { RiHome6Line } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { BsFolder } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { RxLightningBolt } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="col-span-2 sticky left-0 top-0 h-screen bg-black px-4 py-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-center">
          <img
            src="https://bidaa.transtechvietnam.com/transtech/panel.png"
            alt=""
            className="w-full"
          />
        </div>
        <nav className="mt-6 flex flex-col">
          <button className="flex items-center gap-2.5 px-2.5 py-2 bg-neutral-900 border-l-[3px] border-teal-400">
            <RiHome6Line className="text-white text-2xl" />
            <span className="text-white text-[17px]">Tổng quan</span>
          </button>

          <button className="flex items-center justify-between px-2.5 py-2 bg-neutral-900 border-l-[3px] border-teal-400">
            <div className="flex gap-2.5">
              <BsFolder className="text-white text-xl" />
              <span className="text-white text-[17px]">Quản lý</span>
            </div>

            <IoIosArrowUp className="text-white" />
          </button>

          <div className="w-full flex flex-col items-start justify-start bg-neutral-900">
            <button className="text-white w-full py-2 text-left p-12">
              Cửa hàng
            </button>
            <button className="text-white w-full py-2 text-left p-12">
              Bàn bida
            </button>
          </div>

          <button className="flex items-center gap-2.5 px-2.5 py-2 bg-neutral-900 border-l-[3px] border-teal-400">
            <FiSettings className="text-white text-xl" />
            <span className="text-white text-[17px]">Cài đặt</span>
          </button>
        </nav>
      </div>

      <div className="mt-6 p-3.5 bg-neutral-900 rounded-xl border border-neutral-700">
        <div className="flex justify-between">
          <div className="border border-neutral-700 p-2 rounded-lg">
            <RxLightningBolt className="text-white" />
          </div>
          <IoIosClose className="text-white text-2xl" />
        </div>

        <p className="text-white text-[15px] mt-2">
          Upgrade to Pro <span>20% OFF</span>
        </p>
        <p className="text-white text-sm font-light mt-1">
          Unlock 200+ integrations, 40 GB data, and advanced reporting.
        </p>

        <button className="mt-4 bg-teal-400 w-full py-1.5 rounded-lg text-[15px] font-medium">
          Nâng cấp ngay
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
