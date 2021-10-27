let  Web3 = require('web3')
let url = "https://mainnet.infura.io/v3/d3cc9c2d56484cb59e68b52070925462"
let web3 = new Web3(url)

let address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

web3.eth.getBalance(address, function(error, balance){
    if(!error){
        console.log(web3.utils.fromWei(balance, 'ether'))
    }
    else{
        console.log(error)
    }
})