import React from "react";
import { Link } from 'react-router-dom';
export const HeaderNav = (props) => {
  return (
    <div>
         <div className="header">         
          {/* categories */}
            <div><h2 className="TitleDescription">
              Characters
            </h2>
            </div>
            <div>
            <h2 className="TitleDescription">
              Theories
            </h2>
            </div>
            <div>
            <h2 className="TitleDescription">
              Fanfictions
            </h2>
            </div>
            <div>
            <h2 className="TitleDescription">
              Books
            </h2>
            </div>
            <div>
            <h2 className="TitleDescription">
              About The Creators
            </h2>
            </div>
            {/* This part is wrong. Change it to be correct if you can */}
            {/* <div className="TitleDescription profile">
              <h2>Profile goes here</h2>
            </div> */}
            
      </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/harrypotter">harrypotter</Link>
            </li>
            <li>
              <Link to="/characters">characters</Link>
            </li>
            <li>
                <Link to="/theories">Theories</Link>
            </li>
          </ul>
      
    </div>
  )
};

export default HeaderNav;