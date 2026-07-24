'use client';

import { useState } from 'react';

export default function WalletConnect() {
  const [address, setAddress] = useState('');

  async function connect() {
    if (!window.ethereum) {
      alert('Install MetaMask to connect your wallet');
      return;
    }

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setAddress(accounts[0]);
  }

  return (
    <button
      onClick={connect}
      className="rounded-full bg-white text-black px-6 py-3 font-semibold"
    >
      {address
        ? `${address.slice(0, 6)}...${address.slice(-4)}`
        : 'Connect Wallet'}
    </button>
  );
}
