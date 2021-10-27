let  Web3 = require('web3')
let url = "https://mainnet.infura.io/v3/d3cc9c2d56484cb59e68b52070925462"
let web3 = new Web3(url)

let wallet  = web3.eth.accounts.wallet.create(2, 'some random strings')

let account = web3.eth.accounts.create()

wallet.add(account.privateKey)

console.log(wallet)