// https://github.com/wevm/viem/blob/main/src/chains/index.ts
// https://viem.sh/docs/chains/introduction

import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { jocTestnet } from "@/lib/customChains";

export const config = createConfig({
  chains: [sepolia],
  transports: {
    [jocTestnet.id]: http(),
    [sepolia.id]: http(),
  },
});
