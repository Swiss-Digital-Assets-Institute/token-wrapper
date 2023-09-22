
import { AccountId, PrivateKey, TokenMintTransaction, TokenCreateTransaction, AccountCreateTransaction, Client, TokenType, TokenSupplyType, ContractCreateFlow, PublicKey, TokenId } from "@hashgraph/sdk";
import { config } from 'dotenv';
config();

/**
 * Function to create an account
 * @param client 
 * @param key 
 * @param initialBalance
 * @returns the account id
 */
export async function createAccount(client: Client, key: PrivateKey, initialBalance: number) {
    const createAccountTx = await new AccountCreateTransaction()
        .setKey(key)
        .setInitialBalance(initialBalance)
        .execute(client);

    const createAccountRx = await createAccountTx.getReceipt(client);
    return createAccountRx.accountId;
}

/**
 * Function to deploy a contract
 * @param client 
 * @param bytecode 
 * @param gas 
 * @returns the contract id
 */
export async function deployContract(client: Client, bytecode: string, gas: number) {
    const createContract = new ContractCreateFlow()
        .setGas(gas) // Increase if revert
        .setBytecode(bytecode);

    const createContractTx = await createContract.execute(client);
    const createContractRx = await createContractTx.getReceipt(client);
    const contractId = createContractRx.contractId;

    return contractId;

}

/**
 * Function to create a fungible token
 * @param tokenName 
 * @param tokenSymbol 
 * @param treasuryAccountId 
 * @param supplyPublicKey 
 * @param client 
 * @param privateKey 
 * @returns the token id
 */
export async function createFungibleToken(tokenName: string, tokenSymbol: string, treasuryAccountId: AccountId, supplyPublicKey: PublicKey, client: Client, privateKey: PrivateKey) {

    const tokenCreateTx = new TokenCreateTransaction()
        .setTokenName(tokenName)
        .setTokenSymbol(tokenSymbol)
        .setDecimals(0)
        .setInitialSupply(10000)
        .setTreasuryAccountId(treasuryAccountId)
        .setTokenType(TokenType.FungibleCommon)
        .setSupplyType(TokenSupplyType.Infinite)
        .setSupplyKey(supplyPublicKey)
        .freezeWith(client);


    const tokenCreateSign = await tokenCreateTx.sign(privateKey);
    const tokenCreateExec = await tokenCreateSign.execute(client);

    // Sign the transaction with the token adminKey and the token treasury account private key
    const tokenCreateRx = await tokenCreateExec.getReceipt(client);
    console.log(`- The token ID is: ${tokenCreateRx.tokenId!.toString()}`);
    const tokenId = tokenCreateRx.tokenId

    return tokenId;
}

/**
 * Function to create a non fungible token
 * @param tokenName 
 * @param tokenSymbol 
 * @param treasuryAccountId 
 * @param supplyPublicKey 
 * @param client 
 * @param privateKey 
 * @returns the token id
 */
export async function createNFT(tokenName: string, tokenSymbol: string, treasuryAccountId: AccountId, supplyPublicKey: PublicKey, client: Client, privateKey: PrivateKey) {

    const tokenCreateTx = await new TokenCreateTransaction()
        .setTokenName(tokenName)
        .setTokenSymbol(tokenSymbol)
        .setDecimals(0)
        .setInitialSupply(0)
        .setTreasuryAccountId(treasuryAccountId)
        .setTokenType(TokenType.NonFungibleUnique)
        .setSupplyType(TokenSupplyType.Finite)
        .setMaxSupply(10)
        .setSupplyKey(supplyPublicKey)
        .freezeWith(client);


    const tokenCreateSign = await tokenCreateTx.sign(privateKey);
    const tokenCreateExec = await tokenCreateSign.execute(client);

    // Sign the transaction with the token adminKey and the token treasury account private key
    const tokenCreateRx = await tokenCreateExec.getReceipt(client);

    console.log(`- The token ID is: ${tokenCreateRx.tokenId!.toString()}`);
    const tokenId = tokenCreateRx.tokenId

    return tokenId;
}

/**
 * Function to mint a token
 * @param tokenId 
 * @param client 
 * @param amount 
 * @param privatekey 
 * @returns the transaction status
 */
export async function mintToken(tokenId: TokenId, client: Client, amount: number, privatekey: PrivateKey) {
    const tokenMintTx = await new TokenMintTransaction()
        .setTokenId(tokenId)
    if (amount) {
        tokenMintTx.setAmount(amount * 1e8);
    } else {
        const metadata = new Uint8Array([0]);
        tokenMintTx.addMetadata(metadata)
    }
    tokenMintTx.freezeWith(client)
    tokenMintTx.sign(privatekey);

    const tokenMintExec = await tokenMintTx.execute(client);
    const tokenMintRx = await tokenMintExec.getReceipt(client);
    console.log(`- Token mint transaction status`, tokenMintRx.status.toString());

    return tokenMintRx;
}