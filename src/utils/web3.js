import Web3 from 'web3';

export const NFT_CONTRACT_ABI = [
  // Array of contract ABI here
];

export const NFT_CONTRACT_ADDRESS = '0x219e1fd6701256920dB7a4A021ace7B84d1059e4';

export const INFURA_NODE_URL = 'https://mainnet.infura.io/v3/0348e5cae08944bd9eb663da5a1e3b4d';

export const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_NODE_URL));

export const NFTContract = new web3.eth.Contract(
  NFT_CONTRACT_ABI,
  NFT_CONTRACT_ADDRESS
);
