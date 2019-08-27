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
            <p className='paper-title' style={{ textAlign: 'center' }}>Co-op Work Term 2: Full Stack Developer at the <a href='http://securcor.com' target='_blank' rel='noopener noreferrer'>Securcor Financial Group</a></p>
            <br />
            <p className='paper-writing title'><span className='highlight'>Information About the Employer</span></p>
            <p className='paper-writing'>&emsp;Securcor provides customized securitization and structured financing programs to clients across Canada and the United States.
            Securcor offers an alternative to traditional sources of lending, and the opportunity for reducing financing costs. Since it's inception in 1999, Securcor has originated close to $5.0 billion in automobile financing, equipment leases, and consumer finance contracts.
            </p>
            <br />
            <p className='paper-writing'>&emsp;The Securcor Financial Group head office (where I work) is located in Burlington, Ontario.
            Within the office, an experienced business group utilizes advanced reporting tools to carry out securitization; an intensive procedure with the objective of liquidating assets into marketable securities.
            A team of IT people also work on maintaining the technological infrastructure of the office and making improvements to existing proprietary software involved in the securitization process.
            </p>
          </div>
        </div>
        {/* <img className='staple' src={staple} /> */}
        <div style={{ height: '100vh' }} />
      </div>
    );
  }

}

export default App;
