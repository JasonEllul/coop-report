import React, { Component } from 'react';

import './App.css';

// https://www.toptal.com/designers/subtlepatterns/page/49/
// https://pinup.com/
import tile from './img/cork-board.png';
import paper from './img/realistic-paper.jpg';
import staple from './img/staple.jpg';
import pin from './img/pin.png';
import coffee from './img/coffeestain.png';
// Stickers
import goku from './img/stickers/goku.png';
import supreme from './img/stickers/developer.png';

class App extends Component {

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${tile})` }}>
        <img className='sticker' style={{ width: 550, right: 0, top: 0, transform: 'rotate(-15deg)' }} src={supreme} />
        <img className='sticker' style={{ width: 450, left: -120, top: 600 }} src={goku} />

        {/* Sticky note title */}
        <div className='sticky'>
          <p className='title'>Co-op Work Term Report</p>
          <p>By: Jason Ellul</p>
          <p className='sticky-date'>8/30/2019</p>
        </div>
        {/* First page */}
        <div className='paper'>
          <div className='tape' style={{ top: 0, left: '-15%', width: '50%', transform: 'rotate(-28deg)' }} />
          <div className='tape' style={{ top: -20, right: '-12%', width: '30%', transform: 'rotate(42deg)' }} />
          <img className='coffee-stain' src={coffee} />
          {/* <img className='pin' src={pin} /> */}
          <div className='paper-content'>
            <br />
            <p className='paper-title' style={{ textAlign: 'center' }}>Co-op Work Term 2: Full Stack Developer at the <a href='http://securcor.com' target='_blank' rel='noopener noreferrer'>Securcor Financial Group</a></p>
            <br />
            <p className='paper-writing title'><span className='highlight'>Information About the Employer</span></p>
            <br />
            <p className='paper-writing'>&emsp;If you go onto any University of Guelph department website, you will find a brief description of what they do at the University. Here is what we at CCS describe as our role within the school community:

"CCS provides core IT services to the greater campus community. These include internet connectivity, a campus wide integrated email and calendaring system, telephony infrastructure, software distribution, development of single sign-on technology, learning resources, and more."

With technology playing such a vital role in the work done by the campus community, CCS has a strict obligation to keep our services both functional and accessible. Some of the services managed by CCS include: campus-wide internet connectivity, tens of thousands of email accounts, phones and computers for university employees, and hundreds of various web applications and software used by the wide assortment of roles within the campus community.</p>

            <br />
            <p className='paper-writing'>&emsp;With technology playing such a vital role in the work done by the campus community, CCS has a strict obligation to keep our services both functional and accessible. Some of the services managed by CCS include: campus-wide internet connectivity, tens of thousands of email accounts, phones and computers for university employees, and hundreds of various web applications and software used by the wide assortment of roles within the campus community.</p>
          </div>
        </div>
        {/* <img className='staple' src={staple} /> */}
        <div style={{ height: '100vh' }} />
      </div>
    );
  }

}

export default App;
