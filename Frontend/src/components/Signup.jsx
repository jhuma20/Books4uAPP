import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location = useLocation();
  const navigate=useNavigate();
  const from=location.state?.form?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("SignUp in Sucessfully!");
          navigate(from,{replace:true});
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("Error: " + error.response.data.message);
        }
      });
  };
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
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
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
