// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFTGame is ERC721 {
  struct CharacterAttributes {
    uint characterIndex;
    string name;
    string imageURI;
    uint hp;
    uint maxHp;
    uint attackDamage; 
  } 
  CharacterAttributes[] defaultCharacters;
  using Counters for Counters.Counter;
  // The tokenId is the NFTs unique identifier
  Counters.Counter private _tokenIds;
  // Mapping of NFT tokenId to that NFT's attributes
  mapping(uint256 => CharacterAttributes) public nftHolderAttributes;
  // Mapping of an address (owner of token) to NFTs tokneId
  mapping(address => uint256) public nftHolders;

  constructor( 
    string[] memory characterNames,
    string[] memory characterImageURIs,
    uint[] memory characterHp,
    uint[] memory characterAttackDmg
    )    
    ERC721("Heros", "HERO") 
    {
      for (uint i = 0; i < characterNames.length; i++) {
        defaultCharacters.push(CharacterAttributes({
          characterIndex: i,
          name: characterNames[i],
          imageURI: characterImageURIs[i],
          hp: characterHp[i],
          maxHp: characterHp[i],
          attackDamage: characterAttackDmg[i]
        }));
        CharacterAttributes memory c = defaultCharacters[i];
        console.log("Done initializing %s w/ HP %s, img %s", c.name, c.hp, c.imageURI);
      }
      _tokenIds.increment();
  }
}