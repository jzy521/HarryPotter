import React from "react";
import { Link } from 'react-router-dom';
import {HeaderNav} from './headerNav';
import cover1 from '../asset/img/bookcover/HP_hc_new_1.jpeg';
export const Characters = (props) => {
  let input;
console.log(props);
  return (
    <div>
      <ul>
        <li><a class="active" href="/">Home</a></li>
        <Link to="/character"><li><a href="#news">Character</a></li></Link>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <table className="ch">
        <th>
          <a href="harry.js">
          <img className="harry" src="https://tinyurl.com/y9ssao3l"></img>
          </a>
          <a href="harry.js">
          <img className="harry" src="https://tinyurl.com/y9ssao3l"></img>
          </a>
          <a href="harry.js">
          <img c="harry" src="https://tinyurl.com/y9ssao3l"></img>
          </a>
        </th>
      </table>
      <div className="endbar">
      <h1>dfhsdfhjsdfjdsfj</h1>
      </div>
    </div>
    
  )
};

export default Characters;