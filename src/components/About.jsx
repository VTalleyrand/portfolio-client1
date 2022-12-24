import React from "react";
import  naomi from '../images/naomi.png'


const About = () => {
  return (
    <>
    
    <main>
      <aside className="about-left-content">
        <h1 className="about-header">About</h1>
        <div className="image_box">
          <img src={ naomi } alt='aboutpic' />
        </div>
      </aside>

      <aside className="about-right-content">
        <p id='bio'>
          Naomi Accardi is a multi-hyphenated creative and editorial consultant with a strong 
          background in brand marketing strategy and visual communications.<br/><br/>

          With a special focus on the social and cultural connotation of sport and its influence
           on fashion and art, her work revolves around creating purposeful content engineered to unearth, 
          elevate and connect the stories of remarkable individuals to brands and platforms worldwide.<br/><br/>
          
          Most recently she took on the role as Marketing Director at Italian fashion brand Sunnei while 
          continuing her personal research in sports, culture and social issues.<br/><br/>
           Full CV <span><a href='./' alt='hi'>here.</a></span> <br/><br/>
        </p>
      </aside>
    </main>
    </>
  );
};

export default About;
