import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SignUpForm from "./SignUpForm";

export default function Login(props) {

  const [isSignUp, setIsSignUp] = React.useState(false);

  const handleSignUp = () => {
    setIsSignUp(true);
    // console.log("Sign Up");
  };

  const handleCancel = () => {
    setIsSignUp(false);
    // console.log("Cancel");
  };

  const handleSubmit = () => {
    setIsSignUp(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl w-2/3 max-w-4xl flex md:w-[90%]">
          <SignUp toggleSignUp={handleSignUp} />
          {isSignUp ? <SignUpForm toggleCancel={handleCancel} toggleSubmit={handleSubmit}/> : <SignIn toggleSignIn={props.toggleSignIn}/>}
        </div>
      </div>
    </div>
  );
}
