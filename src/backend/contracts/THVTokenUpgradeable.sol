// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract THVTokenUpgradeable is Initializable, ContextUpgradeable, ERC20Upgradeable {

    // constructor () ERC20("THVToken", "THV") {
    //     _mint(_msgSender(), 10000 * (10 ** 18));
    // }

    // Run script:
    // npx hardhat run .\src\backend\scripts\deploy.js --network rinkeby
    
    // Verify (already):
    // npx hardhat verify --network rinkeby `contract address`

    // function to replace the constructor
    function initialize() external initializer {
        __ERC20_init("THVToken", "THV");
        _mint(_msgSender(), 10000 * (10 ** 18));
    }

    function setApproval(address owner, address spender, uint256 amount) external {
        _approve(owner, spender, amount);
    }
}