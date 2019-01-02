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
     <div className="App flex-container">
           <img src={cover1}  />
        
       </div>
      
    </div>
  )
};

export default Characters;