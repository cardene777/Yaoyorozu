import { ethers } from "ethers";
import simpleAccountAbi from "@/utils/abi/SimpleAccountFactory.json";
import { getGasPrice } from "@/lib/gas";

const hashMail = async (mail: string): Promise<number> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(mail);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // Convert the hash array to a single large hex string
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Convert the hex string to a number
  let hashNumber = 0;
  for (let i = 0; i < hashHex.length; i++) {
    hashNumber =
      (hashNumber * 16 + parseInt(hashHex[i], 16)) % Number.MAX_SAFE_INTEGER;
  }

  return hashNumber;
};

export const createAccount = async (mail: string) => {
  // 環境変数から秘密鍵を取得
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as string;

  if (!privateKey) throw new Error("Invalid Privatekey");
  // const providerUrl = "https://rpc-1.testnet.japanopenchain.org:8545";
  const providerUrl = "https://rpc.sepolia.org";
  // https: const contractAddress = "0xAc0DE957C2474519744270f47DEef57FFF088F60";
  const contractAddress = "0x098624CA6c32010704F1054969749492030439E7";
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(
    contractAddress,
    simpleAccountAbi,
    wallet
  );

  if (!mail) {
    throw new Error("Missing parameters");
  }

  try {
    const salt = await hashMail(mail);
    const owner = wallet.address;
    const { fastGasPrice } = await getGasPrice();

    const tx = await contract.createAccount(owner, salt, {
      gasLimit: ethers.BigNumber.from("2000000"),
      gasPrice: fastGasPrice,
    });

    const receipt = await tx.wait();

    return receipt;
  } catch (error) {
    console.error("Transaction Error: ", error);
    throw error;
  }
};

export const getAccount = async (mail: string) => {
  // 環境変数から秘密鍵を取得
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as string;

  if (!privateKey) throw new Error("Invalid Privatekey");
  // const providerUrl = "https://rpc-1.testnet.japanopenchain.org:8545";
  const providerUrl = "https://rpc.sepolia.org";
  // https: const contractAddress = "0xAc0DE957C2474519744270f47DEef57FFF088F60";
  const contractAddress = "0x098624CA6c32010704F1054969749492030439E7";
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(
    contractAddress,
    simpleAccountAbi,
    wallet
  );

  if (!mail) {
    throw new Error("Missing parameters");
  }

  try {
    const salt = await hashMail(mail);
    const owner = wallet.address;

    const address = await contract.getAddress(owner, salt);

    console.log(`Contract Account Address: ${address}`);

    return address;
  } catch (error) {
    console.error("Transaction Error: ", error);
    throw error;
  }
};
