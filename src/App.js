import React, { Component } from 'react';

import './App.css';

// https://www.toptal.com/designers/subtlepatterns/page/49/
// https://pinup.com/
import tile from './img/cork-board.png';
import paper from './img/realistic-paper.jpg';
import staple from './img/staple.jpg';
import pin from './img/pin.png';
import coffee from './img/coffeestain.png';

// Pics
import burloak from './img/burloak.jpg';
import desk from './img/desk.JPG';
import name from './img/name.JPG';
// Stickers
import goku from './img/stickers/goku.png';
import supreme from './img/stickers/developer.png';

class App extends Component {

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${tile})` }}>
        <img className='sticker' style={{ width: 550, right: 0, top: 0, transform: 'rotate(-15deg)' }} src={supreme} />
        {/* <img className='sticker' style={{ width: 450, left: -120, top: 600 }} src={goku} /> */}

        {/* Sticky note title */}
        <div className='sticky'>
          <p className='title'>Co-op Work Term Report</p>
          <p>By: Jason Ellul</p>
          <p className='sticky-date'>8/30/2019</p>
        </div>
        {/* First page */}
        <div className='paper'>
          {/* <div className='tape' style={{ top: 0, left: '-15%', width: '50%', transform: 'rotate(-28deg)' }} /> */}
          <div className='tape' style={{ top: -20, right: '-12%', width: '30%', transform: 'rotate(42deg)' }} />
          <img className='coffee-stain' src={coffee} />
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
        {/* First pic */}
        <div className='pic-wrapper' style={{ transform: 'rotate(3deg)' }}>
          <img className='pin' src={pin} style={{ transform: 'rotate(20deg)', paddingLeft: 10 }} />
          <img className='pic' src={burloak} />
          <p className='pic-text'>The Securcor Head Office Building.</p>
        </div>
        {/* Second Page */}
        <div className='paper' style={{ transform: 'rotate(0.2deg)' }} >
          <div className='tape' style={{ top: -25, left: '-10%', width: '25%', transform: 'rotate(-20deg)' }} />
          <div className='tape' style={{ top: 12, right: '-12%', width: '32%', transform: 'rotate(24deg)' }} />
          <div className='paper-content'>
            <p className='paper-writing title'><span className='highlight'>Job Description</span></p>
            <p className='paper-writing'>
              &emsp;As a <span className='green'>full stack developer</span>, I was expected to make significant technical contributions to each part of a project.
            This included me taking a key role during each step of the software development life cycle, and ensuring that products are specifically meeting the requirements.
            </p>
            <br />
            <p className='paper-writing'>
              &emsp;The biggest project I worked on during my co-op term was creating a full stack web application to oversee the company's SFTP users.
                For this project, I first had to create a RESTful API with secure endpoints that can configure SFTP users on a Ubuntu host.
                Using the React framework, I then designed and programmed a web front-end to communicate with my API.
                The result was a web app which was allowed anyone in the company to login with their existing LDAP credentials and create, modify, or delete SFTP users; saving time and dependance in the office by elimating the need for an IT person to do the configuration manually.
            </p>
            <br />
            <p className='paper-writing'>
              &emsp;Another project I had the opportunity to work on was remaking the Securcor external website.
              I presented directly to the CEO and Executive Vice President to ensure that my designs fit the company brand.
              The site I made is in production and can be found <a href='http://securcor.com' target='_blank' rel='noopener noreferrer'>here.</a>
            </p>
            <br />
          </div>
        </div>
        {/* Photos */}
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '-20px' }}>
          <div className='pic-wrapper' style={{ transform: 'rotate(-1deg)' }}>
            <img className='pin' src={pin} style={{ transform: 'rotate(10deg)', paddingLeft: 10 }} />
            <img className='pic' src={desk} />
            <p className='pic-text'>My workstation on the office floor.</p>
          </div>
          <div className='pic-wrapper' style={{ transform: 'rotate(2deg) translateY(120px)' }}>
            <img className='pin' src={pin} style={{ transform: 'rotate(-12deg)', paddingLeft: 10 }} />
            <img className='pic' src={name} />
            <p className='pic-text'>Name plaque in my cubicle.</p>
          </div>
        </div>
        <div style={{ height: '100vh' }} />
      </div>
    );
  }

}

export default App;
