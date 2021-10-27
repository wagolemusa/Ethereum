// const Tx = require('ethereumjs-tx')
const Tx = require('ethereumjs-tx').Transaction

let  Web3 = require('web3')
let url = "https://mainnet.infura.io/v3/d3cc9c2d56484cb59e68b52070925462"
// let url = 'https://ropsten.infura.io/v3/d3cc9c2d56484cb59e68b52070925462'
let web3 = new Web3(url)


// const account1 = '0x23755d3c434e3a200e70741a2a67001b14472b02'
const privateKey1 = Buffer.from("0x5965f7f27b3498d08d7e4442bcb2f345538ef558790f3f88335d6cb9a824d626")
// const account2 = '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d'

console.log(privateKey1.toString('hex'))

