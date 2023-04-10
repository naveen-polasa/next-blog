import { Inter } from "next/font/google";
import Form from "./components/Form";
import { Home as HomePage } from "./components/Home";

export default function Home() {
  return (
    <main className="mx-auto p-3">
      {/* <Form /> */}
      <HomePage />
    </main>
  );
}
