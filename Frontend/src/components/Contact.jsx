import React from "react";

function Contact() {
  return (
    <>
      <div>
        <div className=" w-80 h-80">
          <form action="">
            <h1 className="font-bold text-5xl mb-4  text-purple-500 font-serif">Contact us</h1>
            <div className="mt-4 space-y-2 ">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                placeholder="Write the message"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                rows="4"
              />
            </div>
            <div className="mt-6">
              <button className="bg-purple-700 text-white rounded-md px-3 py-1 hover:bg-purple-800 duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
