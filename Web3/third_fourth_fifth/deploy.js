import Web3 from "web3";
import fs from "node:fs";
import solc from "solc";
import "dotenv/config";

const web3 = new Web3(process.env.SEPOLIA_RPC_LINK);

const account = web3.eth.accounts.privateKeyToAccount(process.env.FIRST_ACCOUNT_SECRET_KEY);
web3.eth.accounts.wallet.add(account);

const source = fs.readFileSync('MyToken.sol', 'utf8');

function findImports(path) {
    try {
        const filePath = path.startsWith('@') ? `node_modules/${path}` : path;
        return { contents: fs.readFileSync(filePath, 'utf8') };
    } catch (e) {
        return { error: `File not found: ${path}` };
    }
}

const input = {
    language: 'Solidity',
    sources: {
        'MyToken.sol': { content: source },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode'],
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input), { import: findImports }));

if (output.errors) {
    output.errors.forEach((err) => {
        console.error(err.formattedMessage);
    });
    process.exit(1);
}

const abi = output.contracts['MyToken.sol']['MyToken'].abi;
const bytecode = output.contracts['MyToken.sol']['MyToken'].evm.bytecode.object;


const contract = new web3.eth.Contract(abi);
const deploy = contract.deploy({
    data: bytecode,
    arguments: [account.address],
});

const gas = await deploy.estimateGas({ from: account.address });

const instance = await deploy.send({
    from: account.address,
    gas,
});

const contractAddress = instance.options.address;
console.log('Contract deployed at:', contractAddress);

fs.writeFileSync('MyToken_ABI.json', JSON.stringify(abi, null, 2), 'utf8');

fs.writeFileSync('MyToken_Address.txt', contractAddress, 'utf8');



