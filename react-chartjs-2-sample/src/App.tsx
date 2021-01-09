import { FC } from "react";
import { Line } from "react-chartjs-2";
import Container from "@material-ui/core/Container";

const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));
const randInt = (n: number) => Math.floor(Math.random() * Math.floor(n));

const data = {
  labels: [
    "2021-12-31",
    "2021-01-01",
    "2021-01-02",
    "2021-01-03",
    "2021-01-04",
  ],
  datasets: [
    {
      type: "line",
      label: "データ",
      backgroundColor: "rgb(255, 102, 153)",
      borderColor: "rgb(255, 102, 153)",
      fill: false,
      data: range(5).map((_) => randInt(10)),
    },
    {
      type: "line",
      label: "実行",
      backgroundColor: "rgb(51, 204, 255)",
      borderColor: "rgb(51, 204, 255)",
      fill: false,
      data: range(5).map((_) => randInt(10)),
    },
    {
      type: "line",
      label: "インストール",
      backgroundColor: "rgb(0, 204, 102)",
      borderColor: "rgb(0, 204, 102)",
      fill: false,
      data: range(5).map((_) => randInt(10)),
    },
  ],
};

const App: FC = () => (
  <Container>
    <Line data={data} />
  </Container>
);

export default App;
