// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import {ERC20} from "./ERC20.sol";
import "./HederaTokenService.sol";
import "./HederaResponseCodes.sol";

contract Vault is HederaTokenService {

    /// Associates the token with the vault contract
    /// @param tokenAddr The address of the token to associate
    /// @return responseCode The response code of the Hedera Token Service
    function associateFungibleToken(address tokenAddr) external  returns (int){
        int responseCode = HederaTokenService.associateToken(address(this), tokenAddr);

        require(responseCode == HederaResponseCodes.SUCCESS, "Associate Token failed");

        return responseCode;
    }

    /// Function to withdraw tokens from the vault contract
    function withdraw(address tokenId) public 
    {
        ERC20(tokenId).transfer(msg.sender, ERC20(tokenId).balanceOf(address(this)));
    }

}