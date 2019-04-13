import React from 'react'


const getColor = value =>{
    if(value < 0) return 'red'
    if(value > 0) return 'green'
    return 'black'
}

class ClassCounter extends React.Component {
    state = {
        value: 0,
        delta: 0
    }

    handleChangeValueClick = (delta) => {
        let newValue = this.state.value
        newValue += this.state.delta
        this.setState({value: newValue})
    }

    handleChangeDelta = (delta) => {
        let newValue = this.state.delta
        newValue += delta
        this.setState({delta: newValue})
    }

    render(){
        return (
        <div>
            <div>
                Current value: <span style={{color: getColor(this.state.value )}}>{this.state.value}</span>
            </div>
            <button onClick={()=>this.handleChangeValueClick()}>Update</button>

            <div>
                Delta: {this.state.delta}
            </div>
            <button onClick={()=>this.handleChangeDelta(1)}>Increase</button>
            <button onClick={()=>this.handleChangeDelta(-1)}>Decrease</button>

        </div>
        )
    }
}

export default ClassCounter