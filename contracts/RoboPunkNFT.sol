pragma solidity ^0.8.4;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract RoboPunkNFT is ERC721, Ownable{
    uint256 public minPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721 ('RoboPuntNFT', 'RP'){
        minPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
    }

    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner{
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner{
        baseTokenUri = baseTokenUri_;
    }

    function tokenUri(uint256 tokenID_) public view returns(string memory){
        require(_exists(tokenID_), 'Token does not exist');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenID_), ".json" ));
    }

    function withdraw() external onlyOwner{
        (bool success, ) = withdrawWallet.call{value: address(this).balance}('');
        require(success, 'Withdraw failed');
        }

     function mint (uint256 quantity_) public payable{
            require(isPublicMintEnabled, 'Public minting is not enabled');
            require(msg.value >= minPrice * quantity_, 'Insufficient funds');
            require(totalSupply + quantity_ <= maxSupply, 'Max supply reached');
            require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'Max per wallet reached');

            for (uint256 i = 0; i < quantity_; i++){
               uint256 newTokenId = totalSupply + 1;
               totalSupply++;
                _safeMint(msg.sender, newTokenId);
            }
    }
}