import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiHome6Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaRegClock } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { CgClose } from "react-icons/cg";

const Contents = () => {
  const [tableSelect, setTableSelect] = useState([]);
  const [isOpenTable, setIsOpenTable] = useState(false);
  // const { tableSelect, toggleSelectTable } = useContext(AppContext);

  const changeSelectHandle = (id) => {
    setTableSelect((prevState) =>
      prevState.includes(id)
        ? prevState.filter((item) => item !== id)
        : [...prevState, id]
    );
  };

  return (
    <div className="col-span-8 h-screen bg-black relative overflow-hidden">
      <div className="z-0 absolute top-[-200px] right-[-150px] w-[400px] h-[400px] bg-teal-400 rounded-full blur-[250px]"></div>
      <div className="z-0 absolute bottom-[-200px] left-[-150px] w-[400px] h-[400px] bg-teal-400 rounded-full blur-[300px]"></div>

      <div className="z-20 relative h-full overflow-y-scroll p-8">
        <div className="w-full flex items-center justify-between">
          <p className="text-white text-2xl font-medium">Quản lý bàn</p>
          <div className="flex items-center gap-3 rounded-xl bg-black p-2.5">
            <button className="flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-600">
              <IoNotificationsOutline className="text-white text-xl" />
            </button>
            <button className="rounded-full h-10 w-10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1733280656389-e05852262bcd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full object-cover"
              />
            </button>
            <button>
              <IoIosArrowDown className="text-white" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 text-white">
          <RiHome6Line />
          <IoIosArrowForward className="text-xs" />
          <span className="text-[15px]">Dashboard</span>
          <IoIosArrowForward className="text-xs" />
          <span className="text-[15px]">Orders</span>
        </div>

        <div className="grid grid-cols-4 gap-3 bg-neutral-900 p-5 mt-9">
          <div className="col-span-1">
            <span className="text-white">Tìm bàn</span>
            <div className="mt-1.5 bg-black rounded-md p-2.5 flex items-center gap-2">
              <IoIosSearch className="text-white text-xl" />
              <span className="text-white text-[15px] font-light">
                Tìm kiếm tại đây
              </span>
            </div>
          </div>
          <div className="col-span-1">
            <span className="text-white">Trạng thái</span>
            <div className="mt-1.5 bg-black rounded-md p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <BsDot className="text-white text-xl" />
                <span className="text-white text-[15px] font-light">
                  Tất cả
                </span>
              </div>
              <IoIosArrowDown className="text-white" />
            </div>
          </div>
          <div className="col-span-1">
            <span className="text-white">Tầng</span>
            <div className="mt-1.5 bg-black rounded-md p-2.5 flex items-center justify-between gap-2">
              <span className="text-white text-[15px] font-light">Tầng 1</span>
              <IoIosArrowDown className="text-white" />
            </div>
          </div>
          <div className="col-span-1">
            <span className="text-white">Nhân viên</span>
            <div className="mt-1.5 bg-black rounded-md p-2.5 flex items-center justify-between gap-2">
              <span className="text-white text-[15px] font-light">
                Nhân viên A
              </span>
              <IoIosArrowDown className="text-white" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
            <div key={i} className="relative">
              <img
                src={`${
                  tableSelect.includes(item) && isOpenTable
                    ? "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/466585125_479197591876819_7807659397000343139_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=daufZGzr9loQ7kNvgH3JsNT&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&oh=03_Q7cD1QFCBu4ebuMJA4jCbtzZBEBn__0ppm3Y4s1XWBOjxsATVA&oe=67836256"
                    : " https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/466966474_455968720879276_9124792634408036585_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ojaQ35GrUlcQ7kNvgFFC7V-&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&oh=03_Q7cD1QHBVoCRZObLi69aJSpCaN_5PP7ERoD8rGhe0Tqezyt7nw&oe=67836101"
                }`}
                alt=""
                className="rounded-xl"
              />
              <button
                onClick={() => changeSelectHandle(item)}
                className="absolute right-8 bottom-8 flex items-center gap-1.5 p-1 bg-black border border-teal-400 rounded-md"
              >
                {tableSelect.includes(item) ? (
                  <div className="w-5 h-5 bg-teal-400 rounded-md flex items-center justify-center">
                    <FaCheck className="text-sm" />
                  </div>
                ) : (
                  <div className="w-5 h-5 border border-teal-400 rounded-md"></div>
                )}
                <span className="text-white text-sm">Bàn {item}</span>
              </button>

              <div className="absolute left-8 bottom-8 flex flex-col items-start gap-1.5">
                <div className="bg-black px-2 py-1.5 leading-3 rounded-lg flex gap-1">
                  <GoDotFill className="text-xs text-teal-400" />
                  <span className="text-white text-[13px]">Nguyễn Văn B</span>
                </div>
                <div className="bg-black px-2 py-1.5 leading-3 rounded-lg flex gap-1">
                  <GoDotFill className="text-xs text-teal-400" />
                  <span className="text-white text-[13px]">Bàn trống</span>
                </div>
                <div className="bg-black px-2 py-1.5 leading-3 rounded-lg flex gap-1.5">
                  <FaRegClock className="text-xs text-teal-400" />
                  <span className="text-white text-[13px]">00:22:00</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-between px-5 py-4 bg-neutral-900 rounded-lg">
          <div className="flex items-center gap-3 text-white w-1/2">
            <p className="text-[15px] text-nowrap">
              Mã đơn: <span className="font-medium">#OBSH234</span>
            </p>
            <span>|</span>
            <p className="text-[15px] text-nowrap">Bàn đã chọn:</p>
            <div className="flex flex-wrap gap-2">
              {tableSelect.map((item, i) => (
                <button
                  key={i}
                  className="flex items-center gap-1 text-[15px] font-medium bg-black py-0.5 px-2 rounded-md"
                >
                  <span className="">Bàn {item}</span>

                  <CgClose
                    className="text-sm"
                    onClick={() => changeSelectHandle(item)}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2.5 w-1/2 justify-end items-center">
            <button className="bg-black font-medium flex items-center justify-center w-28 h-12 text-white border border-neutral-700 rounded-lg">
              Đặt trước
            </button>
            <button
              onClick={() => setIsOpenTable(true)}
              className="bg-teal-400 font-medium flex items-center justify-center w-28 h-[3.2rem] text-black rounded-lg"
            >
              Mở bàn
            </button>
          </div>
        </div>

        <div className="mt-14 flex justify-center mb-6">
          <div className="bg-black border border-neutral-700 flex items-center rounded-lg">
            <button className="text-white flex items-center gap-1.5 px-3 border-r border-neutral-700">
              <IoMdArrowBack />
              <span className="text-[15px]">Previous</span>
            </button>
            <div className="flex">
              <button className="text-white w-10 h-10 flex items-center justify-center border-x border-neutral-700">
                1
              </button>
              <button className="text-white w-10 h-10 flex items-center justify-center border-r border-neutral-700">
                2
              </button>
              <button className="text-white w-10 h-10 flex items-center justify-center border-r border-neutral-700">
                3
              </button>

              <button className="text-white w-10 h-10 flex items-center justify-center border-r border-neutral-700">
                ...
              </button>
              <button className="text-white w-10 h-10 flex items-center justify-center border-r border-neutral-700">
                8
              </button>
              <button className="text-white w-10 h-10 flex items-center justify-center border-r border-neutral-700">
                9
              </button>
              <button className="text-white w-10 h-10 flex items-center justify-center border-r border-neutral-700">
                10
              </button>
            </div>
            <button className="text-white flex items-center gap-1.5 px-3">
              <span className="text-[15px]">Next</span>
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
