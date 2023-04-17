import { FaMinus, FaPlus } from "react-icons/fa";

type BtnType = {
  amount: number;
  increase: () => {};
  decrease: () => {};
};
const AmountButtons = ({ amount, increase, decrease }: BtnType) => {
  return (
    <div className="flex gap-x-4">
      <button type="button" onClick={decrease}>
        <FaMinus size={23} />
      </button>
      <h2 className="text-3xl font-bold">{amount}</h2>
      <button type="button" onClick={increase}>
        <FaPlus size={23} />
      </button>
    </div>
  );
};
export default AmountButtons;
