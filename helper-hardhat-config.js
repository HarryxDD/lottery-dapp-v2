const { ethers } = require("hardhat")

const networkConfig = {

    default: {
        name: "hardhat",
        interval: "30",
    },

    4: { 
        name: "rinkeby",
        subscriptionId: "6861",
    },

    
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains
}