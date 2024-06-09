import { defineChain } from "viem";

export const jocTestnet = defineChain({
  id: 10081,
  name: "Japan Open Chain (Testnet)",
  nativeCurrency: {
    decimals: 18,
    name: "Japan Open Chain Testnet",
    symbol: "JOCT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-1.testnet.japanopenchain.org:8545"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "	https://explorer.testnet.japanopenchain.org",
    },
  },
//   contracts: {
//     multicall3: {
//       address: "0xcA11bde05977b3631167028862bE2a173976CA11",
//       blockCreated: 5882,
//     },
//   },
});
