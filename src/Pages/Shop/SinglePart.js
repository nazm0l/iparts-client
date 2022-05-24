import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const SinglePart = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [part, setPart] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id, part]);

  const handlePurchase = (e) => {
    e.preventDefault();
    const address = e.target.address.value;
    const number = e.target.number.value;
    const quantity = e.target.quantity.value;

    const data = {
      name: user.displayName,
      email: user.email,
      productName: part.name,
      address: address,
      number: number,
      quantity: quantity,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    e.target.reset();

    const updateQuantity = parseInt(part.availableQuantity) - parseInt(quantity);
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updateQuantity }),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 my-20">
      <div>
          <h2 className="text-2xl text-center mb-5">Product Details</h2>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={part.picture} alt="parts" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{part.name}</h2>
            <p>{part.description}</p>
            <p>
              <span className="font-semibold">Price:</span> {part.price}
            </p>
            <p>
              <span className="font-semibold">Minimum Order:</span>{" "}
              {part.minimumQuantity}
            </p>
            <p>
              <span className="font-semibold">Available Quantity:</span>{" "}
              {part.availableQuantity}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <h2 className="text-2xl text-center mb-5">Order Details</h2>
        <div className="">
          <form onSubmit={handlePurchase}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                value={user?.displayName}
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                value={user?.email}
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full max-w-xs"
                name="address"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
                name="number"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                className="input input-bordered w-full max-w-xs"
                min={part.minimumQuantity}
                max={part.availableQuantity}
                name="quantity"
              />
            </div>
            <input
              className="btn w-full btn-outline max-w-xs text-white font-bold bg-primary mt-5"
              value="Purchase"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SinglePart;
