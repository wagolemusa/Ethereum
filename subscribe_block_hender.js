let  Web3 = require('web3')
let url = 'wss://mainnet.infura.io/ws/v3/d3cc9c2d56484cb59e68b52070925462' 
let web3 = new Web3(url)

web3.eth.subscribe('newBlockHeaders', (error, blockheader)=>{
    if(!error){
        console.log(blockheader)
    }else{
        console.log(error)
    }
})