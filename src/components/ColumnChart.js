import React, {useState} from 'react';
import Chart from 'react-apexcharts';
import {LeftChart} from "./Home.style"
const BarCharts=()=> {
    const [options, setObjects ] = useState({
        chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
          }
    });
    const [series, setSeries]=useState([{
        name: 'series-1',
        data: [20, 40, 10, 50, 45, 90, 60, 30, 40],

    }])

      return (
          <LeftChart>
              <span>Racer</span>
               <Chart options={options} series={series} type="bar" width={400} height={300} />
          </LeftChart>
      )
  }
  export default BarCharts;