// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function deploy() {
  const Lock = await hre.ethers.getContractFactory("BlockDNS");
  const dns = await Lock.deploy();

  await dns.deployed();
  console.log(dns.address);
  return dns;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
//

//async function printDNS(dns) {
//	console.log(await dns.isRegistered('lalith.com'));
//	await dns.register('lalith.com');
//	console.log(await dns.getDomain('lalith.com'));
//	console.log(await dns.isRegistered('lalith.com'));
//	console.log(await dns.addRecord('lalith.com','A','www.lalith.com','8.8.8.8'));
//	console.log(await dns.getDomain('lalith.com'));
//	console.log(await dns.getRecords('lalith.com','A','www.lalith.com'));
//	console.log(await dns.getDomain('lalith.com'));
//	console.log(await dns.deleteRecord('lalith.com',0));
//	console.log(await dns.getDomain('lalith.com'));
//}

//deploy().then(printDNS)
//

deploy()
