// const Tx = require('ethereumjs-tx')
const Tx = require('ethereumjs-tx').Transaction

let  Web3 = require('web3')
// let url = "https://mainnet.infura.io/v3/d3cc9c2d56484cb59e68b52070925462"
let url = 'https://ropsten.infura.io/v3/d3cc9c2d56484cb59e68b52070925462'
let web3 = new Web3(url)


const account1 = '0x23755d3c434e3a200e70741a2a67001b14472b02'
const privateKey1 = Buffer.from("0x5965f7f27b3498d08d7e4442bcb2f345538ef558790f3f88335d6cb9a824d626")
const account2 = '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d'


web3.eth.getTransactionCount(account1, (error, txCount) =>{
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.3', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))

    }
    // console.log(txObject)

    // sign transaction with private key sender
    const tx = new Tx(txObject)
    tx.sign(privateKey1)

    // serialize the transaction
    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    // broadcast transaction to the  network
    web3.eth.sendSignedTransction(raw, (error, txHash) =>{
        console.log(txHash)
    })
})
