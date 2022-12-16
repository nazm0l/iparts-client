// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import CheckoutForm from "./CheckoutForm";

// const stripePromise = loadStripe("pk_test_51L6hwKJ8Ct923iO6tyFnGymza3pDAu8CJzRNMhrdQxrnisvS6pAVRnaIbVd0hgxn9EpQfubYArzMbRPty9pGxBKk00nMe1zdBg");

// const Payment = () => {
//   const { _id } = useParams();
//   const [order, setOrder] = useState({});

//   useEffect(() => {
//     const url = `https://iparts-server.vercel.app/userorders/${_id}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setOrder(data));
//   }, [_id]);

//   return (
//     <div class="hero min-h-screen bg-base-200">
//         <div class="card w-full max-w-sm shadow-2xl bg-base-100">
//           <div class="card-body">
//             <h2 className="text-sm text-primary">Hello, {order.name} </h2>
//             <h2 className="text-xl">Payment for {order.productName} </h2>
//             <h2 className="text-xl">Payment Amount - ${order.totalPrice} </h2>
//             <div class="form-control mt-6">
//             <Elements stripe={stripePromise}>
//                         <CheckoutForm order={order} />
//             </Elements>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default Payment;
