# Smart_Contracts_Practice

## first practice task ✔️
 
task : Написати свій найпростіший ERC-20 токен (скомпілювати в Remix або Truffle, закинути в будь-який TestNet, надати посилання на контракт, показати тестові транзакції з переказу токенів між декількома (мінімум 3) адресами. Переказ токенів можна здійснити за допомогою MyEther Wallet. Дослідити транзакцію в Etherscan: розібратись за що відповідає кожен з параметрів, які показані в Etherscan.

contract adress : 0x156D51Ec6800A842648Cb95678761f4cF8b14680

[link](https://repo.sourcify.dev/contracts/full_match/11155111/0x156D51Ec6800A842648Cb95678761f4cF8b14680/sources/)

## second practice task ✔️

task : Написати свій ERC-20 токен з можливістю спалювання певної кількості токенів після певної дати (закинути на TestNet, надати посилання на контракт, показати тестові транзакції з переказу токенів між декількома (мінімум 3) адресами. 

contract adress : 0xF2A5c3985cd13E322849c62AF95112fd95da6082

[link](https://repo.sourcify.dev/contracts/full_match/11155111/0xF2A5c3985cd13E322849c62AF95112fd95da6082/sources/)

## third practice task ✔️

task : Написати ERC-20 токен з двома власниками (додатково реалізувати можливість додавати власників за згодою більше половини поточних власників). 

contract adress : 0x2E85Dcd0E34087D9a7DF02B6F849c52fc56Bf815

[link](https://repo.sourcify.dev/contracts/full_match/11155111/0x2E85Dcd0E34087D9a7DF02B6F849c52fc56Bf815/sources/)

## fourth practice task ✔️

task : Додати в ERC-20 токен функціональність виплати дивідендів в ETH, при надходженні ETH на баланс контракту. Дивіденди розподіляти пропорційно кількості токенів.

contract adress : 0xf2C94061B96640cA7e99f7920fD0A1674A2bC181

[link](https://eth-sepolia.blockscout.com/address/0xf2C94061B96640cA7e99f7920fD0A1674A2bC181?tab=contract)

## fifth practice task ✔️

task : Написати контракт, котрий розподіляє ERC-20 токени описані іншим контрактом (додатково реалізувати функцію додаткової емісії цих же токенів).

contract adress : 
CustomToken : 0xdcB0e618ca2D259870216c608cFDFDB9700b4C42
Vendor : 0xCC40b57f6586af1859db626cA1B1754BBA325e38

[link](https://eth-sepolia.blockscout.com/address/0xdcB0e618ca2D259870216c608cFDFDB9700b4C42?tab=contract)

## sixth practice task ✔️

task : Написати контракт MultiSig, котрий реалізує функцію голосування за роздачу токенів на певну адресу з певною сумою (1-2 дні). Умови:
Видавати токени на адресу тільки після того, як кількість тих, хто проголосував “ЗА” більше, ніж половина.
Реалізувати властивість контракту, що дозволить повторно голосувати за роздачу токенів на одну і ту ж адресу.
Контракт повинен враховувати, що кількість адрес, котрі голосують може бути парною чи непарною.

contract adress : 0x956300045FDF3705354e1CC8943Ed4e8e1D12AB8

[link](https://testnet.routescan.io/address/0x956300045FDF3705354e1CC8943Ed4e8e1D12AB8/contract/11155111/code?chainid=11155111)

# Web3 practise 

## first task ✔️

task : Навчитися визначати баланс ETH на заданій адресі.

[link](./Web3/first_second/index.js)

## second task ✔️

task : Навчитися передавати ETH програмно.

[link](./Web3/first_second/index.js)

## third task ✔️

task : Реалізувати можливість деплойменту контракту з початковими параметрами переданими в конструктор.

[link](/Web3/third_fourth_fifth/deploy.js)

## fouth task ✔️

task : Реалізувати простий скрипт розподілення ERC-20 токенів від імені власника (на вході масив з адресами і кількістю токенів для кожної адреси).

[linlk](/Web3/third_fourth_fifth/script.js)

## fifth task ✔️

task : Написати скрипт визначення балансу ERC-20 токенів заданого контракту на адресі (списку адрес).

[linlk](/Web3/third_fourth_fifth/script.js)
