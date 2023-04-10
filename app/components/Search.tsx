"use client";
import { ChangeEvent, useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form className="text-center my-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="w-[80%] md:w-[30rem] h-12 md:h-14 border-2 rounded-xl px-4 text-lg"
        />
      </form>
    </div>
  );
}
