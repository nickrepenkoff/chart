import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const BarChart = ({chartData, options}) => {
    return (
    <div className='chart-box'>
            <Bar
                data={chartData}
                options={options}
                height={400}
                width={600}
                type='bar'
            />
        </div>
    )
}

export default BarChart