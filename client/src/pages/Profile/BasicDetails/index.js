import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";

function BasicDetails() {
  const { user } = useSelector((state) => state.users);
  return (
    <div>
      <div className="rounded bg-secondary text-white flex flex-col p-2 w-50">
        <div className="flex justify-between">
          <h1 className="text-md">Name</h1>
          <h1 className="text-md">{user.name}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-md">Email</h1>
          <h1 className="text-md">{user.email}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-md">Phone</h1>
          <h1 className="text-md">{user.phone}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-md">Role</h1>
          <h1 className="text-md uppercase">{user.role}</h1>
        </div>

        <div className="flex justify-between">
          <h1 className="text-md">Registered On</h1>
          <h1 className="text-md">{
            moment(user.createdAt).format("MMM Do YYYY, h:mm a")
          }</h1>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
