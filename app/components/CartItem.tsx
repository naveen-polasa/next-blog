import { FaTrash } from "react-icons/fa";
import AmountButtons from "./AmountButtons";

const CartItem = ({ id, image, title, price, quantity: amount }: ResType) => {
  return (
    <div className="flex items-center justify-between md:justify-around px-5 py-2 my-3 mx-9 border rounded-xl">
      <div className="flex gap-x-4 m-3 items-center w-64 ">
        <img src={image} alt={title} className="rounded-xl w-16 h-16" />
        <div>
          <h5 className="capitalize font-semibold">{title}</h5>
          <h5 className="font-semibold"> {price}</h5>
        </div>
      </div>
      {/* <AmountButtons amount={amount} increase={increase} decrease={decrease} /> */}
      <h5 className="font-semibold hidden md:flex">{price * amount!}</h5>
      <button
        className="text-red-600 hidden sm:flex"
        // onClick={() => dispatch(removeItem(id))}
      >
        <FaTrash />
      </button>
    </div>
  );
};
export default CartItem;
