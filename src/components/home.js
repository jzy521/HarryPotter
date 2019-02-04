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
      <div className="topbar"></div>
      <h1>hi</h1>
        <HeaderNav />
    </div>
  );
}

export default Home;
