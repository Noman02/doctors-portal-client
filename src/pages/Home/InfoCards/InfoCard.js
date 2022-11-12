import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, bgClass, icon } = card;
  return (
    <section>
      <div
        className={`card text-white h-48 p-6 md:card-side shadow-xl ${bgClass}`}
      >
        <figure>
          <img src={icon} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
