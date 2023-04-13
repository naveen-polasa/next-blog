import { getProducts } from "@/lib/getProducts";
import NotFound from "../components/NotFound";
import Product from "../components/Product";
import Search from "../components/Search";
import axios from "axios";

export default async function Products() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return (
    <>
      <section className="max-w-7xl mx-auto min-h-[calc(100vh-8rem)] ">
        <div>
          <Search />
        </div>
        {!data.length && <NotFound />}
        <div className=" max-w-6xl mx-auto flex flex-wrap justify-center md:justify-around lg:justify-around  gap-x-8 gap-y-5 mt-8">
          {data.length > 0 &&
            data?.map((product: ResType) => {
              return <Product key={product.id} {...product}></Product>;
            })}
        </div>
      </section>
    </>
  );
}
