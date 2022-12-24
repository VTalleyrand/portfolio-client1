import React from 'react'

function Home({theme}) {
  return (
    <div className={theme ? 'Home darkmode' : 'Home'}>
     HOME
    </div>
  )
}

export default Home