const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('NFTGame');
  const characterNames = ['Knight', 'Cowboy', 'Viking'];
  const characterImageURIs = [
    'https://cdn.pixabay.com/photo/2017/01/31/16/53/book-2025499_1280.png',
    'https://cdn.pixabay.com/photo/2017/01/31/23/55/cartoon-2028328_1280.png',
    'https://cdn.pixabay.com/photo/2019/03/05/19/56/axe-4036928_1280.png',
  ];
  const characterHp = [100, 200, 300];
  const characterAttackDmg = [100, 50, 25];
  const bossName = 'Big Boss';
  const bossImageURI =
    'https://cdn.pixabay.com/photo/2019/10/24/19/48/games-4575111_1280.png';
  const bossHp = 10000;
  const bossAttackDamage = 50;
  const gameContract = await gameContractFactory.deploy(
    characterNames,
    characterImageURIs,
    characterHp,
    characterAttackDmg,
    bossName,
    bossImageURI,
    bossHp,
    bossAttackDamage
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get me data inside the NFT with tokenId === 1
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log('Token URI:', returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
