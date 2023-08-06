import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const labels = [ "2017", "2018", "2019", "2020", "2021", "2022"]


export const data = {
    labels,
    datasets: [
        {
            label: 'react',
            data: [32, 42, 51, 60, 51, 95],
            backgroundColor:"#2196f3",
            borderColor: "#2196f3",
        },
        {
            label: 'angular',
            data: [37, 42, 41, 37, 31, 44],
            backgroundColor:"#f44236",
            borderColor: "#f44236", 
        },
        {
            label: 'vue',
            data: [60, 54, 54, 28, 27, 49],
            backgroundColor:"#ffca29",
            borderColor: "#ffca29", 
        }
    ]

    
}
const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'bottom', // Adjust the position of the legend based on your preference
      },
    },
  };

export default function ChartJsExample() {
  return (
    <div style={{height:300, width:500}}>
        <Line options={options} data={data}/>
      
    </div>
  )
}
