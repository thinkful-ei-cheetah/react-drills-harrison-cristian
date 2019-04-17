import React from 'react'
export default class HelloWorld extends React.Component{
    state={
        who:null
    };
    handleButtonClick = (prop)=>{
        this.setState({
            who: prop
        })
    }
    render(){
    return (
        <div>
            <p> Hello {this.state.who}!
            </p>
            <button onClick={()=>this.handleButtonClick('world')}>
            world
            </button>
            <button onClick={()=>this.handleButtonClick('friend')}>
            friend            
            </button>
            <button onClick={()=>this.handleButtonClick('react')}>
            react
            </button>
        </div>
    )}
}
