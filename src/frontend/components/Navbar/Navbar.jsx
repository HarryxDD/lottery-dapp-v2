import React from 'react'
import './Navbar.css'

const Navbar = ({ web3Handler, account }) => {
  return (
    <div className='app__navbar section__padding'>
        <div className='app__navbar-logo'>
            LotteryGoGo
        </div>
        <div className='navbar__connect'>
            {account ? (
                <a
                    href={`https://etherscan.io/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button nav-button btn-sm mx-4">
                    <button>
                        {account.slice(0, 5) + '...' + account.slice(38, 42)}
                    </button>

                </a>
            ) : (
                <button onClick={web3Handler}>Connect Wallet</button>
            )}
        </div>
    </div>
  )
}

export default Navbar