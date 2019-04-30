import React, { memo } from 'react';
import {Line} from 'react-chartjs-2';
import Loading from '../Loading/Loading';
import './StockGraph.css';


const StockGraph = ({timeSeries}) => {
  let graphBody = null;


  if (timeSeries === null) {
   graphBody = <Loading/>;
} else {
  let options = {
        title: {
          display: false,
          text: `Today's Prices`
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Time (Eastern Time)"
              },
              ticks: {
                fontColor: "white",
                fontSize: 15,
                maxTicksLimit: 40
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Price"
                            },
              ticks: {
                fontColor: "white",
                fontSize: 15,
                callback: function(value, index, values) {
                  return `$${value}`
                }
              }
            }
          ]
        },
        maintainAspectRatio: false,
        legend: true,
        plugins: {
            filler: {
                propagate: true
            }
      }
    },
  legend = {
          display: false,
          position: 'bottom'
      },
  data = {
        labels: timeSeries.map(data =>data.x),
        datasets: [
          {
            label: 'Price',
            data: timeSeries.map(data => data.y),
            borderColor: ['rgb(200, 72, 0)'],
            backgroundColor: 'rgba(200, 72, 0, 0.56)',
            fill: 'origin',
            borderWidth: 4,
            pointRadius: 2,
            pointStyle: 'line',
            pointBackgroundColor: 'rgb(200, 72, 0)',
            spanGaps:'true'
          }
        ]
      }
    graphBody = <Line data={data} options={options} legend={legend} redraw/>;
    }
  return (
      <section className="graph">
      {graphBody}
    </section>
  )
};

export default memo(StockGraph);
