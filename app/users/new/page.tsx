"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserpage = () => {
  const router = useRouter();
  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-3"
      onClick={() => router.push("/users")}
    >
      Create New User
    </button>
  );
};

export default NewUserpage;
