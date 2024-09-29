import React from "react";
import { Link } from "react-router-dom";

const CategoryBox = ({ id, name, href, img, height }) => {
  return (
    <Link to={href} className="block">
      <div
        className={`${
          height || "h-96"
        } bg-white shadow rounded overflow-hidden relative group`}
      >
        <img
          src={img}
          alt={name}
          className="group-hover:scale-110 w-full h-full transition-transform duration-300 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="right-0 bottom-0 left-0 absolute p-4">
          <h3 className="font-semibold text-white text-xl">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryBox;

