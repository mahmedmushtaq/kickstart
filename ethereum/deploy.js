// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const Web3 = require("web3");
// const compiledFactory = require("./build/CampaignFactory.json");

// const provider = new HDWalletProvider(
//   "behind state fragile horse spread two essence orange what expose cheese monitor",
//   "https://rinkeby.infura.io/v3/849a16b7285440bfb61f1f11eda87129"
// );
// const web3 = new Web3(provider);

// const deploy = async () => {
//   const accounts = await web3.eth.getAccounts();

//   console.log("Attempting to deploy from account", accounts[0]);

//   const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
//     .deploy({ data: compiledFactory.bytecode })
//     .send({ gas: "1000000", from: accounts[0] });

// //   console.log(interface)
//   console.log("Contract deployed to", result.options.address);
//   provider.engine.stop();
// };
// deploy();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "behind state fragile horse spread two essence orange what expose cheese monitor",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/2ffbeaea4651455cb5eddce517aebc02"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(
      JSON.parse(compiledFactory.interface)
    )
      .deploy({ data: compiledFactory.bytecode })
      .send({ gas: "1000000", from: accounts[0] });

    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
  } catch (err) {
    console.log("err occured ", err);
  }
};

try {
  deploy();
} catch (err) {
  console.log("err is ", err);
}
