import { React, useState, useEffect } from 'react'
import './Lottery.css'

const Lottery = ({ lottery }) => {

    const [ticket, setTicket] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")
    const MINUTE_MS = 60000;

    const buyTicket = async (ticket) => {
        await (await lottery.buyTicket(ticket)).wait()
    }

    const claimReward = async () => {
        try {
            await (await lottery.claimReward()).wait()
        } catch (err) {
            setErrorMessage("You are not the winner!!")
        }
        
    }

    const requestRandomWords = async () => {
        await (await lottery.requestRandomWords()).wait()
        const winningNumber = await lottery.winningNumber()
      }
    
    useEffect(() => {
    const interval = setInterval(() => {
        console.log("Finding winning number");
        requestRandomWords();
    }, MINUTE_MS); 

    return () => clearInterval(interval);
    }, [])

  return (
    <div className='app__lottery'>
        <div className='app__lottery-title'>
            Choose your favourite tickets
        </div>
        <div className='app__lottery-tickets'>
            <button className='ticket-btn' onClick={() => setTicket(1)} >
                Ticket 1
            </button>
            <button className='ticket-btn' onClick={() => setTicket(2)} >
                Ticket 2
            </button>
            <button className='ticket-btn' onClick={() => setTicket(3)} >
                Ticket 3
            </button>
            <button className='ticket-btn' onClick={() => setTicket(4)} >
                Ticket 4
            </button>
            <button className='ticket-btn' onClick={() => setTicket(5)} >
                Ticket 5
            </button>
            <button className='ticket-btn' onClick={() => setTicket(6)} >
                Ticket 6
            </button>
        </div>
        <div className='app__lottery-btn'>
            <button className='lottery__buybtn' onClick={() => buyTicket(ticket)}>Buy</button>
            <button className='lottery__claimbtn' onClick={() => claimReward()}>Claim</button>
        </div>
    </div>
  )
}

export default Lottery