const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hello-World", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("HelloWorld");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.speech()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setSpeech("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.speech()).to.equal("Hola, mundo!");
  });
});
