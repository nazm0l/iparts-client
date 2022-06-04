import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

const Part = ({ part }) => {
  const {
    _id,
    name,
    picture,
    price,
    minimumQuantity,
    availableQuantity,
    description,
  } = part;

  const navigate = useNavigate();

  const purchaseParts = (_id) =>{
      navigate(`/shop/${_id}`)
  }

  return (
    <motion.div initial={{x:-50, opacity:0.5}} animate={{x:0, opacity:1}} transition={{ duration: 0.5 }} className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={picture}
          alt="parts"
          className="pl-5 w-[200px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p><span className="font-semibold">Price:</span> {price}</p>
        <p><span className="font-semibold">Minimum Order:</span> {minimumQuantity}</p>
        <p><span className="font-semibold">Available Quantity:</span> {availableQuantity}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>purchaseParts(_id)} className="btn btn-sm btn-primary">Purchase</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Part;
