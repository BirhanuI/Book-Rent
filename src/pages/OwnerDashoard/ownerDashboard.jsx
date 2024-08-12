
import Header from "../../components/adminHeader";
import Sidebar from "../../components/sidebar";

const OwnerDashboard = () => {
    return  ( <div
        className="bg-[#F0F2FF] p-3  flex gap-5"
        style={{ position: "relative" }}
      >
        <Sidebar />
        <main className="w-full flex flex-col gap-5 ">
          <Header title={"Owners"} user='Owner'/>
          <div className="">
          </div>
        </main>
      </div> );
}
 
export default OwnerDashboard;