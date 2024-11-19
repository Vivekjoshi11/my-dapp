// src/pages/index.tsx
"use client";

import { NextPage } from "next";
import WalletConnect from "../components/WalletConnect";
import MintCNFT from "../components/MintCNFT";

const Home: NextPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1 style={{ textAlign: "center" }}>My dApp</h1>
      <WalletConnect />
      <MintCNFT />
    </div>
  );
};

export default Home;
