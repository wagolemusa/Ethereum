let  Web3 = require('web3')
let url = 'wss://mainnet.infura.io/ws/v3/d3cc9c2d56484cb59e68b52070925462' 
let web3 = new Web3(url)

// web3.eth.subscribe('pendingTransactions', (error, txthash) => {
//     console.log(txthash)
// })


web3.eth.subscribe('pendingTransactions', (error, txthash) => {
    if(!error){
        web3.eth.getTransaction(txthash, (error, tx) =>{
            if(tx!=null){
                // console.log(tx)
                // filter transaction >= eth
                if(tx.value >= 1000000000000000){
                    console.log(txthash)
                    console.log(web3.utils.fromWei(tx.value, 'ether'), 'ether')
                }
            }
        })
    }else{
        console.log(error)
    }
})