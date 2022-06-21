import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { ethers } from 'ethers'
import './Header.css'

const Header = ({ lottery, account }) => {

  const [prize, setPrize] = useState("0");
  const [winningNumber, setWinningNumber] = useState("0")
  const [ownedTicket, setOwnedTicket] = useState("0")

  const getInfo = async () => {
    const prize = await (await lottery.getCurrentPrize())
    const winningNumber = await (await lottery.getWinningNumber())
    const ownedTicket = await (await lottery.getTicketsPurchased(account))
    setPrize(prize)
    setWinningNumber(winningNumber)
    setOwnedTicket(ownedTicket)
  }

  const updateUI = async () => {
    getInfo()
  }

  useEffect(() => {
    updateUI()
  }) 

  return (
    <div className='app__header'>
        <h1>Welcome to the Lottery!</h1>
        {account ? (
          <div className='app__header-info'>
            <p>Current prize is {ethers.utils.formatUnits(prize, 'wei')} THV - Owned Tickets: {ethers.utils.commify(ownedTicket, )}</p>
            <p>Latest winning number: {ethers.utils.commify(winningNumber, )}</p>
          </div>
        ) : (
          <p>Connect your wallet first</p>
        )}
        
    </div>
  )
}

export default Header