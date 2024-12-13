import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { IoCloseOutline } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";

const BillModal = () => {
  const { isBillModal, toggleIsBillModal } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = isBillModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBillModal]);

  return (
    <div
      onClick={() => toggleIsBillModal(false)}
      className={`z-50 ${
        isBillModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } duration-300 bg-black bg-opacity-50 fixed top-0 left-0 h-screen w-screen flex justify-center items-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-100 dark:bg-black w-full lg:w-1/2 px-4 text-black dark:text-white rounded-xl"
      >
        <div className="flex justify-between items-center py-2">
          <span className="font-medium">Phiếu thu </span>
          <button>
            <IoCloseOutline
              className="text-2xl"
              onClick={() => toggleIsBillModal(false)}
            />
          </button>
        </div>

        <div className="border border-neutral-300 dark:border-neutral-400">
          <div className="text-sm grid grid-cols-4 border-b border-neutral-300 dark:border-neutral-400 px-2 py-3">
            <span className="col-span-1">Sử dụng:</span>
            <p className="col-span-3">Bàn 3</p>
          </div>

          <div className="text-sm grid grid-cols-4 border-b border-neutral-300 dark:border-neutral-400 px-2 py-3">
            <span className="col-span-1">Ngày và giờ:</span>
            <p className="col-span-3">09/12/2024 - 22:17</p>
          </div>

          <div className="text-sm grid grid-cols-4 border-b border-neutral-300 dark:border-neutral-400 px-2 py-3">
            <span className="col-span-1">Khách:</span>
            <p className="col-span-3">Bảo</p>
          </div>

          <div className="text-sm grid grid-cols-4 border-b border-neutral-300 dark:border-neutral-400 px-2 py-3">
            <span className="col-span-1">Thu ngân:</span>
            <p className="col-span-3">Admin</p>
          </div>

          <div className="text-sm grid grid-cols-4 px-2 py-3">
            <span className="col-span-1">Sử dụng:</span>
            <p className="col-span-3">21:02 - 22:17</p>
          </div>
        </div>

        <div className="mt-4">
          <table className="w-full border-collapse border border-neutral-400 text-center">
            <thead>
              <tr className="bg-neutral-200 dark:bg-neutral-800 text-sm">
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  Mặt hàng
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  SL
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  ĐVT
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  Đơn giá
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  Thành tiền
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  Bàn
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  4
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  Giờ
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  $5.76
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  $5.76
                </td>
              </tr>
              <tr className="text-sm">
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  Bia
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  4
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  $3.76
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  $3.76
                </td>
                <td className="px-4 py-2 border border-neutral-300 dark:border-neutral-400">
                  $3.76
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="mt-4 flex items-center justify-center gap-2 w-full py-1.5 rounded-md border border-neutral-300 dark:border-neutral-400">
          <IoAdd className="text-lg" />
          <span>Thêm mặt hàng</span>
        </button>

        <div className="mt-3 border border-neutral-300 dark:border-neutral-400 rounded-md px-3 py-1.5">
          <div className="flex justify-between w-full">
            <span className="text-sm">Tạm tính</span>
            <span className="text-sm">$14,56</span>
          </div>

          <div className="mt-1 flex justify-between w-full">
            <span className="text-sm">Thuế</span>
            <span className="text-sm">$1,24</span>
          </div>

          <div className="mt-1 flex justify-between w-full border-b border-neutral-300 dark:border-neutral-400 pb-2">
            <span className="text-sm">Giảm giá</span>
            <span className="text-sm text-red-500">-$0,28</span>
          </div>

          <div className="mt-1.5 flex justify-between w-full">
            <span className="font-medium">Tổng cộng</span>
            <span className="font-medium">$13,87</span>
          </div>
        </div>

        <div className="flex gap-3 mt-5 pb-4">
          <button className="bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 flex items-center justify-center gap-1.5 w-full py-2 rounded-lg">
            <LiaDownloadSolid className="text-lg" />
            <span className="text-sm">Tải xuống hóa đơn</span>
          </button>

          <button className="bg-teal-400 w-full py-2 rounded-lg">
            <span className="text-sm text-black font-medium">Thanh toán</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillModal;
