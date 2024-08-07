import { Typography } from "@mui/material";

const Header = ({ title }) => {
  return (
    <Typography
      variant="h6"
      className="bg-white p-5 w-full rounded-xl shadow-sm text-xl text-gray-500"
    >
      <span className="font-bold text-gray-900">Admin</span>/
      <span className="font-thin">{title}</span>
    </Typography>
  );
};

export default Header;
