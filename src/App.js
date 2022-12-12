import React, { useEffect, useState } from "react";
import Web3 from 'web3';
import { NFTList } from 'src/components/NFTList';
import './App.css';

const App = () => {
  const [web3Provider, setWeb3Provider] = useState(false);
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  useEffect(() => {
    const initializeWeb3 = async () => {
      // Check if MetaMask is installed and connected
      if (window.ethereum) {
        const isConnected = await window.ethereum.isConnected();
        if (isConnected) {
          setWeb3Provider(new Web3(window.ethereum));
          setIsMetaMaskConnected(true);
        }
      }
    };
    initializeWeb3();
  }, []);

  return (
    <div className="app">
      {isMetaMaskConnected ? (
        <NFTList web3Provider={web3Provider} />
      ) : (
        <p>Please connect to MetaMask to view your NFTs.</p>
      )}
    </div>
  );
};

export default App;