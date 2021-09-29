// Import web3
import Web3 from "web3";
if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
}
let web3;
if (typeof window.ethereum !== "undefined") {
  // Instance web3 with the provided information
  web3 = new Web3(window.ethereum);

  // Request account access
  ethereum
    .request({ method: "eth_requestAccounts" })
    .then(function (accounts) {
      web3.authorized = true;
    })
    .catch(function (error) {
      console.log(error);

      web3.authorized = false;
    });
  // User denied access
}

export default web3;
