import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import {thisData} from "../data.js"

const Scatter = () => {
  
  const [formattedData, setFormattedData] = useState<any>([])
  const [selectedId, setSelectedId] = useState<string | number>('none')
 
  useEffect(() => {
    parseData()
  }, [])

const onClick = (inputData: any) => {
  const { points } = inputData;
  const { data, pointNumber, pointIndex } = points[0];
  const { x, y, labels } = data;

  const selectedX = x[pointIndex];
  const selectedY = y[pointIndex];
  const selectedLabel = labels[pointIndex];

  console.log(`Revit ID: ${selectedLabel}`);
  setSelectedId(selectedLabel)
};
  
  const parseData = () => {
    var xData: number[] = []
    var yData: number[] = []
    var labelsData: number[] = []

    thisData.forEach((row) => {
      xData.push(row.Area);
      yData.push(row.Volume);
      labelsData.push(row.ID);
    })
  
    setFormattedData(
      [
        {
          x: xData, 
          y: yData,
          labels: labelsData, 
          type: "scatter",
          mode: "markers",
          marker: { color: "red" }
        }
      ]
    )
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h3">Walls</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">{`Selected wall id: ${selectedId}`}</Typography>
      </Grid>
      <Grid item>
        <Plot
          data={formattedData}
          layout={{ width: 800, height: 800 }}
          onClick={onClick}
        />
      </Grid>
    </Grid>
  );
};

export default Scatter;
