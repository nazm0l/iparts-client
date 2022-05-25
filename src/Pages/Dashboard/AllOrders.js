import React, { useEffect, useState } from "react";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Product Name</th>
            <th>Address</th>
            <th>Number</th>
            <th>Email</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
              orders.map((order, index) =>
              <tr key={order._id}>
            <th>{index + 1}</th>
            <td>{order.name}</td>
            <td>{order.productName}</td>
            <td>{order.address}</td>
            <td>{order.number}</td>
            <td>{order.email}</td>
            <td>{order.quantity}</td>
          </tr>)
          }
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Product Name</th>
            <th>Address</th>
            <th>Number</th>
            <th>Email</th>
            <th>Quantity</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AllOrders;
