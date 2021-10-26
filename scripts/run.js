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
  const gameContract = await gameContractFactory.deploy(
    characterNames,
    characterImageURIs,
    characterHp,
    characterAttackDmg
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);
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
