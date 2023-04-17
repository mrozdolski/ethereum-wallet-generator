#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { ethers } from "ethers";

const sleep = (ms = 1400) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const title = chalkAnimation.glitch(
    'Generating ethereum wallet \n'
  );

  await sleep();
  title.stop();

}

async function generateWallet() {
    const wallet = ethers.Wallet.createRandom()

    console.log('address:', wallet.address)
    console.log('mnemonic:', wallet.mnemonic.phrase)
    console.log('privateKey:', wallet.privateKey)
    console.log('')
    console.log(chalk.bold.yellow("Remember not to share your private key"))
}

await welcome()
await generateWallet()
