import {ethers} from "ethers";

export const getProvider = async () => {
    const PROVIDER = new ethers.providers.JsonRpcProvider(
    "https://rpc-1.testnet.japanopenchain.org:8545",
  );
  return PROVIDER;
};

export const getGasPrice = async () => {
  const PROVIDER = await getProvider();

  const minGasPrice = (await PROVIDER.getFeeData()).gasPrice;
  const gasPrice = BigInt(Math.floor(Number(minGasPrice) * 1.5));
    const fastGasPrice = BigInt(Math.floor(Number(gasPrice) * 2.0));

    console.log(`gasPrice: ${gasPrice}, fastGasPrice: ${fastGasPrice}`);

  return {
    gasPrice,
    fastGasPrice,
  };
};

export const calculateGasCost = (
  estimatedGas: bigint, // BigIntからbigintに変更
  gasPrice: bigint // BigIntからbigintに変更
) => {
  // 20%余裕を見たガス量
  const gasLimit = (estimatedGas * BigInt(150)) / BigInt(100); // 150nと100nをBigInt関数を使用して変更

  // 見積もったガス代を計算（ガス量 * ガス価格）
  const estimatedCost = gasLimit * gasPrice; // 問題なし

//   // 見積もったコストをMaticに変換し、少数第3位まででフォーマット
//   const estimatedCostInMatic = ethers.formatEther(estimatedCost.toString()); // estimatedCostを文字列に変換

//   // 少数第3位までにフォーマット
//   const formattedCost = Number(parseFloat(estimatedCostInMatic).toFixed(3));

  return estimatedCost;
};
