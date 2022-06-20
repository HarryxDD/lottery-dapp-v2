import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='app__header'>
        <h1>Welcome to the Lottery!</h1>
        <p>Current jackpot is ... ETH - next jackpot will begin in ...</p>
    </div>
  )
}

export default Header