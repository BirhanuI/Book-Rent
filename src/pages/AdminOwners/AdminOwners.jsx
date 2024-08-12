import Header from "../../components/adminHeader";
import Sidebar from "../../components/sidebar";
import OwnerList from "./OwnerList";

const AdminOwners = () => {
    return ( <div
        className="bg-[#F0F2FF] p-3  flex gap-5"
        style={{ position: "relative" }}
      >
        <Sidebar />
        <main className="w-full flex flex-col gap-5 ">
          <Header title={"Owners"} />
          <div className="">
            <OwnerList />
          </div>
        </main>
      </div> );
}
 
export default AdminOwners;