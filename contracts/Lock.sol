// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
	string str;

	constructor(string memory str_in){
      		str = str_in;
	}	

	function name() public view returns (address){
		return msg.sender;
	}
}
