import React, {useRef, useState} from 'react';
import BarChart from "./components/BarChart";
import {ChartData} from "./Data";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import DoughnutChart from "./components/DoughnutChart";
import RadarChart from "./components/RadarChart";
import './app.css'

const App = () => {
    //states
    const [data, setData] = useState({
        labels: ChartData.map(label => label.month),
        datasets: [{
            label: 'Months',
            data: ChartData.map(label => label.salary),
            backgroundColor: ["red", "blue", "green", "orange", "pink"],
            borderColor: "black",
            borderWidth: 1,
        }]
    });
    const [options] = useState({
        maintainAspectRatio: false
    })
    const [arrX, setArrX] = useState([]);
    const [arrY, setArrY] = useState([]);
    const [toggleChart, setToggleChart] = useState(false);
    const [value, setValue] = useState("bar");
    const xAxisInputRef = useRef(null)
    const yAxisInputRef = useRef(null)

    //chart displays
    let display
    switch (value) {
        case 'bar':
            display = <BarChart chartData={data} options={options}/>
            break
        case 'line':
            display = <LineChart chartData={data}/>
            break
        case 'pie':
            display = <PieChart chartData={data}/>
            break
        case 'doughnut':
            display = <DoughnutChart chartData={data}/>
            break
        case 'radar':
            display = <RadarChart chartData={data}/>
            break
        default:
            display = <BarChart chartData={data} />
            break
    }
    //functions
    const getValueOfX = () => {
        let value = xAxisInputRef.current.value
        setArrX(value.split(', ').map(val => val))
    }
    const getValueOfY = () => {
        let value = yAxisInputRef.current.value
        setArrY(value.split(', ').map(val => val))
    }

    const xAxisDataChanger = () => {
        const randomColors = updateColor()
        const copyObj = {...data.datasets[0], backgroundColor: [...randomColors]}
        if(arrX.length > 0){
            setData(
                {
                    ...data,
                    labels: arrX,
                    datasets: [{...copyObj}]
                }
            )
        }else {
            return alert('Type in data, then click the button!')
        }
    }
    const yAxisDataChanger = () => {
        const randomColors = updateColor()
        const copyObj = {...data.datasets[0], data: arrY, backgroundColor: [...randomColors]}
        if(arrY.length > 0){
            setData(
                {
                    ...data,
                    datasets: [{...copyObj}]
                }
            )
        }else{
            return alert('Type in data, then click the button!')
        }
    }
    const onValueChange = (event) => {
        setValue(event.target.value)
        setToggleChart(!toggleChart)
    }
    function generateRandomColor(){
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6);
        return `#${randColor.toUpperCase()}`
    }
    const updateColor = () => {
        return data?.labels.map(() => {
            let randColor
            randColor = generateRandomColor()
            return randColor
        })
    }

    return (
        <div  className='main-content'>
          <div className='chart'>
              <label  className='axis-labels'>
                  X axis labels:
                  <input
                      ref={xAxisInputRef}
                      style={{width: '100%'}}
                      onChange={getValueOfX}
                  />
              </label>
              <button
                  onClick={xAxisDataChanger}
                  className='axis-btns'
              >
                  Change X axis data
              </button>
              <label className='axis-labels'>
                  Y axis labels:
                  <input
                      ref={yAxisInputRef}
                      onChange={getValueOfY}
                      style={{width: '100%'}}
                  />
              </label>
              <button
                  onClick={yAxisDataChanger}
                  className='axis-btns'
              >
                  Change y axis data
              </button>
          {
            display
          }
          </div>
            <div className='chart-buttons'>
                <div className="radio" >
                    <label>
                        <input
                            type="radio"
                            value="bar"
                            onChange={onValueChange}
                            checked={value === "bar"}
                        />
                        Bar Chart
                    </label>
                </div>
                <div className="radio" >
                    <label>
                        <input
                            type="radio"
                            value="line"
                            onChange={onValueChange}
                            checked={value === "line"}
                        />
                        Line Chart
                    </label>
                </div><
                div className="radio" >
                    <label>
                        <input
                            type="radio"
                            value="pie"
                            onChange={onValueChange}
                            checked={value === "pie"}
                        />
                        Pie Chart
                    </label>
                </div>
                <div className="radio" >
                    <label>
                        <input
                            type="radio"
                            value="doughnut"
                            onChange={onValueChange}
                            checked={value === "doughnut"}
                        />
                        Doughnut Chart
                    </label>
                </div>
                <div className="radio" >
                    <label>
                        <input
                            type="radio"
                            value="radar"
                            onChange={onValueChange}
                            checked={value === "radar"}
                        />
                        Radar Chart
                    </label>
                </div>
            </div>
        </div>
    );
};

export default App;
