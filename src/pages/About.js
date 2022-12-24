import React from 'react';
import naomi from '../assets/images/naomi.jpg'

function About({ theme }) {
  return (
    <div className={theme ? 'About darkmode' : 'About'}>
        <h1 className="page-heading">About</h1>

      <main className="main-about">
      <div className="image-box">
          <img src={ naomi } alt='aboutpic' />
        </div>
        <p id="bio">
          Naomi Accardi is an editorial consultant & writer with 10 years
          experience in visual communications and brand marketing.
          <br /><br/>
          Aside from contributing to multiple international publications, her
          work focuses on helping brands and platforms develop and implement a
          strong editorial strategy, find the right tone of voice and offer
          outstanding storytelling and experiences to their audience.<br /> <br/>
          
           With a
          special focus on the social and cultural connotation of sport
          (football ⚽️ in particular) and its intersection with fashion, Naomi
          seeks to create purposeful content engineered to unearth and elevate
          inspiring stories and put remarkable individuals under the spotlight. <br/> <br />

          Currently she’s heading the marketing department of Sunnei &
          she’s the Editor-At-Large of Season Zine. <br />
          Full CV <a href='https://drive.google.com/file/d/1fg2vZuoROnxU4_m1ke_dUzRCYNEPjxzS/view?usp=sharing' target="_blank" rel='noreferrer' >here.</a>
          <br/> <br/>
          Select Clients: adidas, Inter FC, Rivista 11, Dazed, C41
          Magazine, Day Off Magazine, Greatest, Mundial Magazine, Tomorrow
          Projects, Camper, Lack of Guidance, I-D, Palla Mag. 
          <br /> Ig / Twitter / Linkedin
          <br/> Subscribe to my newsletter <a href='https://naomiaccardi.substack.com' target="_blank" rel='noreferrer'>Things I Thought About</a>
        </p>
      </main>
    </div>
  );
}

export default About;
