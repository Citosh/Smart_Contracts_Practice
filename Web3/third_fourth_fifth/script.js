import Web3 from 'web3';
import 'dotenv/config';
import fs from "node:fs"

const contractABI = JSON.parse(fs.readFileSync("MyToken_ABI.json", "utf8"));

const contractAddress = fs.readFileSync("MyToken_Address.txt", "utf8").trim();


const web3 = new Web3(new Web3.providers.HttpProvider(process.env.SEPOLIA_RPC_LINK));

const account = web3.eth.accounts.privateKeyToAccount(process.env.FIRST_ACCOUNT_SECRET_KEY);
web3.eth.accounts.wallet.add(account);

const tokenContract = new web3.eth.Contract(contractABI, contractAddress);

async function distributeTokens(recipients) {
    const gasPrice = await web3.eth.getGasPrice();

    for (const recipient of recipients) {
        const { address, amount } = recipient;
        const data = tokenContract.methods.transfer(address, web3.utils.toWei(amount, 'ether')).encodeABI();

        const gasEstimate = await web3.eth.estimateGas({
          from: account.address,
          to: address,
          data: data,
        });

        const tx = {
            from: account.address,
            to: contractAddress,
            maxPriorityFeePerGas: web3.utils.toWei('2', 'gwei'),
            maxFeePerGas: gasPrice + BigInt(web3.utils.toWei('2', 'gwei')), 
            gas: gasEstimate * 2n,
            data,
        };

        try {
            const receipt = await web3.eth.sendTransaction(tx);
            console.log(`Успішно нараховано ${amount} токенів на адресу ${address}`);
            console.log(receipt);
        } catch (error) {
            console.log(error);
        }
    }
}

const recipients = [
    { address: process.env.SECOND_ACCOUNT_ADDRESS, amount: '10' },
    { address: process.env.THIRD_ACCOUNT_ADDRESS, amount: '20' },
];




async function getTokenBalances(addresses) {
    for (const address of addresses) {
        try {
            const balance = await tokenContract.methods.balanceOf(address).call();
            const formattedBalance = web3.utils.fromWei(balance, 'ether'); 
            console.log(`Адреса: ${address}, Баланс: ${formattedBalance} токенів`);
        } catch (error) {
            console.error(`Помилка для адреси ${address}: ${error.message}`);
        }
    }
}

const addresses = [
    process.env.SECOND_ACCOUNT_ADDRESS,
    process.env.THIRD_ACCOUNT_ADDRESS
];

distributeTokens(recipients)
    .then( ()=> getTokenBalances(addresses))