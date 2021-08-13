import React, {useState} from 'react';
import Chart from 'react-apexcharts';
import {AiOutlineUpCircle} from "react-icons/ai"
import {LeftChart, Rate, Part} from "./Home.style";
const BarCharts=()=> {
    const [options] = useState({
        chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
          }
    });
    const [series]=useState([{
        name: 'series-1',
        data: [20, 40, 10, 50, 45, 90, 60, 30, 40],

    }])

      return (
          <LeftChart>
              <div>
                <span>Racer</span>
                <select>
                    <option>This Year</option>
                    <option>Last Year</option>
                </select>
              </div>
              <div>
                  <Part>
                    <h4>48%</h4>
                    <Rate><AiOutlineUpCircle/> +12%</Rate>
                  </Part>
                    <Chart options={options} series={series} type="bar" width={400} height={300} />
              </div>
              
          </LeftChart>
      )
  }
  export default BarCharts;