const { Web3, errors } = require('web3')
require('dotenv').config();

const web3 = new Web3(process.env.SEPOLIA_RPC_LINK)

const account = web3.eth.accounts.privateKeyToAccount(process.env.FIRST_ACCOUNT_SECRET_KEY)

const wallet = web3.eth.accounts.wallet.add(account)


function getBalance(address) {
    return web3.eth.getBalance(address)
}

// getBalance(process.env.FIRST_ACCOUNT_ADDRESS)
//     .then(balance => {
//         console.log(balance)
//     })
//     .catch(errors => {
//         console.log(errors)
//     })


async function sendTransactionACCOUNT(from, to, value) {
    const txObject = {
        from,
        to,
        maxPriorityFeePerGas: 10_000,
        maxFeePerGas: 329980700100,
        value: web3.utils.toWei(value, 'ether'),
    }

    return account.signTransaction(txObject)
}

// sendTransactionACCOUNT(account.address, process.env.SECOND_ACCOUNT_ADDRESS,'0.001')
//     .then(receipt => {
//         console.log(receipt)
//     })
//     .catch(errors => {
//         console.log(errors)
//     })



async function sendTransactionWALLET(from, to, value){
    const txObject = {
        from,
        to,
        value: web3.utils.toWei(value, 'ether'),
    }

    return web3.eth.sendTransaction(txObject)
}

sendTransactionWALLET(wallet[0].address, process.env.SECOND_ACCOUNT_ADDRESS, '0.001')
    .then(receipt => {
        console.log(receipt)
    })
    .catch(errors => {
        console.log(errors)
    })
