import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride is a naturally occurring mineral that helps build strong teeth and prevent cavities.",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "If you have  symptoms  , you might have pain in your teeth or . Cavity pain  depends on the extent of your cavity .",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "More and more people are paying for brighter, whiter teeth. But does teeth whitening work and is it safe?",
      icon: whitening,
    },
  ];
  return (
    <section>
      <div className="mt-20">
        <div className="text-center">
          <h2 className="text-primary font-bold">OUR SERVICES</h2>
          <h2 className="font-normal text-4xl mt-2">Service We Provide</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[34px] mt-12">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
