const { network, ethers } = require('hardhat');
const { networkConfig } = require('../../../helper-hardhat-config.js') 


async function main() {
  const [deployer] = await ethers.getSigners();
  const chainId = network.config.chainId;
  const subscriptionId = networkConfig[chainId][["subscriptionId"]];

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  
  // Get the ContractFactories and Signers here.
  const Token = await ethers.getContractFactory("THVToken");
  const Lottery = await ethers.getContractFactory("Lottery");

  // deploy contracts
  const token = await Token.deploy();
  const lottery = await Lottery.deploy(subscriptionId, token.address, { gasLimit: 2000000});

  console.log("token deploy at: ", token.address);
  console.log("lottery deploy at: ", lottery.address);

  // Save copies of each contracts abi and address to the frontend.
  saveFrontendFiles(lottery , "Lottery");
  saveFrontendFiles(token , "THVToken");
}

function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../frontend/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });