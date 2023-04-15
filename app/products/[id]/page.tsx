import AddToCart from "@/app/components/AddToCart";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params }: { params: { id: number } }) {
  const { data } = await axios(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const {
    category,
    description,
    id: productId,
    image,
    price,
    rating,
    title,
  } = data;

  return (
    <section>
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-9rem)]">
        <Link href="/products">
          <button className="py-2 my-9 px-4 mx-5 mt-4 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-xl">
            Products
          </button>
        </Link>
        <div className="px-5 py-4 lg:flex">
          <section className="md:w-[66%] md:mx-auto lg:mx-0">
            <img
              src={image}
              alt={title}
              className="w-[94%] p-5 sm:w-[80%] mx-auto md:w-[30rem] md:h-[25rem] h-96 ms:mx-3  lg:mx-0 my-3 rounded-2xl"
            />
          </section>
          <div className="md:w-[60%] md:mx-auto">
            <h2 className="text-xl capitalize font-semibold py-2">{title}</h2>
            <div>
              <p>
                <span className="font-semibold text-slate-800 w-16 inline-block">
                  Rating :
                </span>
                {rating?.rate} / 5.0 ( {rating?.count} customer reviews)
              </p>
            </div>
            <h5 className="text-red-700 font-semibold py-2">
              {(price)}
            </h5>
            <p className="py-2 lg:opacity-75">{description}</p>
            <div className="flex flex-col gap-y-3 py-2 ">
              <p>
                <span className="font-semibold text-slate-800 w-32 inline-block">
                  Available :
                </span>
                In Stock
              </p>
              <p>
                <span className="font-semibold text-slate-800 w-32 inline-block">
                  Product Id :
                </span>
                {productId}
              </p>
              <p>
                <span className="font-semibold text-slate-800 w-32 inline-block">
                  Category :
                </span>
                {category}
              </p>
            </div>
            <hr />
            <AddToCart product={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
