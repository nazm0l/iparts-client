import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/userorders?email=${user.email}`,{
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => {

        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/');
        }

        return res.json()})
      .then((data) => setMyOrders(data));
  }, [user, navigate]);


    return (
        <div className="overflow-x-auto">
      <table className="table table-compact w-full">
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
              myOrders.map((order, index) =>
              <tr key={order._id}>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.quantity}</td>
            <td><button className='btn btn-xs btn-primary text-white'>pay</button></td>
            <td><button className='btn btn-xs btn-secondary text-white'>delete</button></td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
    );
};

export default MyOrder;