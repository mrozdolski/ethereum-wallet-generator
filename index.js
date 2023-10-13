#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { ethers } from "ethers";
import readline from "readline";

const sleep = (ms = 1400) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const title = chalkAnimation.glitch(
    'Generating Ethereum wallet \n'
  );

  await sleep();
  title.stop();
}

async function generateWallet() {
  await welcome(); // Call the welcome function here

  const wallet = ethers.Wallet.createRandom();

  console.log('Address:', wallet.address);
  console.log('Mnemonic:', wallet.mnemonic.phrase);
  console.log('Private Key:', wallet.privateKey);
  console.log('');
  console.log(chalk.bold.yellow("Remember not to share your private key"));
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Choose an option (1. Create Ethereum Wallet): ', async (option) => {
    if (option === '1') {
      await generateWallet();
    } else {
      console.log('Invalid option');
    }

    rl.close();
  });
}

main();
