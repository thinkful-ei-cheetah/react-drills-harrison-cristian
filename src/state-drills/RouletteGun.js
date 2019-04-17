// import React from 'react';
// export default class RouletteGun extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             chamber:null,
//             spinningTheChamber:false
//         }
//     }
//     static defaultProp={
//         bulletInChamber:8
//     };
//     componentWillUnmount() {
//         clearTimeout(this.timeout)
//       }
//     render(){
//         const {bulletInChamber}=this.props;
//         const {chamber,spinningTheChamber}=this.state;
//         return(
//             <div>
//                 {spinningTheChamber && <p>spinning the chamber and pulling the trigger! ...</p>}
//                 {chamber=== bulletInChamber && <p>Bang!</p>}
//                 {chamber!==bulletInChamber && <p>You are Safe.</p>}
//                 <button onClick={()=>{
//                     this.random=Math.floor((Math.random() *8)+1)
//                     this.setState={
//                         spinningTheChamber:true
//                     }
//                     this.timeout= setTimeout(()=>{
//                         this.setState={
//                             chamber:this.random,
//                             spinningTheChamber:false
//                         }
//                     },2000);
                    
//                 }}>Pull the Trigger!</button>

//             </div>
//         )
//     }

// };
import React from 'react';
export default class RouletteGun extends React.Component {
    static defaultProps = {
      bulletInChamber: 8
    };
  
    state = {
      chamber: null,
      spinningTheChamber: false,
    };
  
    componentWillUnmount() {
      clearTimeout(this.timeout)
    }
  
    handleClick = () => {
      this.setState({
        spinningTheChamber: true,
      })
      this.timeout = setTimeout(() => {
        const randomChamber = Math.ceil(Math.random() * 8)
  
        this.setState({
          chamber: randomChamber,
          spinningTheChamber: false,
        })
      }, 2000)
    }
  
    renderDisplay() {
      const { chamber, spinningTheChamber } = this.state
      const { bulletInChamber } = this.props
      if (spinningTheChamber) {
        return 'spinning the chamber and pulling the trigger! ...'
      } else if (chamber === bulletInChamber) {
        return 'BANG!!!!!'
      } else {
        return 'you\'re safe!'
      }
    }
  
    render() {
      return (
        <div className='RouletteGun'>
          <p>{this.renderDisplay()}</p>
          <button onClick={this.handleClick}>
            Pull the trigger!
          </button>
        </div>
      )
    }
  }
  