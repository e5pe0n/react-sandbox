import { FC, useState } from "react";
import {
  XYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Crosshair,
  RVNearestXData,
  VerticalBarSeriesPoint,
} from "react-vis";
import Container from "@material-ui/core/Container";

import "react-vis/dist/style.css";

const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));
const randInt = (n: number) => Math.floor(Math.random() * Math.floor(n));
const data1 = range(10).map((v, _) => ({ x: v, y: randInt(10) }));

const App: FC = () => {
  const DATA = [data1];

  const [crosshairValues, setCrossHairValues] = useState<
    VerticalBarSeriesPoint[]
  >([]);

  const onMouseLeave = () => {
    setCrossHairValues([]);
  };
  const onNearesX = (
    _: VerticalBarSeriesPoint,
    { index }: RVNearestXData<VerticalBarSeriesPoint>,
  ) => {
    setCrossHairValues(DATA.map((d) => d[index]));
  };

  const itemsFormat = (x: VerticalBarSeriesPoint[]) => [
    {
      title: "y",
      value: x[0].y,
    },
  ];

  const colorRange = ["red", "green", "blue"];

  return (
    <Container>
      <XYPlot height={300} width={300} onMouseLeave={onMouseLeave}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          data={data1}
          barWidth={0.8}
          color={colorRange[0]}
          onNearestX={onNearesX}
        />
        <Crosshair values={crosshairValues} itemsFormat={itemsFormat} />
      </XYPlot>
    </Container>
  );
};

export default App;
