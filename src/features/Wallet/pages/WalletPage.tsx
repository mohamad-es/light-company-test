import WalletField from "../components/WalletField";
import { useWalletAmount } from "../hooks/useWalletAmount";

const WalletPage = () => {
  const { handleChargeWallet, balance, chargeAmount, setChargeAmount } = useWalletAmount();

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 m-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Wallet</h2>

      {/* Display Current Balance */}
      <div className="mb-4">
        <p className="text-lg">Current Balance: ${balance.toFixed(2)}</p>
      </div>

      {/* Input to specify charging amount */}
      <WalletField chargeAmount={chargeAmount} setChargeAmount={setChargeAmount} />
      {/* Button to charge the wallet */}
      <div>
        <button className="btn custom-primary-btn w-full" onClick={handleChargeWallet} disabled={chargeAmount <= 0}>
          Charge Wallet
        </button>
      </div>
    </div>
  );
};

export default WalletPage;
