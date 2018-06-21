import React, { Component } from 'react';
import Button from './button';

const KeyPad =(props)=>{
    return(
        <div>
        <div className="App btn-group">
          <Button label={'1'} handleClick={props.handleClick}/>
          <Button label={'2'} handleClick={props.handleClick}/>
          <Button label={'3'} handleClick={props.handleClick}/>
          <Button label={'+'} handleClick={props.handleClick}/>
      </div>
      <div className="App btn-group">
           <Button label={'4'} handleClick={props.handleClick}/>
          <Button label={'5'} handleClick={props.handleClick}/>
          <Button label={'6'} handleClick={props.handleClick}/>
          <Button label={'-'} handleClick={props.handleClick}/>
      </div>
      <div className="App btn-group">
          <Button label={'7'} handleClick={props.handleClick}/>
          <Button label={'8'} handleClick={props.handleClick}/>
          <Button label={'9'} handleClick={props.handleClick}/>
          <Button label={'*'} handleClick={props.handleClick}/>
      </div>
      <div className="App btn-group">
          <Button label={'AC'} handleClick={props.handleClick}/>
          <Button label={'0'} handleClick={props.handleClick}/>
          <Button label={'%'} handleClick={props.handleClick}/>
          <Button label={'/'} handleClick={props.handleClick}/>
      </div>
      <div className="App btn-group">
      <Button label={'='} handleClick={props.handleClick}/>
      </div>
        </div>
    )
}

export default KeyPad;