import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <div className=" flex items-center justify-center  h-screen">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              <h2 className="font-bold  text-2xl font-serif ">SignUp</h2>
              <div className="mt-4 space-y-2  ">
                <span className="font-serif ">Name</span>
                <br />
                <input
                  type="name"
                  placeholder="Enter your fullname"
                  className=" w-80 px-3 py-1 rounded font-light outline-none  text-sm bg-transparent border"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2  ">
                <span className="font-serif ">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" w-80 px-3 py-1 rounded font-light outline-none  text-sm bg-transparent border"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2  ">
                <span className="font-serif ">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter the password"
                  className=" w-80 px-3 py-1 rounded font-light outline-none border  bg-transparent text-sm"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center mt-5 ">
                <button className=" btn  font-serif bg-purple-700 hover:bg-purple-800 duration-300">
                  Signup
                </button>
                <p>
                  Already Registered?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
