import Sidebar from "../components/Sidebar";
import Contents from "./../components/tableComponents/Contents";

const TableScreen = () => {
  return (
    <div className="grid grid-cols-10">
      <Sidebar />
      <Contents />
    </div>
  );
};

export default TableScreen;
