import assert from 'assert'

import { type DeployFunction } from 'hardhat-deploy/types'

const contractName = 'SimpleAccountFactory'

const deploy: DeployFunction = async (hre) => {
    const { getNamedAccounts, deployments } = hre

    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    assert(deployer, 'Missing named deployer account')

    console.log(`Network: ${hre.network.name}`)
    console.log(`Deployer: ${deployer}`)

    // This is an external deployment pulled in from @layerzerolabs/lz-evm-sdk-v2
    //
    // @layerzerolabs/toolbox-hardhat takes care of plugging in the external deployments
    // from @layerzerolabs packages based on the configuration in your hardhat config
    //
    // For this to work correctly, your network config must define an eid property
    // set to `EndpointId` as defined in @layerzerolabs/lz-definitions
    //
    // For example:
    //
    // networks: {
    //   fuji: {
    //     ...
    //     eid: EndpointId.AVALANCHE_V2_TESTNET
    //   }
    // }

    const { address: entryPointAddress } = await deploy('EntryPoint', {
        from: deployer,
        args: [],
        log: true,
        skipIfAlreadyDeployed: false,
    })

    console.log(`Deployed contract: EntryPoint, network: ${hre.network.name}, address: ${entryPointAddress}`)

    const { address } = await deploy(contractName, {
        from: deployer,
        args: [entryPointAddress],
        log: true,
        skipIfAlreadyDeployed: false,
    })

    console.log(`Deployed contract: ${contractName}, network: ${hre.network.name}, address: ${address}`)

    const accountFactory = await hre.ethers.getContractAt('SimpleAccountFactory', address)

    const tx = await accountFactory.createAccount(deployer, 12345678)

    console.log(`Transaction hash: ${tx.hash}`)

    // トランザクションの完了を待つ
    const receipt = await tx.wait()

    console.log(`Transaction confirmed in block ${receipt.blockNumber}`)

    // 新しいアカウントのアドレスを取得する
    const newAccountAddress = await accountFactory.getAddress(deployer, 12345678)

    console.log(`New SimpleAccount address: ${newAccountAddress}`)
}

deploy.tags = [contractName]

export default deploy
