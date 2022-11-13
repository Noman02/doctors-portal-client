import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentOption = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try later"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions justify-center">
          <PrimaryButton>BOOK APPOINTMENT</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
