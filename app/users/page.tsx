import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";
interface Props {
  searchParams: { sortOrder: string };
}
const Users = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
  return (
    <div className="w-100%">
      <h1>Users</h1>
      <div className="my-5">
        <Link
          href="/users/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
        >
          New User
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default Users;
