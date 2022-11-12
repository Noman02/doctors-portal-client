import React from "react";

const Review = ({ review }) => {
  const { name, location, img, review: userReview } = review;
  return (
    <section>
      <div className="card shadow-xl">
        <div className="card-body">
          <p>{userReview}</p>
          <div className="card-actions flex items-center mt-9">
            <div className="avatar w-16">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="ml-6">
              <h3 className="font-semibold">{name}</h3>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
