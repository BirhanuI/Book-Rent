import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

const OwnerTable = () => {
  const list = [
    {
      no: 1,
      Author: "Harry",
      owner: "Birhanu N",
      avatar: "",
      Catagory: "rented",
      BookName:'Derto Gada',
      status: "active",
    },
  ];
  const data = { nodes: list };

  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
        color: lightGray;
        
      `,
      Row: `color:black;
      height:30px`,
    },
  ]);

  const COLUMNS = [
    { label: "No.", renderCell: (item) => item.no },
    { label: "Book No.", renderCell: (item) => item.book_no },
    {
      label: "Owner",
      renderCell: (item) => item.owner,
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
            <div className="w-4 h-4 rounded-full bg-blue-500" /> free
          </div>
        ),
    },
    {
      label: "Price",
      renderCell: (item) => item.price,
    },
  ];

  return (
    <div className="bg-white p-10">
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
      <CompactTable columns={COLUMNS} data={data} theme={theme} />
    </div>
  );
};

export default OwnerTable;
