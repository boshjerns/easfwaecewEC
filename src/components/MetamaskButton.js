import React from 'react';

const MetamaskButton = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const isConnected = await window.ethereum.isConnected();
        setIsConnected(isConnected);
      }
    };
    checkConnection();
  }, []);

  return isConnected ? (
    <p>MetaMask is connected.</p>
  ) : (
    <button
      onClick={() => {
        window.ethereum.enable();
      }}
    >
      Connect to MetaMask
    </button>
  );
};

export default MetamaskButton;
