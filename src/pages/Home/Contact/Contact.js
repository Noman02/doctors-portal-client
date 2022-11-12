import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="text-center mt-24"
    >
      <div className="mt-16">
        <h4 className="font-bold text-xl text-primary">Contact Us</h4>
        <h2 className="text-4xl text-white">
          Stay Connected With <us></us>
        </h2>
        <form>
          <div className="mb-6">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs mt-10"
            />
            <br />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="input input-bordered input-primary w-full max-w-xs lg:w-96 mt-5"
            />
            <br />
            <textarea
              className="textarea textarea-primary w-1/4 h-36 mt-5"
              placeholder="Type Here"
            ></textarea>
          </div>
          <div className="pb-12">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
