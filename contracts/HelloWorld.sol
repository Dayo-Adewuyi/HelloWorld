//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract HelloWorld {
    string private message;

    constructor (string memory _message) {
        _message = "Hello, world!";
        message = _message;
    }

    function speech() public view returns (string memory) {
        return message;
    }

    function setSpeech(string memory _message) public {
        message = _message;
    }
}
