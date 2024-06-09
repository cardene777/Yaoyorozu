<p align="center">
  <a href="https://layerzero.network">
    <img alt="LayerZero" style="width: 400px" src="https://docs.layerzero.network/img/LayerZero_Logo_White.svg"/>
  </a>
</p>

<p align="center">
  <a href="https://layerzero.network" style="color: #a77dff">Homepage</a> | <a href="https://docs.layerzero.network/" style="color: #a77dff">Docs</a> | <a href="https://layerzero.network/developers" style="color: #a77dff">Developers</a>
</p>

<h1 align="center">Yaoyorozu</h1>

<p align="center">Cross-chain trading platform on <strong>Japan Open Chain</strong>.</p>

## 1) Developing Contracts

#### Installing dependencies

```bash
bun install
```

#### Compiling contracts

```bash
bun compile
```

If you prefer one over the other, you can use the tooling-specific commands:

```bash
pnpm compile:forge
pnpm compile:hardhat
```

#### Running tests

```bash
bun test
```

If you prefer one over the other, you can use the tooling-specific commands:

```bash
pnpm test:forge
pnpm test:hardhat
```

## 2) Deploying Contracts

Set up deployer wallet/account:

- Rename `.env.example` -> `.env`
- Choose your preferred means of setting up your deployer wallet/account:

```bash
MNEMONIC="test test test test test test test test test test test junk"
or...
PRIVATE_KEY="0xabc...def"
```

- Fund this address with the corresponding chain's native tokens you want to deploy to.

To deploy your contracts to your desired blockchains, run the following command in your project's folder:

```bash
npx hardhat lz:deploy
```

```bash
yarn deploy --network japan_open_chain_test --tags SimpleAccountFactory
```

| Contract Name | Chain | Network | Contract Address | Explorer |
| -------- | --------------- | -------- | ----------------- | -------- |
| Yaoyorozu | JOC | Testnet | `0xAc0DE957C2474519744270f47DEef57FFF088F60` | [https://explorer.testnet.japanopenchain.org/address/0xAc0DE957C2474519744270f47DEef57FFF088F60](https://explorer.testnet.japanopenchain.org/address/0xAc0DE957C2474519744270f47DEef57FFF088F60) |
| Yaoyorozu | Sepolia | Testnet | `0xAA9cAfF807A0981145b351E61E9766254de46A5F` | [https://sepolia.etherscan.io/address/0xAA9cAfF807A0981145b351E61E9766254de46A5F](https://sepolia.etherscan.io/address/0xAA9cAfF807A0981145b351E61E9766254de46A5F) |
| EntryPoint | JOC | Testnet | `0x95a8eD5026AC829C4F02c051C2553891c9fD98C7` | [https://explorer.testnet.japanopenchain.org/address/0x95a8eD5026AC829C4F02c051C2553891c9fD98C7](https://explorer.testnet.japanopenchain.org/address/0x95a8eD5026AC829C4F02c051C2553891c9fD98C7) |
| SimpleAccountFactory | JOC | Testnet | `0x9A898F020Db575A5Dd951189B8D44f6e4d84FF5B` | [https://explorer.testnet.japanopenchain.org/address/0x9A898F020Db575A5Dd951189B8D44f6e4d84FF5B](https://explorer.testnet.japanopenchain.org/address/0x9A898F020Db575A5Dd951189B8D44f6e4d84FF5B) |
| EntryPoint | Sepolia | Testnet | `0x57A1E4633303C2406c48313C1a4D13a8c4bc6E4a` | [https://sepolia.etherscan.io/address/0x57A1E4633303C2406c48313C1a4D13a8c4bc6E4a](https://sepolia.etherscan.io/address/0x57A1E4633303C2406c48313C1a4D13a8c4bc6E4a) |
| SimpleAccountFactory | Sepolia | Testnet | `0x098624CA6c32010704F1054969749492030439E7` | [https://sepolia.etherscan.io/address/0x098624CA6c32010704F1054969749492030439E7](https://sepolia.etherscan.io/address/0x098624CA6c32010704F1054969749492030439E7) |
