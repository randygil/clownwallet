import web3 from "./web3.js";
const getBalance = async (wallet, token) => {

  if (!web3.authorized) {
    return 0
  }
  let minABI = [
    // balanceOf
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
    // decimals
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      type: "function",
    },
  ];
  const contract = new web3.eth.Contract(minABI, token);
  const wei = await contract.methods.balanceOf(wallet).call();
  const decimals = await contract.methods.decimals().call();
  const balance = wei / 10 ** decimals;
  return balance;
};

export { getBalance };
