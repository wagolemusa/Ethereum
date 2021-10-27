let  Web3 = require('web3')
let url = 'wss://mainnet.infura.io/ws/v3/d3cc9c2d56484cb59e68b52070925462' 
let web3 = new Web3(url)

// web3.eth.subscribe('logs', {}, (error, log) =>{
//     if(!error){
//         console.log(log)
//     }
// })


web3.eth.subscribe('logs', {
    address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
    topics:['0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80'],
    fromBlock: 'latest'
},(error, log) => {
    if(!error){
        console.log(log)
    }
})

// pregnat_event = "Pregnant(address,uint256,uint256,uint256)"
// pregnant_event_hashed = web3.utils.sha3(pregnat_event)
// console.log(pregnant_event_hashed)
// 0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80

