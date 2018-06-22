import React, { Component } from 'react';
import DisplayBox from './displayBox';
import KeyPad from './keyPad';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      expression: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { value } = event.target;
    const { expression } = this.state;
    const lastChar = expression.charAt(expression.length - 1);
    switch (value) {
      case '=': {
        const numbric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        if (numbric.some(value3 => value3 === lastChar)) {
          const expression1 = eval(expression).toString();
          this.setState({ expression: expression1 });
        }
        break;
      }
      case 'AC': {
        this.setState({
          expression: '',
        });
        break;
      }

      default: {
        const numbric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ''];
        const presentNum = numbric.some(value1 => value1 === lastChar);
        if (presentNum || numbric.some(value3 => value3 === value)) {
          const expression2 = expression + value;
          this.setState({
            expression: expression2,
          });
        }
        break;
      }
    }
  }

  render() {
    const { expression } = this.state;
    return (
      <div>
        <div className="App">
          <DisplayBox expression={expression} />
        </div>
        <KeyPad handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
