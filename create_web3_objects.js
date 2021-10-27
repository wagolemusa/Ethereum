let Web3 = require('web3')

//  let url_ganache blockchain 
let url_ganache = 'http://127.0.0.1:7545';

// using infura
let url_infura = 'https://mainnet.infura.io/v3/d3cc9c2d56484cb59e68b52070925462'

// using path
let url_geth = 'http://127.0.0.1:8545'

// let web3 = new Web3(url_ganache)
// let web3 = new Web3(url_infura)
let web3  = new  Web3(url_geth)

console.log(web3)