// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.23;

import { Yaoyorozu } from "../Yaoyorozu.sol";

// @dev WARNING: This is for testing purposes only
contract YaoyorozuMock is Yaoyorozu {
    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate
    ) Yaoyorozu(_name, _symbol, _lzEndpoint, _delegate) {}

    function mint(address _to, uint256 _amount) public {
        _mint(_to, _amount);
    }
}
