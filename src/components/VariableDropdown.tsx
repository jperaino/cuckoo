import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { thisData } from "../data.js";
import $ from "jquery";

interface VariableDropdownProps {
  axis: "x" | "y";
  setVar: (string: string) => void;
  variable: string;
}

const VariableDropdown = ({
  axis,
  setVar,
  variable,
}: VariableDropdownProps) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    // console.log(Object.keys(thisData[0]));
    setOptions(Object.keys(thisData[0]).sort());
    setVar(options[0]);
  }, []);

  const handleChange = (e) => {
    setVar(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel
        id={`${axis}-simple-select-label`}
      >{`${axis}-axis variable`}</InputLabel>
      <Select
        labelId={`${axis}-simple-select-label`}
        id={`${axis}-simple-select-label`}
        value={variable}
        label={`${axis}-axis Variable`}
        onChange={handleChange}
      >
        {options.map((opt) => (
          <MenuItem value={opt}>{opt}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default VariableDropdown;
