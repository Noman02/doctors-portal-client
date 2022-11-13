import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  //treatment is just another name of appointmentsOptions to name,slots,_id
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const fullname = form.fullname.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: fullname,
      slot,
      email,
      phone,
    };

    //TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast

    setTreatment(null);

    console.log(booking);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 mt-10"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="fullname"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input type="submit" value="Submit" className="btn btn-accent" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
