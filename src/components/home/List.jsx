import React from "react";
import { useNavigate } from "react-router-dom";

const List = ({ user }) => {
  const navigate = useNavigate();
  const lists = [
    { name: "Home", path: "/" },
    { name: "TV Shows", path: "/" },
    { name: "Movies", path: "/" },
    { name: "New & Popular", path: "/" },
    { name: "My List", path: "/my-list" },
    { name: "Browser by Languages", path: "/" },
  ];
  return (
    <>
      {user ? (
        <div className="flex gap-6 font-semibold">
          {lists.map((item, i) => (
            <ul
              key={i}
              className="cursor-pointer hover:text-gray-500"
              onClick={() => navigate(item.path)}
            >
              <li>{item.name}</li>
            </ul>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default List;
