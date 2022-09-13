import React from "react";

export default function SignUp(props) {
  return (
    <div className="w-2/5 bg-primary rounded-tl-2xl rounded-bl-2xl text-white py-48 px-12 flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold">Welcome!</h2>
      <div className="border-2 w-10 border-white bg-white"></div>
      <p className="text-sm mb-8">Sign up to continue or sign in</p>
      <button
        className="border-2 border-white rounded-full px-12 py-2 font-semibold hover:bg-white hover:text-primary transition duration-300 ease-linear "
        onClick={props.toggleSignUp}
      >
        Sign Up
      </button>
    </div>
  );
}
