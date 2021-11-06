import { Grid, Typography } from "@mui/material";
import React from "react";
import Plot from "react-plotly.js";

const onClick = (inputData: any) => {
  //   console.log(data);
  //   console.log(data?.points);
  const { points } = inputData;
  const { data, pointNumber, pointIndex } = points[0];
  const { x, y, labels } = data;

  const selectedX = x[pointIndex];
  const selectedY = y[pointIndex];
  const selectedLabel = labels[pointIndex];

  console.log(selectedX, selectedY, selectedLabel);
};

const Scatter = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h3">Walls</Typography>
      </Grid>
      <Grid item>
        <Plot
          data={[
            {
              x: [1, 2, 3, 8, 9, 1, 4, 1, 5, 5, 7, 3],
              y: [2, 6, 3, 1, 2, 4, 5, 2, 4, 2, 2, 3],
              labels: [
                "a",
                "b",
                "c",
                "a",
                "b",
                "c",
                "a",
                "b",
                "c",
                "a",
                "b",
                "c",
              ],
              type: "scatter",
              mode: "markers",
              marker: { color: "red" },
            },
            // { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{ width: 800, height: 800 }}
          onClick={onClick}
          //   onSelected={(data) => console.log(data)}
        />
      </Grid>
    </Grid>
  );
};

export default Scatter;
