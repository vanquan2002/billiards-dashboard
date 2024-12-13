import { CgMenuLeftAlt } from "react-icons/cg";

const Header = () => {
  return (
    <div className="lg:hidden z-30 fixed left-0 top-0 w-full py-3 px-3 bg-black flex justify-between items-center border-b border-neutral-700">
      <img
        src="https://bidaa.transtechvietnam.com/transtech/panel.png"
        alt=""
        className="w-1/3"
      />
      <CgMenuLeftAlt className="text-3xl text-white" />
    </div>
  );
};

export default Header;
