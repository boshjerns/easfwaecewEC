import React, { useState, useEffect } from 'react';
import { useWeb3 } from './utils/web3';
import styles from './styles.css';

const NFT = ({ contractAddress, tokenId }) => {
  const [tokenData, setTokenData] = useState(null);
  const { web3, account } = useWeb3();

  useEffect(() => {
    if (!web3 || !account) {
      return;
    }

    const contract = new web3.eth.Contract(ABI, contractAddress);

    contract.methods.tokenURI(tokenId).call((error, tokenURI) => {
      if (error) {
        console.error(error);
        return;
      }

      // Fetch the token metadata from the token URI
      fetch(tokenURI)
        .then((response) => response.json())
        .then((data) => setTokenData(data));
    });
  }, [web3, account, contractAddress, tokenId]);

  if (!tokenData) {
    return <p>Loading NFT data...</p>;
  }

  // Render the token metadata in a beautiful format using a card
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{tokenData.name}</h2>
      <img
        src={tokenData.image_url}
        alt={`${tokenData.name} NFT`}
        className={styles.image}
      />
      <p className={styles.description}>{tokenData.description}</p>
    </div>
  );
};

export default NFT;
