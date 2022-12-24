import React from 'react'
import { Link } from 'react-router-dom'

function Work({theme}) {
  return (
    <div className={theme ? 'Work darkmode' : 'Work'}>
         <h1 className='page-heading'>Work</h1>
    
    <main className='main-work'>

<div>
<h4>SELECTED PROJECTS</h4>
<ul>
<li><Link to='/projectthree' >BYND72 / adidas Originals  -  Concept, Direction, Programming - 2017</Link></li>
  <li><Link to='/projectone' >Spring/Summer Campaign  /  Baracuta - Direction - 2019</Link></li>
  <li><Link to='/projecttwo' >Spring/Summer Campaign  /  Baracuta - Direction - 2020</Link></li>
  <li><Link to='/projectthree' >Evisu x Sfera Ebbasta - Direction - 2021</Link></li>
  
</ul>
</div>


<div>
<h4>SELECTED WRITING</h4>
<ul>
<li><Link to='/projectone' >   Issue 6 /  Season Zine - Copywriting - 2018</Link></li>
<li><Link to='/projectthree' > Issue 2 / Day Off Magazine - Copywriting - 2019</Link></li>
  <li><Link to='/projectone' > Issue 7 /  Season Zine  -  Copywriting - 2019 </Link></li>
  <li><Link to='/projecttwo' > Issue 8  /  Season Zine  - Copywriting - 2020</Link></li>
  <li><Link to='/projectthree' > Issue 1 / Art Work Magazine - Copywriting - 2020</Link></li>
  <li><a href='https://www.c41magazine.com/inside-issue-10-mister-jo-adidas-c41-magazine/' target="_blank" rel="noopener noreferrer"> Issue 10 / C41 Magazine - Copywriting - 2020</a></li>
  <li><a href='https://miilkiina.com/dating-during-covid-19/'target="_blank" rel="noopener noreferrer"> Seeking Romance / Miilkiina.com - Copywriting - 2020</a></li>
  <li><a href='https://miilkiina.com/yara-flinn-on-the-evolution-of-her-brand-nomia-nyc/' target="_blank" rel="noopener noreferrer"> Turning Heads: Yara Flynn of Nomia NYC / Miilkiina.com - Copywriting - 2020</a></li>
  <li><a href='https://miilkiina.com/senay-kenfe-interview/' target="_blank" rel="noopener noreferrer"> Senay Kenfe / Miilkiina.com - Copywriting - 2020</a></li>
  <li><Link to='/projectthree' > Say No To Razzismo / Lack of Guidance - Copywriting - 2020</Link></li>
  <li><a href='https://i-d.vice.com/en_uk/article/qjb835/nuvany-david-photography-zine' target="_blank" rel="noopener noreferrer"> Nuvany David / I-D - Copywriting - 2020</a></li>
  <li><a href='https://www.camper.com/en_US/content/fall-winter-2021?utm_source=instagram&utm_medium=social&utm_campaign=HQ_ORG_INSTAGRAM_FALLWINTER2021&utm_content=fall-winter-2021' target="_blank" rel="noopener noreferrer"> The Walking Society Issue 3 /  Camper - Copywriting -  2021</a></li>
</ul>
</div>
</main>
    </div>
  )
}

export default Work