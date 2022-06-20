import React from 'react'
import './Lottery.css'

const Lottery = () => {
  return (
    <div className='app__lottery'>
        <div className='app__lottery-title'>
            Choose your favourite tickets
        </div>
        <div className='app__lottery-tickets'>
            <button className='ticket-btn'>
                Ticket 1
            </button>
            <button className='ticket-btn'>
                Ticket 2
            </button>
            <button className='ticket-btn'>
                Ticket 3
            </button>
            <button className='ticket-btn'>
                Ticket 4
            </button>
            <button className='ticket-btn'>
                Ticket 5
            </button>
            <button className='ticket-btn'>
                Ticket 6
            </button>
        </div>
    </div>
  )
}

export default Lottery