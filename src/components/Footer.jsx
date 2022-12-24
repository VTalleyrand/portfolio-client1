import React from 'react'

function Footer({theme, handleTheme}) {
  return (
    <header>
        <div className={theme? 'darkmode' : ''} onClick={handleTheme} id='toggle-box'>
        <button className={theme? 'darkmode' : ''} id='toggle-btn'></button>   
    </div>
</header>
  )
}

export default Footer