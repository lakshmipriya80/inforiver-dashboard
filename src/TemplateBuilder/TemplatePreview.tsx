import React, { useEffect, useRef, useState } from "react";
import useChartStore from "../store/zustand/Zustand";
import LineChart from "../ChartComponents/LineChart";
import ClusterLineChart from "../ChartComponents/ClusttereLine";
import { dataSets, lineData } from "../components/dataSets/ChartDatas";
import BarChart from "../ChartComponents/Bar";
import AreaChart from "../ChartComponents/AreaChart";
import StackedLineChart from "../ChartComponents/StackedLineChart";
import WaterfallChart from "../ChartComponents/WaterfallChart";
import LayoutGrid from "../components/layout/layoutGrid";

const rows = 2;
const columns = 2;

const componentIds: Record<string, React.FC<any>> = {
  "overlapped-column": BarChart,
  area: AreaChart,
  line: LineChart,
  "clustered-line": ClusterLineChart,
  "stacked-line": StackedLineChart,
  "waterfall": WaterfallChart
};

const TemplatePreview = () => {
  const activeChart = useChartStore((state: any) => state.activeChart);
  const SelectedComp = componentIds[activeChart];
  const finalData =
    activeChart === "clustered-line" || activeChart === "stacked-line"
      ? dataSets
      : lineData;
  const templateRef = useRef(null);
  const [previewHeight, setPreviewHeight] = useState();
  const [previewWidth, setPreviewWidth] = useState();
  const isChartActive = activeChart !== null;

  useEffect(() => {
    let calcHeight = (templateRef.current as any).clientHeight;
    let calcWidth = (templateRef.current as any).clientWidth;

    setPreviewHeight(calcHeight);
    setPreviewWidth(calcWidth);
  });

  return (
    <div
      ref={templateRef}
      className="template-preview"
      style={{ height: "100%", width: "100%" }}
    >
      {isChartActive && (
        <svg height={previewWidth} width={previewHeight}>
          {SelectedComp && (
            <SelectedComp
              data={finalData}
              height={previewWidth}
              width={previewHeight}
            />
          )}
        </svg>
      )}
      {!isChartActive && <LayoutGrid rows={rows} columns={columns} height={previewHeight} width={previewWidth}/>}
    </div>
  );
};

export default TemplatePreview;
