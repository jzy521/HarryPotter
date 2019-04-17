import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav } from './headerNav';
export const Home = () => {
  console.log('home !!!! ');
  return (
    <div className="App flex-container">
      <div className="topbar"></div>
      <ul>
        <Link to="/"><li><a class="active" href="/">Home</a></li></Link>
        <Link to="/characters"><li><a href="#news">Characters</a></li></Link>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      {/* <div className="whole">
        <div className="greeting">hi</div>
        <div className="main">
        </div>
      </div> */}
      <div className="first">
      <h1>Blah blah blah blah. I'm dumb text goes here</h1>
      </div>
      <div className="second">
      <h1>dfdhudhfshfuhfusdhfu text goes here. Lorem hdsifhsfdff</h1>
      </div>
      <div className="last">
      <h1>diadpsidfhdjfjjjdajdsajdsjffdvdsjvsdfhsdh tex goe shere</h1>
      </div>
      <div className="endbar">
      <h1>dfhsdfhjsdfjdsfj</h1>
      </div>
    </div>
  );
}

export default Home;
