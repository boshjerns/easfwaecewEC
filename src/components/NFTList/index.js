import React from 'react';
import { useWeb3 } from './utils/web3';
import { NFT_CONTRACT_ABI } from './utils/web3';

function NFTList() {
  const { accounts, contract } = useWeb3(NFT_CONTRACT_ABI);

  if (!accounts || !contract) {
    return 'Loading...';
  }

  const nfts = contract.methods.getNFTsOfOwner(accounts[0]).call();

  return (
    <div>
      {nfts.map(nft => (
        <NFTCard key={nft.tokenId} nft={nft} />
      ))}
    </div>
  );
}

function NFTCard({ nft }) {
  return (
    <div>
      <h3>NFT #{nft.tokenId}</h3>
      <p>Name: {nft.name}</p>
      <p>Description: {nft.description}</p>
      <p>Image URL: {nft.imageUrl}</p>
    </div>
  );
}

export default NFTList;