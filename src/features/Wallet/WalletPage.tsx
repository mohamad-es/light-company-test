import { useState } from "react";

const WalletPage = () => {
  // State to store wallet balance
  const [balance, setBalance] = useState<number>(0);
  // State to handle charging amount
  const [chargeAmount, setChargeAmount] = useState<number>(0);

  // Function to handle charging the wallet
  const handleChargeWallet = () => {
    setBalance(balance + chargeAmount);
    setChargeAmount(0); // Reset charge amount after adding
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Wallet</h2>

      {/* Display Current Balance */}
      <div className="mb-4">
        <p className="text-lg">Current Balance: ${balance.toFixed(2)}</p>
      </div>

      {/* Input to specify charging amount */}
      <div className="mb-4">
        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="Enter amount to charge"
          value={chargeAmount}
          onChange={(e) => setChargeAmount(Number(e.target.value))}
        />
      </div>

      {/* Button to charge the wallet */}
      <div>
        <button className="btn btn-primary w-full" onClick={handleChargeWallet} disabled={chargeAmount <= 0}>
          Charge Wallet
        </button>
      </div>
    </div>
  );
};

export default WalletPage;
