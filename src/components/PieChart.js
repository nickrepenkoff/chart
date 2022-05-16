import React from 'react';
import {Pie} from 'react-chartjs-2'
const PieChart = ({chartData}) => {
    return (
        <div className='chart-box'>
            <Pie
                type='pie'
                data={chartData}
                height={400}
                width={600}
            />
        </div>
    );
};

export default PieChart;
