import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const SwipperTest = () => {


    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://vast-savannah-22839.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);


  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
          reviews.map(review =><>
          
            <SwiperSlide>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="mask mask-circle w-[50px] mt-5 ml-5"
                    src="https://api.lorem.space/image/movie?w=200&h=280"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{review.ratings}</h2>
                  <p>{review.description}</p>
                </div>
              </div>
            </SwiperSlide>
            </>)
      }
    </Swiper>
  );
};

export default SwipperTest;
