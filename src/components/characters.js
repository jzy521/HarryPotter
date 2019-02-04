import React from "react";
import { Link } from 'react-router-dom';
import {HeaderNav} from './headerNav';
import cover1 from '../asset/img/bookcover/HP_hc_new_1.jpeg';
export const Characters = (props) => {
  let input;
console.log(props);
  return (
    <div>
      <HeaderNav/>
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
    </div>
  )
};

export default Characters;