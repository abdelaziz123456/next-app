import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <ul className="flex justify-between gap-5 bg-slate-300 p-5">
      <li>
        <Link href={"/users"}>Users Page</Link>
      </li>
      <li>
        <Link href={"/admin"}>Admin Page</Link>
      </li>
      <li>
        <Link href={"/products"}>Products Page</Link>
      </li>
    </ul>
  );
};

export default NavBar;
