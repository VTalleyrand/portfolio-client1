import React from 'react'

function Nav({handleTheme, theme}) {
  return (
    <footer>
        <div className={theme? 'darkmode' : ''} onClick={handleTheme} id='toggle-box'>
        <button className={theme? 'darkmode' : ''} id='toggle-btn'></button>   
    </div>
</footer>
  )
}

export default Nav