import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "../assets/logo3.svg";
import { Button, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const firstLinkGroup = [
    {
      title: "Dashboard",
      icon: <Icon icon="akar-icons:dashboard" />,
      link: "/dashboard",
    },
    { title: "Books", icon: <Icon icon="ph:book" />, link: "/books" },
    {
      title: "Owners",
      icon: <Icon icon="mingcute:user-2-line" />,
      link: "/owners",
    },
    {
      title: "Other",
      icon: <Icon icon="lucide:diamond-plus" />,
      link: "/dashboard",
    },
  ];
  const secondLinkGroup = [
    {
      title: "Notification",
      icon: <Icon icon="lucide:bell" />,
      link: "/dashboard",
    },
    {
      title: "Setting",
      icon: <Icon icon="lucide:settings" />,
      link: "/dashboard",
    },
    {
      title: "Login as Book Owner",
      icon: <Icon icon="lucide:circle-user" />,
      link: "/dashboard",
    },
  ];
  return (
    <div className="h-screen min-w-80 bg-secondary rounded-2xl flex flex-col overflow-y-auto " style={{position:'sticky', top:'12px'}}>
      <div className="flex gap-5 items-center p-5 justify-start">
        <Icon
          icon="lucide:menu"
          className="text-white text-3xl cursor-pointer"
        />
        <Link
          to={"/dashboard"}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img src={logo} className="w-12" />
          <Typography variant="h6" color="secondary">
            Book Rent
          </Typography>
        </Link>
      </div>
      <div className="mx-5 mt-8">
        <Divider color="gray" className="" />
      </div>
      <div className="text-gray-200 flex flex-col gap-1 mx-5 mt-5">
        {firstLinkGroup.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex gap-5 items-center p-3 rounded-md hover:bg-primary"
          >
            <span className="text-2xl">{item.icon}</span>
            <Typography>{item.title}</Typography>
          </Link>
        ))}
        <div className="mt-8">
          <Divider color="gray" className="" />
        </div>
      </div>
      <div className="text-gray-200 flex flex-col gap-1 mx-5 mt-5">
        {secondLinkGroup.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex gap-5 items-center p-3 rounded-md hover:bg-primary"
          >
            <span className="text-2xl">{item.icon}</span>
            <Typography>{item.title}</Typography>
          </Link>
        ))}
        <div className="mt-8">
          <Divider color="gray" className="" />
        </div>
      </div>
      <div className="h-full flex items-end w-full p-5 ">
        <div className="w-full bg-gray-500 rounded-md p-3 text-white flex justify-center items-center gap-5 cursor-pointer hover:bg-gray-400 duration-150">
          <Icon icon="solar:logout-2-outline" className="text-3xl" />
          <Typography style={{fontSize:'1.5rem'}}>Logout</Typography>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
