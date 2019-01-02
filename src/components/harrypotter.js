import React from "react";
import { Link } from 'react-router-dom';
import {HeaderNav} from './headerNav';

export class Harrypotter extends React.Component{
  constructor(props) {
    super(props);
    console.log(props);
  }
  render(){
    let input;
    console.log('rrrr ggg : '+JSON.stringify(this.props));
    return (
      <div>
        <HeaderNav/>
  
        <div className="App flex-container">
           <div>id : {this.props.id} ,</div>
           <br/>
           <div> text : {this.props.text}</div>
        </div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.add(input.value);
          input.value = ''
        }}>
          <input ref={node => input = node} />
          <button type="submit">
            Add Todo
          </button>
        </form>
         
      </div>
    )
}}

export default Harrypotter;