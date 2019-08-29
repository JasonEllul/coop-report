import React, { Component } from 'react';

import './App.css';

// https://www.toptal.com/designers/subtlepatterns/page/49/
// https://pinup.com/
import tile from './img/cork-board.png';
import paper from './img/realistic-paper.jpg';
import texture from './img/paper.png';
import staple from './img/staple.jpg';
import pin from './img/pin.png';
import coffee from './img/coffeestain.png';

// Pics
import burloak from './img/burloak.jpg';
import desk from './img/desk.JPG';
import securcor from './img/securcor-mission-shadow.jpg';
// Stickers
import goku from './img/stickers/goku.png';
import supreme from './img/stickers/developer.png';

class App extends Component {

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${tile})` }}>
        {/* <img className='sticker' style={{ width: 550, right: 0, top: 0, transform: 'rotate(-15deg)' }} src={supreme} /> */}
        {/* <img className='sticker' style={{ width: 450, left: -120, top: 600 }} src={goku} /> */}

        {/* Sticky note title */}
        <div className='sticky'>
          <p className='title'>Co-op Work Term Report</p>
          <p>By: Jason Ellul</p>
          <p className='sticky-date'>8/30/2019</p>
        </div>
        {/* About the employer page */}
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
            Within the office, an experienced business group utilizes advanced reporting tools to carry out securitization; a business practice with the objective of liquidating assets into marketable securities.
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
        {/* Job description page */}
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
              &emsp;The biggest project I worked on during my co-op term was creating a full stack web application to internally oversee the company's SFTP users.
                For this project, I first had to create a RESTful API with secure endpoints that can configure SFTP users on a Ubuntu host.
                Using the React framework, I then designed and programmed a web front-end to communicate with my API.
                The result was a web app which was allowed anyone in the company to login with their existing credentials and create, modify, or delete SFTP users; saving time and dependance in the office by elimating the need for an IT person to do the configuration manually.
            </p>
            <br />
            <p className='paper-writing'>
              &emsp;Another project I had the opportunity to work on was remaking the Securcor external website.
              I presented directly to the CEO and Executive Vice President to ensure that my designs fit the company brand.
              The site I made will be in production soon and can be accessed <a href='http://securcor.com' target='_blank' rel='noopener noreferrer'>here.</a>
            </p>
            <br />
          </div>
        </div>
        {/* Photos */}
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '-20px', marginBottom: 120 }}>
          <div className='pic-wrapper' style={{ transform: 'rotate(-1deg)' }}>
            <img className='pin' src={pin} style={{ transform: 'rotate(12deg)', paddingLeft: 10 }} />
            <img className='pic' src={securcor} />
            <p className='pic-text'>Designs for the Securcor external website.</p>
          </div>
          <div className='pic-wrapper' style={{ transform: 'rotate(3deg) translateY(100px)' }}>
            <img className='pin' src={pin} style={{ transform: 'rotate(-12deg) translateX(-10px)' }} />
            <img className='pic' src={desk} />
            <p className='pic-text'>My workstation on the office floor.</p>
          </div>
        </div>
        {/* Learning Goals Papers */}
        <div className='construction-paper' style={{ transform: 'rotate(-2deg)', backgroundColor: '#9bbddb' }}>
          <div className='tape' style={{ top: '18%', left: '-18%', width: '38%', transform: 'rotate(-86deg)' }} />
          <div className='tape' style={{ top: '15%', right: '-15%', width: '32%', transform: 'rotate(78deg)' }} />
          <div className='construction-overlay' style={{ backgroundImage: `url(${texture})` }} />
          <p className='paper-title' style={{ textAlign: 'center' }}>LEARNING GOALS</p>
        </div>
        {/* Goal #1 */}
        <div className='construction-paper' style={{ transform: 'rotate(0.2deg)', backgroundColor: '#f2cad9' }}>
          <div className='tape' style={{ top: 0, left: -140, width: 402, transform: 'rotate(-30deg)' }} />
          <div className='tape' style={{ top: 0, right: -100, width: 302, transform: 'rotate(28deg)' }} />
          <div className='construction-overlay' style={{ backgroundImage: `url(${texture})` }} />
          <br />
          <p className='construction-paper-writing'>&emsp;1. <span className='title'>Integrative Communication</span></p>
          <br />
          <p className='construction-paper-writing'>
            &emsp;This goal was established early into my co-op term with the objective of improving my integrative communication skills during project work.
            I've always been interested in expanding my skills into more business / requirements analysis work, and this goal nicely compliments this interest.
            The measure of success for this goal would be my ability to understand precisely what is required of the business software I would develop.
            Throughout the term, I made sure to take initiative during meetings or presentations to practice these communication skills.
            I also asked for feedback from my coworkers whenever possible to fully understand my progress with this learning goal.
          </p>
        </div>
        {/* Goal #2 */}
        <div className='construction-paper' style={{ transform: 'rotate(-0.2deg)', backgroundColor: '#fcda4b' }}>
          <div className='tape' style={{ top: -30, left: -140, width: 300, transform: 'rotate(-10deg)' }} />
          <div className='tape' style={{ top: 0, right: -100, width: 350, transform: 'rotate(18deg)' }} />
          <div className='construction-overlay' style={{ backgroundImage: `url(${texture})` }} />
          <br />
          <p className='construction-paper-writing'>&emsp;2. <span className='title'>Technological Literacy</span></p>
          <br />
          <p className='construction-paper-writing'>
            &emsp;Given that one of my job responsibilities was to maintain the computing and communication technology within the office, I made one of my learning goals to improve my technological literacy with system administration.
            The plan to achieve this goal involved me taking initiative and asking if there was any administrational work I could complete for my boss, Andre.
            My efforts paid off, and I ended up with a wealth of knowledge and experience in areas of system administration by the end of the semester.
            This goal was achieved much easier since my boss was an excellent mentor with a high level of expertise in the topic.
            I was taught how to configure my own VMware instance on an office server that acted as my training grounds.
            I configured many services on my RedHat instance, such as: Windows file share, OpenSSH, MySQL community server, and a Node.js RESTful API.
            While perusing this goal, I quickly discovered a new consideration for a career in system administration.
          </p>
        </div>
        {/* Goal #3 */}
        <div className='construction-paper' style={{ transform: 'rotate(0.1deg)', backgroundColor: '#9bbddb' }}>
          <div className='tape' style={{ top: -30, left: -150, width: 350, transform: 'rotate(-4deg)' }} />
          <div className='tape' style={{ top: -10, right: -80, width: 200, transform: 'rotate(40deg)' }} />
          <div className='construction-overlay' style={{ backgroundImage: `url(${texture})` }} />
          <br />
          <p className='construction-paper-writing'>&emsp;3. <span className='title'>Critical &amp; Creative Thinking</span></p>
          <br />
          <p className='construction-paper-writing'>
            &emsp;At the beginning of the co-op term, I was given instructions to create a web interface that would oversee the services running on our in-house server.
            I took a little too much initiative with this project and began to code almost right away.
            My boss informed me that I should have planned out the project better before starting to code.
            I realized that he was right, and I made it one of my learning goals to put more effort into the planning stage of every project.
            Getting better and planning skills and communicating your plans is a valuable skill that ensures the created software is sustainable and meets all of the client requirements.
            I proved that I was able to achieve this learning goal by making a conscious effort to ensure each project I worked on throughout the co-op term was adequately planned out.
            For example, I took careful planning considerations for which UI framework to use for the SFTP management tool.
          </p>
        </div>
        {/* Conclusion page */}
        <div className='paper' style={{ transform: 'rotate(-0.1deg)', marginTop: 80, marginBottom: 50 }} >
          <div className='tape' style={{ top: -25, left: '-10%', width: '32%', transform: 'rotate(-22deg)' }} />
          <div className='tape' style={{ top: 0, right: '-10%', width: '25%', transform: 'rotate(20deg)' }} />
          <div className='paper-content'>
            <p className='paper-writing title'><span className='highlight'>Conclusion &amp; Acknowledgments</span></p>
            <br />
            <p className='paper-writing'>
              &emsp;In conclusion, my second co-op term as a full stack developer went better than I could have ever imagined.
              I gained lots of hands-on work experience with web programming and design, system administration, and requirements and planning.
              I successfully achieved all of the learning goals that I set to improve – my integrative communication, technological literacy, and critical &amp; creative thinking skills were all exercised over the course of the term.
               These skills and experiences will no doubt prove useful for future employment opportunities in software development.
               I am very proud of the projects I have completed thus far for Securcor and I am looking forward to continuing my employment part-time during next semester.
               Overall, I have come a long way from where I started, and it is truly interesting to reflect on how much I have learned in just 4 months.
            </p>
            <br />
            <p className='paper-writing'>
              &emsp;I would first like to thank Andre for being such a great boss, mentor, and friend.
                I have greatly enjoyed working alongside you, Ryan, and the rest of the team and appreciate how welcome you have all made me feel the past 4 months.
                Thank you to all my coworkers for being such great colleagues and making this co-op term such an enjoyable, memorable experience!
            </p>
            <br />
          </div>
        </div>
        {/* Link construction paper */}
        <div className='construction-paper' style={{ transform: 'rotate(2deg)', backgroundColor: '#fcda4b' }}>
          <div className='tape' style={{ top: '18%', left: '-15%', width: '30%', transform: 'rotate(-86deg)' }} />
          <div className='tape' style={{ top: '15%', right: '-15%', width: '32%', transform: 'rotate(78deg)' }} />
          <div className='construction-overlay' style={{ backgroundImage: `url(${texture})` }} />
          <a className='paper-title' style={{ textAlign: 'center', color: '#000' }} href='https://ellul.ca'>BACK TO MAIN SITE</a>
        </div>
      </div>
    );
  }

}

export default App;
