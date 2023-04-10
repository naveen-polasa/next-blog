import Link from "next/link";

function Home() {
  return (
    <div className="max-w-7xl mx-auto md:flex items-center justify-around gap-x-12 lg:gap-x-3 py-16 px-5 min-h-[calc(100vh-9.4rem)]">
      <article className="md:w-[77%] lg:w-[44%] ">
        <h1 className="text-3xl font-bold py-8">
          Design Your <br />
          Comfort Zone
        </h1>
        <p className="md:text-lg lg:text-xl lg:py-4 md:font-normal md:opacity-75 lg:pr-16 pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magnam
          aperiam odio sunt quia consequuntur corporis, pariatur rem dolor.
          Quaerat, veniam. Quae animi consequuntur, odio laudantium quos
          pariatur vel unde dolor fugit vitae!
        </p>
        <Link href="/products">
          <button className="py-2 px-6 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl">
            Shop Now
          </button>
        </Link>
      </article>
      <article className="hidden lg:inline-block">
        {/* <img
          src={hero}
          alt="table"
          className="w-96 lg:w-[31rem] lg:h-[29rem] mx-auto   rounded-xl mb-6"
        /> */}
      </article>
    </div>
  );
}

export { Home };
