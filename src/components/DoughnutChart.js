import React from 'react';
import {Doughnut} from 'react-chartjs-2'
const DoughnutChart = ({chartData}) => {
    return (
        <div className='chart-box'>
            <Doughnut
                type='doughnut'
                data={chartData}
                height={400}
                width={600}
            />
        </div>
    );
};

export default DoughnutChart;
