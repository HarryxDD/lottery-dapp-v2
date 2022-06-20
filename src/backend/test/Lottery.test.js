const { expect } = require("chai");
const { ethers } = require("hardhat");

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("Lottery", function () {

    let token, lottery, deployer, addr1, addr2, addrs;

    beforeEach(async function () {
        const Token = await ethers.getContractFactory("LTRToken");
        const Lottery = await ethers.getContractFactory("Lottery");
        [deployer, addr1, addr2, ...addrs] = await ethers.getSigners();

        token = await Token.deploy();
        lottery = await Lottery.deploy(token.address);
    })

    describe("Deployment", function () {
        it("Should track name and symbol of token", async function () {
            const tokenName = "LotteryToken"
            const tokenSymbol = "LTR"

            expect(await token.name()).equal(tokenName)
            expect(await token.symbol()).equal(tokenSymbol)
        })
    })
})