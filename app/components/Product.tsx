import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Product = ({ id, title, image, price }: ProdType) => {
  return (
    <article className="relative">
      <div>
        <img
          src={image}
          alt={title}
          className="w-80 h-72 p-1 rounded-xl border-2 border-slate-300"
        />
        <div className="opacity-0 hover:opacity-100 w-80 h-72 absolute top-0 left-0 flex justify-center items-center bg-black rounded-xl bg-opacity-40 duration-700">
          <Link href={`/products/${id}`}>
            <FaSearch
              size="33px"
              className="text-red-500 bg-red-200 w-12 h-12 p-2 rounded-full hover:opacity-100"
            />
          </Link>
        </div>
      </div>
      <footer className="flex justify-between py-3">
        <h5 className="text-lg capitalize truncate w-60">{title}</h5>
        <p className="font-mono text-red-400 text-lg">{price}</p>
      </footer>
    </article>
  );
};
export default Product;
