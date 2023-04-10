"use client";

import { ChangeEvent, FormEvent, useState } from "react";

function Form() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  };
  return (
    <div className="w-96 mx-auto">
      <form className="flex gap-1 items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="w-96 h-10 rounded-md px-2 text-2xl"
        />
        <button
          type="submit"
          className="text-white py-1.5 text-2xl rounded-md px-6 border-2"
        >
          Add
        </button>
      </form>
      <div>
        {tasks.map((task, i) => {
          return (
            <p key={i} className="text-white">
              {task}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Form;
