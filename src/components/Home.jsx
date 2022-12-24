import React from "react";
import  aerial from '../images/aerialview.JPG'
import { Link } from "react-router-dom";


function Home() {

  return ( 
    <main className='main-home'>
    <aside className='left-content'>
<h1 className='home-header'>NAOMI ACCARDI</h1>
<div className='home-image-box'>
<img src={ aerial } alt='mail'/>
<p className='title invert' >Creative Consultant &  Writer</p>
</div>
</aside>

<aside className='right-content'>
<ul>
  <li><Link className='links' to='/about'>About</Link></li>
  <li><Link className='links' to='/work'>Work</Link></li>
  <li><a href="mailto:accardinaomi@gmail.com" className='links' to='/'>Contact</a></li>
  </ul>
</aside>
</main>
  );
}

export default Home;
