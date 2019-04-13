import React from 'react'

let value = 2

const getColor = value =>{
    if(value < 0) return 'red'
    if(value > 0) return 'green'
    return 'black'
}


const Counter = () =>{
    function handleIncreaseClick(value) {
        
        value += 1;
        console.log(value);
    }
    function handleDecreaseClick() {
        console.log('desc');
    }
    function handleRestClick() {
        console.log('reset');
    }

    return (
    <div>
        <div>
            Current value: <span style={{color: getColor(value)}}>{value}</span>
        </div>

        <button onClick={()=>handleIncreaseClick(value)}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
        <button onClick={handleRestClick}>Reset</button>
    </div>
    )
}

export default Counter