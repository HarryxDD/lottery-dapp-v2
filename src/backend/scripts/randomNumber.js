require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
var fs = require('fs');
const util = require('util');
var ethers = require('ethers')
const fsPromises = fs.promises;

// The path to the contract ABI
const ABI_FILE_PATH = 'src/frontend/contractsData/Lottery.json';
// The address from the deployed smart contract
const DEPLOYED_CONTRACT_ADDRESS = '0x53A8C2c01332Cf9E53aF321920935831442e0fc3';

// load ABI from build artifacts
async function getAbi(){
    const data = await fsPromises.readFile(ABI_FILE_PATH, 'utf8');
    const abi = JSON.parse(data)['abi'];
    //console.log(abi);
    return abi;
}

// Automatically random a new winning number every hour.
// Currently the function will run on call for testing purposes.
async function main() {
    const INFURA_PROJECT_KEY  = process.env.RINKEBY_RPC_URL;
    let provider = ethers.getDefaultProvider(`${INFURA_PROJECT_KEY}`);
    const abi = await getAbi()

    // WRITE operations require a signer
    const { PRIVATE_KEY } = process.env;
    let signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const lottery = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, signer);
    let tx = await lottery.requestRandomWords();
    await tx.wait();

    console.log("New winning number generated!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });