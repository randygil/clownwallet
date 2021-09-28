// Import web3
import Web3 from "web3";
if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
}
let web3;
if (typeof window.ethereum !== "undefined") {
  // Instance web3 with the provided information
  web3 = new Web3(window.ethereum);
  try {
    // Request account access
    await ethereum.request({ method: "eth_requestAccounts" });
   


  } catch (e) {
    // User denied access
  }
}

export default web3