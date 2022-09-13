import React from 'react'

export default function EditProfile(props) {

const [user, setUser] = React.useState({
    email: props.user.email,
    password: "",
    confirmPassword: "",
    firstName: props.user.firstName,
    lastName: props.user.lastName,
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

  const handleSubmit = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 w-full bg-gray-100">
      <div className="flex flex-col items-center justify-center w-[90%] flex-1 px-10 text-center">
        <div className="bg-gray-200 rounded-2xl text-black py-16 px-12 flex flex-col items-center justify-center gap-4 w-[80%]">
          <h2 className="text-3xl font-bold">Profile and settings</h2>
          <div className="border-2 w-10 border-black bg-black"></div>
          <div className="flex flex-col items-center w-[70%]">
            <p className="text-black mb-1 mr-auto">First Name</p>
            <div className="bg-gray-100 w-full p-2 flex items-center rounded-md mb-3 ">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-100 text-sm outline-none flex-1 text-black"
                name="firstName"
                onChange={handleChange}
                value={user.firstName}
              />
            </div>
            <p className="text-black mb-1 mr-auto">Last Name</p>
            <div className="bg-gray-100 w-full p-2 flex items-center rounded-md mb-3">
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-100 text-sm outline-none flex-1 text-black"
                name="lastName"
                onChange={handleChange}
                value={user.lastName}
              />
            </div>
            <p className="text-black mb-1 mr-auto">Email Id</p>
            <div className="bg-gray-100 w-full p-2 flex items-center rounded-md mb-3">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 text-sm outline-none flex-1 text-black"
                name="email"
                onChange={handleChange}
                value={user.email}
              />
            </div>
            <p className="text-black mb-1 mr-auto">Change Password</p>
            <div className="bg-gray-100 w-full p-2 flex items-center rounded-md mb-3 text-black">
              <input
                type="password"
                placeholder="New Password"
                className="bg-gray-100 text-sm outline-none flex-1"
                name="password"
                onChange={handleChange}
                value={user.password}
              />
            </div>
            <div className="bg-gray-100 w-full p-2 flex items-center rounded-md mb-5 text-black">
              <input
                type="password"
                placeholder="Confirm Password"
                className="bg-gray-100 text-sm outline-none flex-1"
                name="confirmPassword"
                onChange={handleChange}
                value={user.confirmPassword}
              />
            </div>
            <div className="flex justify-center w-full">
              <button
                className="border-2 border-black bg-white text-black rounded-xl px-5 py-2 font-semibold hover:border-primary hover:bg-primary hover:text-white transition duration-300 ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={disabled}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
