// src/components/MintCNFT.tsx
"use client";

import { useState } from "react";

const MintCNFT: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  const mintCNFT = async (): Promise<void> => {
    setStatus("Minting...");

    try {
      // Dynamically import the library
      const { Connection } = await import("@solana/web3.js");
      const { Metaplex } = await import("@metaplex-foundation/js");

      const connection = new Connection("https://api.devnet.solana.com");
      const metaplex = new Metaplex(connection);

      const { nft } = await metaplex.nfts().create({
        name: "My Compressed NFT",
        uri: "https://example.com/metadata.json", // Replace with your metadata URI
        sellerFeeBasisPoints: 500, // 5% royalties
      });

      console.log("Minted cNFT:", nft);
      setStatus(`Minted cNFT with Address: ${nft.address.toString()}`);
    } catch (error) {
      console.error("Error minting cNFT:", error);
      setStatus("Minting failed.");
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h3>Mint cNFT</h3>
      <button onClick={mintCNFT}>Mint Compressed NFT</button>
      <p>{status}</p>
    </div>
  );
};

export default MintCNFT;
