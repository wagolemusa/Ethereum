let  Web3 = require('web3')
let url = "https://mainnet.infura.io/v3/d3cc9c2d56484cb59e68b52070925462"
let web3 = new Web3(url)

// web3.eth.getBlockNumber().then((result)=>{
//     console.log(result)
// })

// web3.eth.getBlock(13452153).then((block) =>{
//     console.log(block)
// })

// web3.eth.getBlockNumber().then((result) =>{
//     for (let i = 0; i <100; i++){
//         web3.eth.getBlock(result-i).then((block) => {
//             console.log(block.number)
//         })
//     }
// })

// web3.eth.getBlock('latest').then((block) =>{
//     console.log(block.number)
// })

// web3.eth.getBlock('pending').then((block) =>{
//     console.log(block.number)
// })

// web3.eth.getBlock('0x97ca85fdff5ed4a66cb7e833e8c139e0c261e3b4f54b3dea6df06dd230ad9f7e').then((block) => {
//     console.log(block.number)
// })

web3.eth.getTransactionFromBlock(13452312, 2).then(console.log)