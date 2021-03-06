import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

  return (
    <div className="container mx-auto my-10">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">All Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/myorder">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addreview">Add a Review</Link>
            </li>
            <li>
              <Link to="/dashboard/addparts">Add Parts</Link>
            </li>
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
