export default function loading() {
  return (
    <section className="max-w-7xl mx-auto min-h-[calc(100vh-9rem)] flex justify-center items-center">
      <div className="text-center text-xl h-44 flex items-center gap-x-6 justify-center">
        <span className="animate-spin inline-block  h-12 w-12  rounded-full text-white border-4 border-red-300  border-t-red-500"></span>{" "}
        Loading...
      </div>
    </section>
  );
}