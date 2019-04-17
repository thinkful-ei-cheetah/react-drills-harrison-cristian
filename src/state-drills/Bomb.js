import React from 'react'

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            count: 0
        }
    }

    componentDidMount() {
        const milliseconds = 1000

        this.interval = setInterval( () => {
            console.log('setInterval')
            this.setState({
                count: this.state.count + 1
            })
        } , milliseconds)    
    }

    render() {
        return (
            <div>
                {this.state.count>=8 && this.componentWillUnmount() && <p>Boom!!</p>} 
                {this.state.count<8 && this.state.count%2===0 && <p>Tick</p>}{this.state.count<8 && this.state.count%2!==0 && <p>Tock</p>}
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        return true;
    }
}

