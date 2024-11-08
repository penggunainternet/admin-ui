import React from "react";

const Card = ({ title, children }) => {
  return (
    <>
      {title && <div className="text-lg text-gray-02 mb-2">{title}</div>}
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl">{children}</div>
    </>
  );
};

export default Card;
