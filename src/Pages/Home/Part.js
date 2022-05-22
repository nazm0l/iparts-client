import React from "react";

const Part = ({ part }) => {
  const {
    name,
    picture,
    price,
    minimumQuantity,
    availableQuantity,
    description,
  } = part;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          alt="parts"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p><span className="font-semibold">Price:</span> {price}</p>
        <p><span className="font-semibold">Minimum Order:</span> {minimumQuantity}</p>
        <p><span className="font-semibold">Available Quantity:</span> {availableQuantity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
