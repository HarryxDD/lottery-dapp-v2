import { React, useState} from 'react'
import './App.css'

import LotteryAbi from './contractsData/Lottery.json'
import LotteryAddress from './contractsData/Lottery-address.json'
import LTRTokenAbi from './contractsData/Lottery.json'
import LTRTokenAddress from './contractsData/LTRToken-address.json'

import { ethers } from 'ethers'
import { Header, Lottery, Navbar } from './components'

const App = () => {

  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)
  const [token, setToken] = useState({})
  const [lottery, setLottery] = useState({})

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    setAccount(accounts[0])
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    loadContracts(signer)
  }

  const loadContracts = async (signer) => {
    const token = new ethers.Contract(LTRTokenAddress.address, LTRTokenAbi.abi, signer)
    const lottery = new ethers.Contract(LotteryAddress.address, LotteryAbi.abi, signer)
    setToken(token)
    setLottery(lottery)
    setLoading(false)
  }

  return (
    <div className='App'>
      <Navbar web3Handler={web3Handler} account={account}/>
      <Header />
      <Lottery />
    </div>
  )
}

export default App