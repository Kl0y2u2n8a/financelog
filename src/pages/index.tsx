import React from "react";
import TodoList from "./components/TodoList";


export default function Home() {
  return (
    <div className="container mx-auto p-8 h-full lg:h-screen w-full items-center text-center bg-gradient-to-r from-orange-200 via-lime-200 to-emerald-500">
      <title>Finance Log</title>
      <h1 className="text-2xl mb-4 text-black font-semibold">自分の家計簿</h1>
      <TodoList/>
    </div>
  )   
}
