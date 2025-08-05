import React from "react";
interface Props {
  params: { id: number };
}
const UserPage = ({ params: { id } }: Props) => {
  return <div>user details {id}</div>;
};

export default UserPage;
