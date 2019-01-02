import React from "react";
import { Link } from 'react-router-dom';
export const HeaderNav = (props) => {
  return (
    <div>
         <div className="header">         
          {/* categories */}
            <div><h2 className="TitleDescription">
                <Link to="/">Home</Link>
            </h2>
            </div>
            <div><h2 className="TitleDescription">
                <Link to="/characters">Characters</Link>
            </h2>
            </div>
            <div>
            <h2 className="TitleDescription">
                <Link to="/theories">Theories</Link>
            </h2>
            </div>
            <div>
            <h2 className="TitleDescription">
              Fanfictions
            </h2>
            </div>
            <div>
            <h2 className="TitleDescription">
                <Link to="/harrypotter">Books</Link>
            </h2>
            </div>
            <div>
            <h2 className="TitleDescription">
              <Link to="/aboutUs">About The Creators</Link>
            </h2>
            </div>
            {/* This part is wrong. Change it to be correct if you can */}
            {/* <div className="TitleDescription profile">
              <h2>Profile goes here</h2>
            </div> */}
            
      </div>
    </div>
  )
};

export default HeaderNav;