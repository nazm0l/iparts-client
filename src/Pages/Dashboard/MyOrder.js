import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userorders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user]);


    return (
        <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              myOrders.map((order, index) =><>
              <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.quantity}</td>
            <td><button className='btn btn-xs btn-primary text-white'>pay</button></td>
            <td><button className='btn btn-xs btn-secondary text-white'>delete</button></td>
          </tr>
              </>)
          }
        </tbody>
      </table>
    </div>
    );
};

export default MyOrder;