import React from 'react'
import { Line } from "react-chartjs-2";



const LineChart = ({ chartData }) => {
    // console.log(chartData);

    const data = {
        labels: ['2020-01', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: 'Cases/week',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: 'y-axis-1',
            },
            {
                label: 'Deaths/week',
                data: [1, 2, 1, 1, 2, 2],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                yAxisID: 'y-axis-1',
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                },
            ],
        },
    }
    return (
        <>
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart