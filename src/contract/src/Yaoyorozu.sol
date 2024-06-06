// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import { OFT } from "@LayerZero-v2/packages/layerzero-v2/evm/oapp/contracts/oft/OFT.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Yaoyorozu is Ownable, OFT {
    /**
     * @dev Constructor for the MyOFT contract.
     * @param _name The name of the MyOFT.
     * @param _symbol The symbol of the MyOFT.
     * @param _lzEndpoint The LayerZero endpoint address.
     * @param _delegate The delegate capable of making OApp configurations inside of the endpoint.
     */
    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate,
        address _initialOwner
    ) OFT(_name, _symbol, _lzEndpoint, _delegate) Ownable(_initialOwner) {}
}
