import React, {useState} from 'react'
import './App.css';
import Square from './Components/Square';
import { blue, red, white } from './constants';

function App() {

  let [currentCount, setCount ] = useState(0);

  let [arrCurrent, setArrCurrent] = useState([white,white,white,white,white,white,white,white,white]);

  function onSqClick (sqId, sqColor) {
      arrCurrent[sqId] = sqColor;
      setArrCurrent(arrCurrent);
      setCount(++currentCount);
      setTimeout(() => checkWin(red), 0);
      setTimeout(() => checkWin(blue), 0);
    }

    function checkWin(color) {
      console.log('5')
      let res = (arrCurrent[0] === color && arrCurrent[1] === color && arrCurrent[2] === color ) ||
      (arrCurrent[0] === color && arrCurrent[3] === color && arrCurrent[6] === color) ||
      (arrCurrent[0] === color && arrCurrent[4] === color && arrCurrent[8] === color) ||
      (arrCurrent[2] === color && arrCurrent[5] === color && arrCurrent[8] === color) ||
      (arrCurrent[2] === color && arrCurrent[4] === color && arrCurrent[6] === color) ||
      (arrCurrent[6] === color && arrCurrent[7] === color && arrCurrent[8] === color) ||
      (arrCurrent[3] === color && arrCurrent[4] === color && arrCurrent[5] === color) ||
      (arrCurrent[1] === color && arrCurrent[4] === color && arrCurrent[7] === color);

      if (res) {
        alert(`${color} победили!`);
      }
    }

    

  return (
    <div className="App" >
      <div className="wrapper"> 
        <div className='col'>
        <Square id="1" curCount={currentCount} onClick={(sqColor) => onSqClick(0, sqColor)}/>
        <Square id="2" curCount={currentCount} onClick={(sqColor) => onSqClick(1, sqColor)}/>
        <Square id="3" curCount={currentCount} onClick={(sqColor) => onSqClick(2, sqColor)}/>
        </div>
        <div className='col'>
        <Square id="4" curCount={currentCount} onClick={(sqColor) => onSqClick(3, sqColor)}/>
        <Square id="5" curCount={currentCount} onClick={(sqColor) => onSqClick(4, sqColor)}/>
        <Square id="6" curCount={currentCount} onClick={(sqColor) => onSqClick(5, sqColor)}/>
        </div>
        <div className='col'>
        <Square id="7" curCount={currentCount} onClick={(sqColor) => onSqClick(6, sqColor)}/>
        <Square id="8" curCount={currentCount} onClick={(sqColor) => onSqClick(7, sqColor)}/>
        <Square id="9" curCount={currentCount} onClick={(sqColor) => onSqClick(8, sqColor)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
