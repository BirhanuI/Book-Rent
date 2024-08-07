import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

const BookStatusTable = () => {
  const list = [
    {
      no: 1,
      book_no: "5235",
      owner: "Birhanu N",
      avatar: "",
      status: "rented",
      price: "500",
    },
    {
      no: 2,
      book_no: "5235",
      owner: "Birhanu N",
      avatar: "",
      status: "free",
      price: "0.00",
    },
    {
      no: 1,
      book_no: "5235",
      owner: "Birhanu N",
      avatar: "",
      status: "rented",
      price: "500",
    },
    {
      no: 2,
      book_no: "5235",
      owner: "Birhanu N",
      avatar: "",
      status: "free",
      price: "0.00",
    },
    {
      no: 1,
      book_no: "5235",
      owner: "Birhanu N",
      avatar: "",
      status: "rented",
      price: "500",
    },
    {
      no: 2,
      book_no: "5235",
      owner: "Birhanu N",
      avatar: "",
      status: "free",
      price: "0.00",
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
    <>
      <div className="flex justify-end pt-10 pb-5">
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
    </>
  );
};

export default BookStatusTable;
