import { useEffect, useState } from "react";

export const useWalletAmount = () => {
  // Load initial balance from localStorage or default to 0
  const [balance, setBalance] = useState<number>(() => {
    const storedBalance = localStorage.getItem("wallet_balance");
    return storedBalance ? parseFloat(storedBalance) : 0;
  });

  // State to handle charging amount
  const [chargeAmount, setChargeAmount] = useState<number>(0);

  // Save balance to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wallet_balance", balance.toString());
  }, [balance]);

  // Function to handle charging the wallet
  const handleChargeWallet = () => {
    setBalance((prev) => prev + chargeAmount);
    setChargeAmount(0); // Reset charge amount after adding
  };

  return { handleChargeWallet, chargeAmount, balance, setChargeAmount };
};

