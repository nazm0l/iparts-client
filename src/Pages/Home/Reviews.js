import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://vast-savannah-22839.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-10 bg-gray-100 py-5 px-5 rounded-lg">
      <h2 className="text-3xl font-bold text-center">Reviews</h2>
      <div className="divider"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
        {reviews.slice(0, 3).map((review, index) => (
          <div class="card w-96 bg-base-100 shadow-xl text-center">
            <div class="card-body">
              <h2 class="text-2xl font-bold"> Ratings: {review.ratings}</h2>
              <p>{review.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
