import React, { Component } from 'react';
import DisplayBox from './displayBox';
import KeyPad from './keyPad';

class Calculator extends Component {
    constructor(){
        super();
        this.state={
            expression:''
        }
    }

  handleClick=(event)=>{
    const value = event.target.value;
    const lastChar=this.state.expression.charAt(this.state.expression.length-1);
    switch (value) {
      case '=': { 
        const numbric=['1','2','3','4','5','6','7','8','9','0'];
        if(numbric.some(function(value3){return value3===lastChar})){
        const expression = eval(this.state.expression).toString();
        console.log(expression)
        this.setState({ expression });
        }
        break;
      }
      case 'AC':{
                this.setState({
                   expression:'' 
                });
                break;    
            }
                
      default: {
        const numbric=['1','2','3','4','5','6','7','8','9','0',''];
        var presentNum=numbric.some(function(value1){return value1===lastChar});
        if(presentNum || numbric.some(function(value3){return value3===value})){
        this.setState({ expression: this.state.expression += value});
        }
        break;
      }
    }
  }

  render() {
    return (
    <div>
      <div className="App">
          <DisplayBox expression={this.state.expression}/>
      </div>
      <KeyPad handleClick={this.handleClick}/>
    </div>
    );
  }
}

export default Calculator;