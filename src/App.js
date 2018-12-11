/* eslint-disable */
import React, { Component } from 'react';
import cover1 from './asset/img/bookcover/HP_hc_new_1.jpeg';
import cover2 from './asset/img/bookcover/HP_hc_new_2.jpeg';
import cover3 from './asset/img/bookcover/HP_hc_new_3.jpeg';
import cover4 from './asset/img/bookcover/HP_hc_new_4.jpeg';
import cover5 from './asset/img/bookcover/HP_hc_new_5.jpeg';
import cover6 from './asset/img/bookcover/HP_hc_new_6.jpeg';
import cover7 from './asset/img/bookcover/HP_hc_new_7.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App flex-container">
           <img src={cover1}  />
            <img src={cover2} />
             <img src={cover3} />
              <img src={cover4} />
               <img src={cover5}  />
                <img src={cover6}   />
                 <img src={cover7}   />
      </div>
    );
  }
}

export default App;
