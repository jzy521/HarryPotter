import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav } from './headerNav';
import cover1 from '../asset/img/bookcover/HP_hc_new_1.jpeg';
import cover2 from '../asset/img/bookcover/HP_hc_new_2.jpeg';
import cover3 from '../asset/img/bookcover/HP_hc_new_3.jpeg';
import cover4 from '../asset/img/bookcover/HP_hc_new_4.jpeg';
import cover5 from '../asset/img/bookcover/HP_hc_new_5.jpeg';
import cover6 from '../asset/img/bookcover/HP_hc_new_6.jpeg';
import cover7 from '../asset/img/bookcover/HP_hc_new_7.jpeg';
export const Home = () => {
  console.log('home !!!! ');
  return (
    <div className="App flex-container">
      <div>
        {/* Block holding header */}
        <div className="header2">
          {/* block holding wbsite name */}

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
        </div>
        <HeaderNav />
        <div className="whatWeDo">
          <h1 className="whatWeDotext">What We Do</h1>
        </div>
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
      {/* block holding footer */}
      <div className="gryffindor"></div>
    </div> 
  );
}

export default Home;
