import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({part}) => {


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
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="parts"
            className='pl-5 w-[200px]'
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p><span className="font-semibold">Price:</span> {price}</p>
          <p><span className="font-semibold">Min. Order:</span> {minimumQuantity}</p>
          <p><span className="font-semibold">Avail. Quantity:</span> {availableQuantity}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>purchaseParts(_id)} className="btn btn-sm btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Product;