import React from 'react';
import { Link } from 'react-router-dom';
import cover1 from '../asset/img/bookcover/HP_hc_new_1.jpeg';
import cover2 from '../asset/img/bookcover/HP_hc_new_2.jpeg';
import cover3 from '../asset/img/bookcover/HP_hc_new_3.jpeg';
import cover4 from '../asset/img/bookcover/HP_hc_new_4.jpeg';
import cover5 from '../asset/img/bookcover/HP_hc_new_5.jpeg';
import cover6 from '../asset/img/bookcover/HP_hc_new_6.jpeg';
import cover7 from '../asset/img/bookcover/HP_hc_new_7.jpeg';
export const Home = () =>{
  console.log('home !!!! ');
  return (
    <div className="App flex-container">
       <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/harrypotter">harrypotter</Link>
            </li>
           
          </ul>

     <div>
      {/* Block holding header */}
      <div className="header2">
      {/* block holding wbsite name */}
        <div className="header2">
          <h1>Website Name</h1>
        </div>
        {/* block holding description */}
        <div className="special">
          <h3>A HARRY POTTER DATABASE. DISCUSS, THINK AND CHANGE
          </h3>
        </div>
      </div>
      {/* block holding nav(another header) */}
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
            <div className="TitleDescription profile">
              <h2>Profile goes here</h2>
            </div>
            
      </div>
      {/* block holding section title */}
      <div className="whatWeDo">
      <h1 className="whatWeDotext">What We Do</h1>
      </div>
      {/* block holding mainArticle leftBorder rightBorder */}
      <div className="flexing">
      <div className="leftBorder"></div>
      <div className="mainArticle">
      <h1 className="headingHome">
      Statement goes here
      </h1>
      <h3>Explanation goes here</h3>
      <h3>Phone #</h3>
      <h3>Email</h3>
      </div>
      <div className="rightBorder">
       </div>
      </div>
      {/* block holding footer */}
      <div className="gryffindor"></div>
      </div> 
      
    <img src={cover1} alt="">
    </img>
    <img src={cover2} alt=""/>
    <img src={cover3} alt=""/>
    <img src={cover4} alt=""/>
    <img src={cover5} alt=""/>
    <img src={cover6} alt=""/>
    <img src={cover7} alt=""/>
  </div>
  );
} 

export default Home;
