import React from "react";
import Plot from "react-plotly.js";
import logo from "./logo.svg";
import "./App.css";
import Scatter from "./components/Scatter";
import makeStyles from "@mui/styles/makeStyles";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: 30,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Scatter />
    </div>
    // <Plot
    //   data={[
    //     {
    //       x: [1, 2, 3],
    //       y: [2, 6, 3],
    //       type: "scatter",
    //       mode: "lines+markers",
    //       marker: { color: "red" },
    //     },
    //     { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
    //   ]}
    //   layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
    // />
  );
}

export default App;
