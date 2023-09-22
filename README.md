# Token Wrapper

A simple script to use a Hedera native token as an ERC20 token.

## Usage

1. Make a .env file based on the provided .env.example and fill in the variables. You can get them from the [Hedera Portal](https://portal.hedera.com/).

2. To install the dependencies, run:
	```
	npm install
	```

3. To run the script:
	```
	ts-node scipts/ERC20.ts
	```


If you change something in the smart contract, you need to compile it again:
```
npm run compile
```