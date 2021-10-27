let  Web3 = require('web3')
let url = 'wss://mainnet.infura.io/ws/v3/d3cc9c2d56484cb59e68b52070925462' 
let web3 = new Web3(url)



pregnat_event = "Pregnant(address,uint256,uint256,uint256)"
pregnant_event_hashed = web3.utils.sha3(pregnat_event)
console.log(pregnant_event_hashed)
