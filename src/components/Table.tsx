import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableBody,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { thisData } from "../data.js";
import $ from "jquery";

interface DataTableProps {
  data: any[];
}

// const rowNames = Object.keys(thisData[0]);
const rowNames = [
  "ID",
  "Name",
  "Wall_Width",
  "Unconnected Height",
  "Volume",
  "Area",
  "Length",
];

const DataTable = ({ data }: DataTableProps) => {
  const makeRow = (rowData) => {
    return (
      <TableRow>
        {rowNames.map((rowName) => (
          <TableCell>{rowData[rowName]}</TableCell>
        ))}
      </TableRow>
    );
  };

  return (
    <Grid item>
      <Typography>Table</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {rowNames.map((rowName) => (
                <TableCell>{rowName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{data.map((rowData) => makeRow(rowData))}</TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default DataTable;
