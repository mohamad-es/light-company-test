import { Dispatch, SetStateAction } from "react";

type TWalletField = {
  chargeAmount: number;
  setChargeAmount: Dispatch<SetStateAction<number>>;
};

const WalletField = ({ chargeAmount, setChargeAmount }: TWalletField) => {
  return (
    <div className="mb-4">
      <input
        type="number"
        className="input input-bordered w-full"
        placeholder="Enter amount to charge"
        value={chargeAmount}
        onChange={(e) => setChargeAmount(Number(e.target.value))}
      />
    </div>
  );
};

export default WalletField;
