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
    <div className="booksSide">
      <ul className="bookList">
        <div className="bookList"><li>Harry Potter and the Sorcerer's Stone</li></div>
        <div className="bookList"><li>Harry Potter and the Chamber of Secrets</li></div>
        <div className="bookList"><li>Harry Potter and the Prisoner of Azkaban</li></div>
        <div className="bookList"><li>Harry Potter and the Goblet of Fire</li></div>
        <div className="bookList"><li>Harry Potter and the Order of The Phoenix</li></div>
        <div className="bookList"><li>Harry Potter and the Half-Blood Prince</li></div>
        <div className="bookList"><li>Harry Potter and the Deathly Hallows</li></div>
        <div className="bookList"><li>Fantastic Beasts and Where to Find Them</li></div>
        <div className="bookList"><li>Fantastic Beasts and Where to Find Them: Crimes of Grindelwald</li></div>
      </ul>
    </div> 
       </div>
       <div className="endbar">
      <h1>dfhsdfhjsdfjdsfj</h1>
      </div>
    </div>
  )
};

export default AboutUs;