import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { data, setData } = useState("");
  return (
    <div className="flex justify-center">
      <div className=" h-[480px] w-96 shadow-xl rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-center mt-6">Login</h3>
        <form
          className="text-center"
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
        >
          <div>
            <label className="label">Email</label>
            <input
              {...register("firstName")}
              type="email"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              {...register("firstName")}
              type="password"
              className="input input-bordered w-full"
            />
            <label className="label">Forget Password?</label>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent lg:w-full"
          />
        </form>
        <p>
          New to doctors portal?{" "}
          <Link className="text-primary font-medium" to="/signup">
            Create new account
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full mb-7">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
