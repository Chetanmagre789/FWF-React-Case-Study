import React, { Component } from 'react';

class Button extends Component {

    render(props){
        return(
            <input
            className="button"
            type="button"
            onClick={this.props.handleClick}
            value={this.props.label}
          />
        );
    }

}

export default Button;