import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface user {
  id: string;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: user[] = await res.json();

  const sortedUsers = sort(users).asc((user) => {
    switch (sortOrder) {
      case "id":
        return user.id;
      case "name":
        return user.name;
      case "email":
        return user.email;
      default:
        return user.id; // Default sorting by id
    }
  });

  return (
    <table className="w-full table-auto  border border-gray-400 text-center">
      <thead>
        <tr>
          <th className="border border-gray-300 py-3 ">
            <Link href={"/users?sortOrder=id"}>Id</Link>
          </th>
          <th className="border border-gray-300 py-3 ">
            <Link href={"/users?sortOrder=name"}>Name</Link>
          </th>
          <th className="border border-gray-300 py-3">
            <Link href={"/users?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers?.length > 0 &&
          sortedUsers.map((user: user) => (
            <tr key={user.id}>
              <td key={user.id} className="border border-gray-300 py-3  px-2">
                {user.id}
              </td>
              <td key={user.name} className="border border-gray-300 py-3 ">
                {user.name}
              </td>
              <td key={user.email} className="border border-gray-300 py-3">
                {user.email}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default UserTable;
