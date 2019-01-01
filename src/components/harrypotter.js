import React from "react";
import { Link } from 'react-router-dom';
import cover1 from '../asset/img/bookcover/HP_hc_new_1.jpeg';
import cover2 from '../asset/img/bookcover/HP_hc_new_2.jpeg';
import cover3 from '../asset/img/bookcover/HP_hc_new_3.jpeg';
import cover4 from '../asset/img/bookcover/HP_hc_new_4.jpeg';
import cover5 from '../asset/img/bookcover/HP_hc_new_5.jpeg';
import cover6 from '../asset/img/bookcover/HP_hc_new_6.jpeg';
import cover7 from '../asset/img/bookcover/HP_hc_new_7.jpeg';
export const Harrypotter = (props) => {
  let input;
console.log(props);
  return (
    <div>
      <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/harrypotter">harrypotter</Link>
            </li>
           
          </ul>

               <div className="App flex-container">
           <img src={cover1}  />
            <img src={cover2} />
             <img src={cover3} />
             <img src={cover4} />
              <img src={cover5}  />
                 <img src={cover6}   />
                  <img src={cover7}   />
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
