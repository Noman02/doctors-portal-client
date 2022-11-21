import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          // save doctor information to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-96 p-7">
      <h3 className="text-3xl">Add A Doctor</h3>
      <form onSubmit={handleSubmit(handleAddDoctor)} className="text-center">
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", {
              required: "name is required!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
        </div>
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Please set valid email!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.email && (
            <p className="text-red-600">{errors?.email.message}</p>
          )}
        </div>
        <div>
          <label className="label">Specialty</label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("image", {
              required: "image is required!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.image && (
            <p className="text-red-600">{errors?.image.message}</p>
          )}
        </div>
        <input
          type="submit"
          value="Add Doctor"
          className="btn btn-accent lg:w-full mt-4 text-white"
        />
      </form>
    </div>
  );
};

/* 
*. Three places to store image
1.Third party image hosting server 
2. File system of your server
3.mongodb(database)

 */

export default AddDoctor;
