<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">


<h3 align="center">Token Wrapper</h3>

  <p align="center">
    With this project you’ll learn how to make Hedera native tokens work just like Ethereum's ERC-20 tokens using the Hashio JSON-RPC instance.
    <br />
    <a href="https://docs.hedera.com/hedera/"><strong>Explore Hedera docs »</strong></a>
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#project-configuration">Project Configuration</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

In this tutorial you’ll learn how to make Hedera native tokens work just like Ethereum's ERC-20 tokens using the Hashio JSON-RPC instance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Hedera-sdk][Hedera.io]][Hedera-url]
* [![Typescript][Typescript.io]][Typescript-url]
* [![Solidity][Solidity.io]][Solidity-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- Basic understanding of [TypeScript](https://www.typescriptlang.org/) and [Solidity](https://docs.soliditylang.org/en/latest/).
- Get a [Hedera testnet account](https://portal.hedera.com/register).

### Installation

To make the setup process simple, clone the repo [repository](https://github.com/Swiss-Digital-Assets-Institute/token-wrapper).

Open a terminal window and navigate to your preferred directory where your project will live. Run the following command to clone the repo and install dependencies to your local machine:

```bash
git clone https://github.com/Swiss-Digital-Assets-Institute/token-wrapper.git
cd token-wrapper
npm install
```

### Project Configuration

In this step, you will update and configure your configuration file, so first rename the `.env.example` file to `.env`. and update the `.env` files with the following code.

**Environment Variables**

The `.env` file defines environment variables used in the project. The `OPERATOR_ID` and `OPERATOR_KEY` variables contains the *ECDSA* ***Account ID*** and ***DER Encoded Private Key,*** respectively for the Hedera Testnet account. The `HEX_ENCODED_PRIVATE_KEY` variable contains the ***HEX*** ***Encoded Private Key.***

The `JSON_RPC_RELAY_URL` variable contains the [HashIO](https://swirldslabs.com/hashio/) Testnet endpoint URL. This is the JSON-RPC instance that will submit the transactions to the Hedera test network to test, create and deploy your smart contract.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Now that you have your project set up and configured, we can run it. 

To do so, run the following command:

```bash
npm run compile
ts-node scripts/ERC20.ts
```

The first command compiles the smart contracts and generates the typescript bindings. The second command runs the ERC20 script.

To see the transactions on the Hedera network, you can use the [**Hedera Testnet Explorer**](https://hashscan.io/testnet).

<details>

<summary>console check ✅</summary>    

```bash

- The token ID is: 0.0.2576296
- Alice account id created: 0.0.2576297
- tokenIdAddress 0000000000000000000000000000000000274fa8
- accountAddress 0x398520c72090d7aaBe37e2c49ab1cAe8e662AEa0
- contractVaultId 0.0.2576303
- tokenAssociateReceipt SUCCESS
- Transfer {
  to: '0x0000000000000000000000000000000000274Fa8',
  from: '0x398520c72090d7aaBe37e2c49ab1cAe8e662AEa0',
  contractAddress: '0x0000000000000000000000000000000000274Fa8',
  transactionIndex: 1,
  gasUsed: BigNumber { _hex: '0x0c3500', _isBigNumber: true },
  logsBloom: '0x00000000000000040000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000080000000000000000000000008000000000000000000000000000000000000000000000000000020000000000000000000100000000000000000000010000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000080000000000000000',
  blockHash: '0xe9714ef3227d3c809981ce42eb81d9c0fcd8e8082f4931628ab1d296b3e0d5bd',
  transactionHash: '0x5b730724e757a45b21f833a2f8bf8ae510cb7fa61d5defcde68f4432dfcf9940',
  logs: [
    {
      transactionIndex: 1,
      blockNumber: 2490825,
      transactionHash: '0x5b730724e757a45b21f833a2f8bf8ae510cb7fa61d5defcde68f4432dfcf9940',
      address: '0x0000000000000000000000000000000000274Fa8',
      topics: [Array],
      data: '0x000000000000000000000000000000000000000000000000000000000000000a',
      logIndex: 0,
      blockHash: '0xe9714ef3227d3c809981ce42eb81d9c0fcd8e8082f4931628ab1d296b3e0d5bd'
    }
  ],
  blockNumber: 2490825,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { _hex: '0x0c3500', _isBigNumber: true },
  effectiveGasPrice: BigNumber { _hex: '0x03179fcad000', _isBigNumber: true },
  status: 1,
  type: 2,
  byzantium: true,
  events: [
    {
      transactionIndex: 1,
      blockNumber: 2490825,
      transactionHash: '0x5b730724e757a45b21f833a2f8bf8ae510cb7fa61d5defcde68f4432dfcf9940',
      address: '0x0000000000000000000000000000000000274Fa8',
      topics: [Array],
      data: '0x000000000000000000000000000000000000000000000000000000000000000a',
      logIndex: 0,
      blockHash: '0xe9714ef3227d3c809981ce42eb81d9c0fcd8e8082f4931628ab1d296b3e0d5bd',
      args: [Array],
      decode: [Function (anonymous)],
      event: 'Transfer',
      eventSignature: 'Transfer(address,address,uint256)',
      removeListener: [Function (anonymous)],
      getBlock: [Function (anonymous)],
      getTransaction: [Function (anonymous)],
      getTransactionReceipt: [Function (anonymous)]
    }
  ]
}
- Balance from Alice using the SDK 10
- Balance from Alice using the ERC20 10
- Associate {
  to: '0x0000000000000000000000000000000000274faF',
  from: '0x398520c72090d7aaBe37e2c49ab1cAe8e662AEa0',
  contractAddress: '0x0000000000000000000000000000000000274faF',
  transactionIndex: 0,
  gasUsed: BigNumber { _hex: '0x0c3500', _isBigNumber: true },
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  blockHash: '0x2a7393098da0e5f82da2230dfecb124b5be86d52bea2bb45924658c8c8a83ad3',
  transactionHash: '0x513f8ecbd25c8326c52c161e47d56f9f40d59e179ca670ec49bf0d316561d863',
  logs: [],
  blockNumber: 2490828,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { _hex: '0x0c3500', _isBigNumber: true },
  effectiveGasPrice: BigNumber { _hex: '0x03179fcad000', _isBigNumber: true },
  status: 1,
  type: 2,
  byzantium: true,
  events: []
}
- Deposit tokens to the Vault contract {
  to: '0x0000000000000000000000000000000000274Fa8',
  from: '0x398520c72090d7aaBe37e2c49ab1cAe8e662AEa0',
  contractAddress: '0x0000000000000000000000000000000000274Fa8',
  transactionIndex: 0,
  gasUsed: BigNumber { _hex: '0x0c3500', _isBigNumber: true },
  logsBloom: '0x00800000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000008000000000000000000000000000000000000000000000004000000000000000000000000100000000000000000000010000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000080000000000000000',
  blockHash: '0xb8553decd07d595c77eaa17c019e0f506ab0632da614971b006a6b1353d5e57a',
  transactionHash: '0x3b312bb272236d00e750294d81d3c7441208b84c9f6f97b2a25757d19c0b444f',
  logs: [
    {
      transactionIndex: 0,
      blockNumber: 2490831,
      transactionHash: '0x3b312bb272236d00e750294d81d3c7441208b84c9f6f97b2a25757d19c0b444f',
      address: '0x0000000000000000000000000000000000274Fa8',
      topics: [Array],
      data: '0x00000000000000000000000000000000000000000000000000000000000003e8',
      logIndex: 0,
      blockHash: '0xb8553decd07d595c77eaa17c019e0f506ab0632da614971b006a6b1353d5e57a'
    }
  ],
  blockNumber: 2490831,
  confirmations: 2,
  cumulativeGasUsed: BigNumber { _hex: '0x0c3500', _isBigNumber: true },
  effectiveGasPrice: BigNumber { _hex: '0x03179fcad000', _isBigNumber: true },
  status: 1,
  type: 2,
  byzantium: true,
  events: [
    {
      transactionIndex: 0,
      blockNumber: 2490831,
      transactionHash: '0x3b312bb272236d00e750294d81d3c7441208b84c9f6f97b2a25757d19c0b444f',
      address: '0x0000000000000000000000000000000000274Fa8',
      topics: [Array],
      data: '0x00000000000000000000000000000000000000000000000000000000000003e8',
      logIndex: 0,
      blockHash: '0xb8553decd07d595c77eaa17c019e0f506ab0632da614971b006a6b1353d5e57a',
      args: [Array],
      decode: [Function (anonymous)],
      event: 'Transfer',
      eventSignature: 'Transfer(address,address,uint256)',
      removeListener: [Function (anonymous)],
      getBlock: [Function (anonymous)],
      getTransaction: [Function (anonymous)],
      getTransactionReceipt: [Function (anonymous)]
    }
  ]
}
- Balance of the Vault contract before the withdraw 1000
- Withdraw tokens from the Vault contract {
  to: '0x0000000000000000000000000000000000274faF',
  from: '0x398520c72090d7aaBe37e2c49ab1cAe8e662AEa0',
  contractAddress: '0x0000000000000000000000000000000000274faF',
  transactionIndex: 0,
  gasUsed: BigNumber { _hex: '0x0c3500', _isBigNumber: true },
  logsBloom: '0x00800000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000008000000000000000000000000000000000000000000000004000000000000000000000000100000000000000000000010000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000080000000000000000',
  blockHash: '0x3de5a72720f9b221d5e436b2ccaf3b1219436d653a943528a20569ba94ee397b',
  transactionHash: '0x7a661f21f9dd4a99764b4f5f216f29ff5a20207cd4f57d0ca1a25f12af2e6d2b',
  logs: [
    {
      transactionIndex: 0,
      blockNumber: 2490835,
      transactionHash: '0x7a661f21f9dd4a99764b4f5f216f29ff5a20207cd4f57d0ca1a25f12af2e6d2b',
      address: '0x0000000000000000000000000000000000274Fa8',
      topics: [Array],
      data: '0x00000000000000000000000000000000000000000000000000000000000003e8',
      logIndex: 0,
      blockHash: '0x3de5a72720f9b221d5e436b2ccaf3b1219436d653a943528a20569ba94ee397b'
    }
  ],
  blockNumber: 2490835,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { _hex: '0x0c3500', _isBigNumber: true },
  effectiveGasPrice: BigNumber { _hex: '0x03179fcad000', _isBigNumber: true },
  status: 1,
  type: 2,
  byzantium: true,
  events: [
    {
      transactionIndex: 0,
      blockNumber: 2490835,
      transactionHash: '0x7a661f21f9dd4a99764b4f5f216f29ff5a20207cd4f57d0ca1a25f12af2e6d2b',
      address: '0x0000000000000000000000000000000000274Fa8',
      topics: [Array],
      data: '0x00000000000000000000000000000000000000000000000000000000000003e8',
      logIndex: 0,
      blockHash: '0x3de5a72720f9b221d5e436b2ccaf3b1219436d653a943528a20569ba94ee397b',
      removeListener: [Function (anonymous)],
      getBlock: [Function (anonymous)],
      getTransaction: [Function (anonymous)],
      getTransactionReceipt: [Function (anonymous)]
    }
  ]
}
- Balance of the Vault contract after the withdraw 0

```

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[Typescript-url]: https://www.typescriptlang.org/
[Typescript.io]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white

[Solidity-url]: https://soliditylang.org/
[Solidity.io]: https://img.shields.io/badge/Solidity-grey?style=for-the-badge&logo=solidity&logoColor=white

[Hedera-url]: https://docs.hedera.com/hedera/
[Hedera.io]: https://img.shields.io/badge/Hedera%20SDK-8259EF?style=for-the-badge&logo=hedera&logoColor=white

