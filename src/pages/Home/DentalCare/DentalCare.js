import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const DentalCare = () => {
  return (
    <section>
      <div className="hero min-h-screen mt-14">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="w-1/2 lg:h-[576px] rounded-lg shadow-2xl"
            alt=""
          />
          <div className="lg:ml-24 lg:mr-40">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              Tooth decay and gum disease are caused by plaque, a sticky
              combination of bacteria and food. Plaque begins to build up on
              teeth within a few minutes after eating. If teeth are not cleaned
              well each day, plaque will lead to tooth decay or gum disease.
            </p>
            <PrimaryButton>Booking</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalCare;
