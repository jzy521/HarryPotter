import React from "react";
import { HeaderNav } from './headerNav';
import cover1 from '../asset/img/bookcover/HP_hc_new_1.jpeg';
export const Theories = (props) => {
  console.log(props);
  return (
    <div>
      <HeaderNav />
      <div className="App flex-container">
        <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/588/969/f2b.jpg"></img>
      </div>
    </div>
  )
};

export default Theories;