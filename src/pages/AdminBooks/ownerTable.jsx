import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { Avatar, IconButton, Switch, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

const OwnerTable = () => {
  const list = [
    {
      no: 1,
      author: "Harry",
      owner: "Birhanu N",
      avatar: "",
      category: "Fiction",
      book_name: "Derto Gada",
      status: "active",
    },
    {
      no: 1,
      author: "Harry",
      owner: "Birhanu N",
      avatar: "",
      category: "Fiction",
      book_name: "Derto Gada",
      status: "active",
    },
    {
      no: 1,
      author: "Harry",
      owner: "Birhanu N",
      avatar: "",
      category: "Fiction",
      book_name: "Derto Gada",
      status: "active",
    },
    {
      no: 1,
      author: "Harry",
      owner: "Birhanu N",
      avatar: "",
      category: "Fiction",
      book_name: "Derto Gada",
      status: "active",
    },
    {
      no: 1,
      author: "Harry",
      owner: "Birhanu N",
      avatar: "",
      category: "Fiction",
      book_name: "Derto Gada",
      status: "active",
    },
    {
      no: 1,
      author: "Harry",
      owner: "Birhanu N",
      avatar: "",
      category: "Fiction",
      book_name: "Derto Gada",
      status: "active",
    },
    {
      no: 1,
      author: "Harry",
      owner: "Birhanu N",
      avatar: "",
      category: "Fiction",
      book_name: "Derto Gada",
      status: "active",
    },
  ];
  const data = { nodes: list };

  const theme = useTheme([
    {
      Table: `
          --data-table-library_grid-template-columns:  70px repeat(5, minmax(100px, 1fr));
          
          margin: 16px 0px;
          `,
    },
    getTheme({ highlightOnHover: true, verticalSpacing: 10 }),
  ]);

  const COLUMNS = [
    { label: "No.", renderCell: (item) => item.no, width: "1rem" },
    { label: "Author", renderCell: (item) => item.author },
    {
      label: "Owner",
      renderCell: (item) => (
        <div className="flex items-center gap-3">
          <Avatar  alt="Birhanu" className="w-10 h-10" /> {item.owner}
        </div>
      ),
    },
    {
      label: "Category",
      renderCell: (item) => item.category,
    },

    {
      label: "Book Name",
      renderCell: (item) => item.book_name,
    },
    {
      label: "Status",
      renderCell: (item) =>
        item.status == "rented" ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500" /> {item.status}
          </div>
        ) : (
          <div className="flex items-center gap-2">
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
  ];

  return (
    <div className="bg-white p-10 shadow-md rounded-xl">
      <div className="flex justify-end pt-10 pb-5 bg-white">
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
      <Typography>Live Book Status</Typography>
      <div className="flex">
        <CompactTable columns={COLUMNS} data={data} theme={theme} />
      </div>
    </div>
  );
};

export default OwnerTable;
