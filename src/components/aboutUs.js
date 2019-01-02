import React from "react";
import {HeaderNav} from './headerNav';
import cover1 from '../asset/img/bookcover/HP_hc_new_1.jpeg';
export const AboutUs = (props) => {
console.log(props);
  return (
    <div>

    <HeaderNav/>
     <div className="App flex-container">
    {/* <img src="https://media.makeameme.org/created/my-goal-for-5bef4d.jpg"></img> */}
    <div className="aboutUs">
        <h1>Eric Zhou</h1>
    </div>
        
       </div>
      
    </div>
  )
};

export default AboutUs;