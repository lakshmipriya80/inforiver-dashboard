import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/Axis/xAxis";
import YAxis from "../components/Axis/yAxis";
import TextValues from "../components/DataValues/TextValues";

interface DataItem {
  name: string;
  value: number;
}

interface LineChartProps {
  data: DataItem[][];
  width: number;
  height: number;
  index: number; // Add index property here
}

const StackedLineChart: React.FC<LineChartProps> = ({
  data,
  width,
  height,
  index, // Receive index prop here
}) => {
  // Dimensions
  const margin = { top: 20, right: 30, bottom: 50, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Flatten the nested array of objects
  const flattenedData = data.reduce((acc, cur) => [...acc, ...cur], []);

  // Scales
  const xScale = scaleBand()
    .domain(flattenedData.map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.4);

  const yScale = scaleLinear()
    .domain([0, getMaxCumulativeSum(data)])
    .nice()
    .range([innerHeight, 0]);

  // Helper function to calculate maximum cumulative sum
  function getMaxCumulativeSum(data: DataItem[][]) {
    return Math.max(
      ...data[data.length - 1].map((d, i) =>
        data.reduce((acc, cur) => acc + cur[i].value, 0)
      )
    );
  }

  // Generate paths for lines for each dataset
  const paths = data.map((dataset) =>
    dataset.map(
      (d) => `${xScale(d.name)! + xScale.bandwidth() / 2} ${yScale(d.value)}`
    )
  );

  // Generate data labels
  const dataLabels = flattenedData.map((d) => ({
    x: xScale(d.name)! + xScale.bandwidth() / 2,
    y: yScale(d.value),
    label: d.value.toString(), // Adjust this as needed
  }));

  return (
    <g width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* X and Y Axes */}
        <XAxis
          innerHeight={innerHeight}
          data={flattenedData}
          xScale={xScale}
          index={index}
        />
        <YAxis margin={margin} width={width} yScale={yScale} />

        {/* Lines for each dataset */}
        {paths.map((path, i) => (
          <path
            key={i}
            d={`M ${path.join(" L ")}`}
            fill="none"
            stroke={i === 0 ? "blue" : "red"}
            strokeWidth={i === 0 ? 1 : 2}
          />
        ))}

        {/* Data labels */}
        {dataLabels.map((d, i) => (
          <TextValues
            key={i}
            x={d.x}
            y={d.y - 5} // Adjust this value to position labels properly
            value={d.label}
            xScale={xScale}
            yScale={yScale}
          />
        ))}
      </g>
    </g>
  );
};

export default StackedLineChart;
