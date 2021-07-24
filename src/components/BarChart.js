import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const tickers = ["ABEV3", "ITUB3", "GRND3", "RADL3", "WEGE3"];
  const position = [22, 13, 27, 16, 24];
  const goals = [30, 11, 12, 20, 27];

  return (
    <div>
      <Bar
        data={{
          labels: tickers,
          datasets: [
            {
              label: "Position",
              data: position,
              backgroundColor: [
                "rgba(54, 162, 235, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
              ],
            },
            {
              label: "Goal",
              data: goals,
              backgroundColor: ["lightgrey"],
            },
          ],
        }}
        width={200}
        height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
