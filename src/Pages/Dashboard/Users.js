import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Users = () => {

    const {data: users, isLoading} = useQuery('users',()=>fetch('http://localhost:5000/users').then(res =>res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              users.map((user, index) =>
              <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td><button className='btn btn-xs btn-primary text-white'>make admin</button></td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
    );
};

export default Users;