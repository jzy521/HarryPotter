import React from "react";
import { Link } from 'react-router-dom';
import {HeaderNav} from './headerNav';
// import cover1 from '../asset/img/bookcover/HP_hc_new_1.jpeg';
// import cover2 from '../asset/img/bookcover/HP_hc_new_2.jpeg';
// import cover3 from '../asset/img/bookcover/HP_hc_new_3.jpeg';
// import cover4 from '../asset/img/bookcover/HP_hc_new_4.jpeg';
// import cover5 from '../asset/img/bookcover/HP_hc_new_5.jpeg';
// import cover6 from '../asset/img/bookcover/HP_hc_new_6.jpeg';
// import cover7 from '../asset/img/bookcover/HP_hc_new_7.jpeg';
export const Harrypotter = (props) => {
  let input;
console.log(props);
  return (
    <div>

        <HeaderNav/>
               {/* <div className="App flex-container">
           <img src={cover1}  />
            <img src={cover2} />
             <img src={cover3} />
             <img src={cover4} />
              <img src={cover5}  />
                 <img src={cover6}   />
                  <img src={cover7}   />
       </div> */}
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
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.fooTriggerUpdateState(input.value);
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
  
    </div>
  )
};

export default Harrypotter;
