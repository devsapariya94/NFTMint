require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/0badc046531840a38b80550bc9be462b",
      accounts: ["476a1ef20a15b567b0169e3c562cd221413c1d19096eb6697f9cf382864eaa74"],
    },
  },
  etherscan : {
      
    apiKey :"BIFUI2I8IWV4BKUKHNH7BAGWBXJP65TA5X",
},
};

