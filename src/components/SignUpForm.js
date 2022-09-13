import React from "react";


export default function SignUpForm(props) {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [disabled, setDisabled] = React.useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
    validate();
  };

  const handleSubmit = (e) => {
    setUser({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    });
    props.toggleSubmit();
    localStorage.setItem("user", JSON.stringify(user));
  };

  const validate = () => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.confirmPassword.length > 0 &&
      user.firstName.length > 0 &&
      user.lastName.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="w-3/5 p-5">
      <div className="text-center font-bold text-4xl">
        <span className="text-primary">Place</span>Me
      </div>
      <div className="py-8">
        <h2 className="text-2xl font-bold text-primary mb-2">Sign up</h2>
        <div className="border-2 w-10 border-primary inline-block mb-2 bg-primary"></div>
        <p className="text-gray-400 my-3">Enter the details</p>
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-80 p-2 flex items-center rounded-md mb-3 md:w-72 xl:w-80">
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              className="bg-gray-100 w-full focus:outline-none"
              placeholder="First Name"
            />
          </div>
          <div className="bg-gray-100 w-80 p-2 flex items-center rounded-md mb-3 md:w-72 xl:w-80">
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="bg-gray-100 w-full focus:outline-none"
              placeholder="Last Name"
            />
          </div>
          <div className="bg-gray-100 w-80 p-2 flex items-center rounded-md mb-3 md:w-72 xl:w-80">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 text-sm outline-none flex-1"
              onChange={handleChange}
              name="email"
              value={user.email}
            />
          </div>
          <div className="bg-gray-100 w-80 p-2 flex items-center rounded-md mb-5 md:w-72 xl:w-80">
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-100 text-sm outline-none flex-1"
              onChange={handleChange}
              name="password"
              value={user.password}
            />
          </div>
          <div className="bg-gray-100 w-80 p-2 flex items-center rounded-md mb-5 md:w-72 xl:w-80">
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-gray-100 text-sm outline-none flex-1"
              onChange={handleChange}
              name="confirmPassword"
              value={user.confirmPassword}
            />
          </div>
          <div className="flex justify-around xl:gap-16 md:gap-6">
            <button
              className="border-2 border-primary bg-white text-primary rounded-full px-8 py-2 font-semibold hover:bg-primary hover:text-white transition duration-300 ease-linear md:py-0"
              onClick={props.toggleCancel}
            >
              Sign In
            </button>
            <button
              className="border-2 border-primary bg-white text-primary rounded-full px-8 py-2 font-semibold hover:bg-primary hover:text-white transition duration-300 ease-linear disabled:opacity-50 disabled:cursor-not-allowed md:py-1 md:text-md"
              onClick={handleSubmit}
              disabled={disabled}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
