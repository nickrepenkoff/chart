import React from 'react';
import {Radar} from 'react-chartjs-2'
const RadarChart = ({chartData}) => {
    return (
        <div className='chart-box'>
            <Radar
                type='radar'
                data={chartData}
                height={400}
                width={600}
            />
        </div>
    );
};

export default RadarChart;