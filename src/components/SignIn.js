import React from "react";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function SignIn(props) {

  // let navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [user, setUser] = React.useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { email: "", password: "" }
  ); 

  const handleSubmit = () => {
    if(email === user.email && password === user.password) {
      // console.log(user);
      props.toggleSignIn();
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="w-3/5 p-5">
      <div className="text-center font-bold text-4xl">
        <span className="text-primary">Place</span>Me
      </div>
      <div className="py-10">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Sign in to Account
        </h2>
        <div className="border-2 w-10 border-primary inline-block mb-2 bg-primary"></div>
        <div className="flex justify-center my-2">
          <a
            href="#"
            className="border-2 border-gray-200 rounded-full p-3 mx-1"
          >
            <FiFacebook className="text-sm" />
          </a>
          <a
            href="#"
            className="border-2 border-gray-200 rounded-full p-3 mx-1"
          >
            <AiOutlineGoogle className="text-sm" />
          </a>
          <a
            href="#"
            className="border-2 border-gray-200 rounded-full p-3 mx-1"
          >
            <AiFillGithub className="text-sm" />
          </a>
        </div>
        <p className="text-gray-400 my-3">or use your email</p>
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-80 p-2 flex items-center rounded-md mb-3 md:w-72 xl:w-80">
            <FaRegEnvelope className="text-gray-400 inline-block m-2" />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 text-sm outline-none flex-1"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="bg-gray-100 w-80 p-2 flex items-center rounded-md mb-5 md:w-72 xl:w-80">
            <MdLockOutline className="text-gray-400 inline-block m-2" />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-100 text-sm outline-none flex-1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="flex w-64 mb-5">
            <label htmlFor="" className="flex items-center text-xs">
              <input type="checkbox" name="remember" id="" className="mr-1" />
              Remember Me
            </label>
            <a href="#" className="text-xs ml-auto">
              Forgot Password?
            </a>
          </div>
          <button
            className="border-2 border-primary bg-white text-primary rounded-full px-12 py-2 font-semibold hover:bg-primary hover:text-white transition duration-300 ease-linear disabled:opacity-50 disabled:cursor-not-allowed md:py-1 md:text-md"
            onClick={handleSubmit}
            disabled={email.length === 0 || password.length === 0}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
