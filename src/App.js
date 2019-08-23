import React, { Component } from 'react';

import './App.css';

// https://www.toptal.com/designers/subtlepatterns/page/49/
// https://pinup.com/
import tile from './img/cork-board.png';
import paper from './img/realistic-paper.jpg';
import staple from './img/staple.jpg';

class App extends Component {

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${tile})` }}>
        {/* Sticky note title */}
        <div className='sticky'>
          <p className='title'>Co-op Work Term Report</p>
          <p>By: Jason Ellul</p>
          <p className='sticky-date'>August 30th, 2019</p>
        </div>
        {/* <img className='paper' src={paper} /> */}
        {/* First page */}
        <div className='paper'>
          <div className='paper-content'>
            <p className='paper-writing title'>Co-op Work Term 2 - Full Stack Developer at the <a href='http://securcor.com' target='_blank' rel='noopener noreferrer'>Securcor Financial Group</a></p>
            <br />
            <p className='paper-writing'>If you go onto any University of Guelph department website, you will find a brief description of what they do at the University. Here is what we at CCS describe as our role within the school community:

"CCS provides core IT services to the greater campus community. These include internet connectivity, a campus wide integrated email and calendaring system, telephony infrastructure, software distribution, development of single sign-on technology, learning resources, and more."

With technology playing such a vital role in the work done by the campus community, CCS has a strict obligation to keep our services both functional and accessible. Some of the services managed by CCS include: campus-wide internet connectivity, tens of thousands of email accounts, phones and computers for university employees, and hundreds of various web applications and software used by the wide assortment of roles within the campus community.</p>

          </div>
        </div>
        {/* <img className='staple' src={staple} /> */}
        <div style={{ height: '100vh' }} />
      </div>
    );
  }

}

export default App;
