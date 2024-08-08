import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

interface GaugeChartProps {
  value: number;
  valueMax: number;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ value, valueMax }) => {
  return (
    <Gauge
      value={value}
      startAngle={-110}
      endAngle={110}
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
          transform: "translate(0px, 0px)",
        },
      }}
      text={({ value }) => `${value} / ${valueMax}`}
    />
  );
};

export default GaugeChart;
