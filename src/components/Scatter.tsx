import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { thisData } from "../data.js";
import $ from "jquery";
import VariableDropdown from "./VariableDropdown";
import DataTable from "./Table";

const Scatter = () => {
  const [formattedData, setFormattedData] = useState<any>([]);
  const [selectedIds, setSelectedIds] = useState<string[] | number[]>([]);
  const [selectedData, setSelectedData] = useState<any[]>([]);

  const [xVar, setXVar] = useState<string>("Area");
  const [yVar, setYVar] = useState<string>("Volume");

  useEffect(() => {
    parseData();
  }, []);

  useEffect(() => {
    console.log(thisData);
    var tempSelectedData = [];
    selectedIds.forEach((id) => {
      console.log(thisData.find((d) => d.ID === id));
      tempSelectedData.push(thisData.find((d) => d.ID === id));
    });

    setSelectedData(tempSelectedData);
  }, [selectedIds]);

  const getIdsFromSelection = (inputData: any): any[] => {
    const { points } = inputData;
    var ids: any[] = [];

    for (let i = 0; i < points.length; i++) {
      const { data, pointIndex } = points[i];
      const { labels } = data;

      const label = labels[pointIndex];
      ids.push(label);
    }

    console.log(ids);
    return ids;
  };

  const sendIdsToFlask = (ids: any[]) => {
    console.log("Sending ids to flask");

    // Convert to JSON
    const json = JSON.stringify({ ids: ids });

    // Transmit
    $.ajax({
      type: "POST",
      url: "localhost:5000/storeSelected",
      data: json,
    });
  };

  const handleSelection = (inputData: any) => {
    const ids = getIdsFromSelection(inputData);
    setSelectedIds(ids);
    sendIdsToFlask(ids);
  };

  const onClick = (inputData: any) => {
    handleSelection(inputData);
  };

  const onSelected = (inputData: any) => {
    handleSelection(inputData);
  };

  useEffect(() => {
    parseData();
  }, [xVar, yVar]);

  const parseData = () => {
    var xData: number[] = [];
    var yData: number[] = [];
    var labelsData: number[] = [];

    thisData.forEach((row) => {
      xData.push(row[xVar]);
      yData.push(row[yVar]);
      labelsData.push(row.ID);
    });

    setFormattedData([
      {
        x: xData,
        y: yData,
        labels: labelsData,
        text: labelsData,
        type: "scatter",
        mode: "markers",
        marker: { color: "red" },
      },
    ]);
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h3">Cuckoo</Typography>
      </Grid>
      <Grid item></Grid>
      <Grid item container spacing={2}>
        <Grid item>
          <VariableDropdown axis="x" setVar={setXVar} variable={xVar} />
        </Grid>
        <Grid item>
          <VariableDropdown axis="y" setVar={setYVar} variable={yVar} />
        </Grid>
      </Grid>
      <Grid item>
        <Plot
          data={formattedData}
          layout={{ width: 1000, height: 600 }}
          onClick={onClick}
          onSelected={onSelected}
        />
      </Grid>
      <Grid item>
        <DataTable data={selectedData} />
      </Grid>
    </Grid>
  );
};

export default Scatter;
