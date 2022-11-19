import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  //treatment is just another name of appointmentsOptions to name,slots,_id
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(authContext);

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

    console.log(booking);

    //TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        } else {
          alert(data.message);
        }
      });

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
              defaultValue={user?.displayName}
              name="fullname"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />
            <input
              defaultValue={user?.email}
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
