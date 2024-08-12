import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import {
  Avatar,
  Dialog,
  IconButton,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
const OwnerList = () => {
  const list = [
    {
      no: 1,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: false,
      email: "birhanu@example.com",
      phone: "0987654321",
    },
    {
      no: 2,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: false,
      email: "birhanu@example.com",
      phone: "0987654321",
    },
    {
      no: 3,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: false,
      email: "birhanu@example.com",
      phone: "0987654321",
    },
    {
      no: 4,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: true,
      email: "birhanu@example.com",
      phone: "0987654321",
    },

    {
      no: 5,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: true,
      email: "birhanu@example.com",
      phone: "0987654321",
    },

    {
      no: 6,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: true,
      phone: "0987654321",
      email: "birhanu@example.com",
    },

    {
      no: 7,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: true,
      email: "birhanu@example.com",
      phone: "0987654321",
    },

    {
      no: 6,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: true,
      email: "birhanu@example.com",
      phone: "0987654321",
    },

    {
      no: 7,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: true,
      email: "birhanu@example.com",
      phone: "0987654321",
    },

    {
      no: 6,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: true,
      email: "birhanu@example.com",
      phone: "0987654321",
    },

    {
      no: 7,
      owner: "Birhanu N",
      uploads: "15",
      avatar: "",
      location: "Addis Ababa",
      status: "active",
      isApproved: true,
      email: "birhanu@example.com",
      phone: "0987654321",
    },
  ];
  const data = { nodes: list };

  const theme = useTheme([
    {
      Table: `
              width:100%;
              grid-template-columns:  70px 1fr 150px 150px 1fr 100px 150px ;
              
              `,
      Header: `color:gray;
      `,
      HeaderCell: `
      text-align:center;
      font-weight:400;
              &:nth-of-type(2) {
                text-align:left;
        }
      `,
      BaseRow: `
                text-align:center;
            `,
    },
    getTheme({ highlightOnHover: true, verticalSpacing: 10 }),
  ]);

  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState();
  const COLUMNS = [
    { label: "No.2", renderCell: (item) => item.no },
    {
      label: "Owner",
      renderCell: (item) => (
        <div className="flex items-center gap-3">
          <Avatar alt="Birhanu" className="w-10 h-10" /> {item.owner}
        </div>
      ),
    },
    {
      label: "Upload",
      renderCell: (item) => <span>{item.uploads} Uploads</span>,
    },
    {
      label: "Location",
      renderCell: (item) => item.location,
    },

    {
      label: "Status",
      renderCell: (item) =>
        item.status == "rented" ? (
          <div className="flex items-center gap-2 justify-center">
            <div className="w-4 h-4 rounded-full bg-red-500" /> {item.status}
          </div>
        ) : (
          <div className="flex items-center gap-2 justify-center">
            <div className=" rounded-xl bg-green-100 text-green-600 font-bold gap-2 flex items-center px-3 justify-center ">
              <Icon icon="subway:tick" /> <span> Active</span>
              <span>
                <Switch
                  color="success"
                  value={4}
                  checked
                  size="small"
                  style={{ width: "30px" }}
                />
              </span>
            </div>
          </div>
        ),
    },
    {
      label: "Action",
      renderCell: (item) => (
        <div className="flex text-2xl justify-center gap-5">
          <span
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
              setDetails(item), console.log(item);
            }}
          >
            <Icon icon="carbon:view-filled" />
          </span>
          <span className="text-red-600">
            <Icon icon="ic:baseline-delete" />
          </span>
        </div>
      ),
    },
    {
      label: "",
      renderCell: (item) =>
        item.isApproved ? (
          <div className="bg-primary text-white p-1 px-2 rounded-md text-center">
            Approved
          </div>
        ) : (
          <div className="bg-gray-400 text-white p-1 px-2 rounded-md text-center">
            Approve
          </div>
        ),
    },
  ];
  return (
    <div className="bg-white px-10 shadow-md rounded-xl">
      <ShowOwnerDetail open={open} onClose={setOpen} data={details} />
      <div className="flex justify-end pt-5 pb-5 bg-white">
        <IconButton>
          <Icon icon="material-symbols:search" />
        </IconButton>
        <IconButton>
          <Icon icon="ion:filter" />
        </IconButton>
        <IconButton>
          <Icon icon="ic:baseline-view-column" />
        </IconButton>
        <IconButton>
          <Icon icon="fluent:row-triple-20-filled" />
        </IconButton>
        <IconButton>
          <Icon icon="heroicons:adjustments-horizontal-16-solid" />
        </IconButton>
      </div>
      <span className="font-bold text-lg">List of Owners</span>
      <div className="flex">
        <CompactTable columns={COLUMNS} data={data} theme={theme} />
      </div>
    </div>
  );
};
const ShowOwnerDetail = ({ open, onClose, data }) => {
  return (
    <Dialog open={open} onClose={() => onClose(!open)} data={data}>
      <div className="p-10 flex flex-col gap-5 w-[500px]">
        <TextField label="Name" value={data?.owner} />
        <TextField label="Email Address" value={data?.email} />
        <TextField label="Location" value={data?.location} />
        <TextField label="Phone Number" value={data?.phone} />
      </div>
    </Dialog>
  );
};

export default OwnerList;
