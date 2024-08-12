import Header from "../../components/adminHeader";
import Sidebar from "../../components/sidebar";
import BookStatusTable from "../AdminDashboard/bookStatusTable";
import OwnerTable from "./ownerTable";

const AdminBooks = () => {
  return (
    <div className="flex p-3 bg-[#F0F2FF] gap-5">
      <Sidebar />
      <div className="w-full flex flex-col gap-5">
        <Header title={"Books"} />
        <OwnerTable />
      </div>
    </div>
  );
};

export default AdminBooks;
