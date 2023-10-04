console.clear();
import { AccountId, PrivateKey, TokenAssociateTransaction, Client, AccountBalanceQuery } from "@hashgraph/sdk";
import { ethers } from "ethers";
import { createFungibleToken, createAccount, deployContract } from "./utils";

import { ERC20__factory } from '../typechain-types/factories/ERC20__factory';
import { Vault__factory } from '../typechain-types/factories/Vault__factory';

import { config } from "dotenv";

config();

// Provider to connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC_RELAY_URL!);

// Wallet to sign the transactions
const wallet = new ethers.Wallet(process.env.HEX_ENCODED_PRIVATE_KEY!, provider);

// Client to interact with the Hedera network
const client = Client.forTestnet();
const operatorPrKey = PrivateKey.fromStringECDSA(process.env.HEX_ENCODED_PRIVATE_KEY!);
const operatorAccountId = AccountId.fromString(process.env.OPERATOR_ID!);
client.setOperator(operatorAccountId, operatorPrKey);

async function main() {

    // Create a fungible token with the SDK
    const tokenId = await createFungibleToken("TestToken", "TT", operatorAccountId, operatorPrKey.publicKey, client, operatorPrKey);

    // Create an account for Alice with 10 hbar using the SDK
    const aliceKey = PrivateKey.generateED25519();
    const aliceAccountId = await createAccount(client, aliceKey, 10);
    console.log(`- Alice account id created: ${aliceAccountId!.toString()}`);

    // Take the address of the tokenId
    const tokenIdAddress = tokenId!.toSolidityAddress();
    console.log(`- tokenIdAddress`, tokenIdAddress);

    // We connect to the ERC20 contract using typechain
    const account = wallet.connect(provider);
    const accountAddress = account.address;
    console.log(`- accountAddress`, accountAddress);

    const contractERC20 = ERC20__factory.connect(
        tokenIdAddress,
        account
    );

    // We deploy the Vault contract using the SDK and take the address
    const contractVaultId = await deployContract(client, Vault__factory.bytecode, 4000000);
    const contractVaultAddress = contractVaultId!.toSolidityAddress();
    console.log(`- contractVaultId`, contractVaultId!.toString());

    // We connect to the Vault contract using typechain
    const contractVault = Vault__factory.connect(
        contractVaultAddress,
        wallet
    );

    // We set Alice as the operator, now she is the one interacting with the hedera network
    const aliceClient = client.setOperator(aliceAccountId!, aliceKey);

    // We associate the Alice account with the token
    const tokenAssociate = await new TokenAssociateTransaction()
        .setAccountId(aliceAccountId!)
        .setTokenIds([tokenId!])
        .execute(aliceClient);

    const tokenAssociateReceipt = await tokenAssociate.getReceipt(aliceClient);
    console.log(`- tokenAssociateReceipt ${tokenAssociateReceipt.status.toString()}`);

    const aliceAccountAddress = aliceAccountId!.toSolidityAddress();
    // We transfer 10 tokens to Alice using the ERC20 contract
    const transfer = await contractERC20.transfer(aliceAccountAddress, 10, { gasLimit: 1000000 })
    const transferReceiptWait = await transfer.wait();
    console.log(`- Transfer`, transferReceiptWait);

    // We check the balance tokenId from Alice using the SDK
    const balanceAliceNativeToken = new AccountBalanceQuery()
        .setAccountId(aliceAccountId!)

    const transactionQuery = await balanceAliceNativeToken.execute(client);
    const balanceTokenSDK = transactionQuery.tokens!.get(tokenId!);
    console.log("- Balance from Alice using the SDK", balanceTokenSDK.toString());

    // We check the balance tokenId from Alice using the ERC20 contract
    const balanceAliceERC20 = await contractERC20.balanceOf(aliceAccountAddress);
    console.log("- Balance from Alice using the ERC20", parseInt(balanceAliceERC20.toString()));

    // We associate the Vault contract with the token so we can transfer tokens to it
    const associate = await contractVault.associateFungibleToken(tokenIdAddress, { gasLimit: 1000000 })
    const associateReceipt = await associate.wait();
    console.log(`- Associate`, associateReceipt);

    // We deposit 1000 tokens to the Vault contract
    const deposit = await contractERC20.transfer(contractVaultAddress, 1000, { gasLimit: 1000000 })
    const depositReceipt = await deposit.wait();
    console.log(`- Deposit tokens to the Vault contract`, depositReceipt);

    // We check the balance of the Vault contract after the deposit
    let balanceVaultERC20 = await contractERC20.balanceOf(contractVaultAddress);
    console.log(`- Balance of the Vault contract before the withdraw`, parseInt(balanceVaultERC20.toString()));

    // We withdraw 100 tokens from the Vault contract
    const withdraw = await contractVault.withdraw(tokenIdAddress, { gasLimit: 1000000 })
    const withdrawReceipt = await withdraw.wait();
    console.log(`- Withdraw tokens from the Vault contract`, withdrawReceipt);

    // We check again the balance of the Vault contract after the withdraw to see if it has changed
    balanceVaultERC20 = await contractERC20.balanceOf(contractVaultAddress);
    console.log(`- Balance of the Vault contract after the withdraw`, parseInt(balanceVaultERC20.toString()));

}

main();