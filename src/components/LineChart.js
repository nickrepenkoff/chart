import React from 'react';
import {Line} from 'react-chartjs-2'
const LineChart = ({chartData}) => {
    return (
        <div className='chart-box'>
            <Line
                type='line'
                data={chartData}
                height={400}
                width={600}
            />
        </div>
    );
};

export default LineChart;
