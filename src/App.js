import React from "react";
import Login from "./components/Login";
import Student from "./components/student/Student";

export default function App() {

  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return <>{isLogged ? <Student toggleSignOut={handleLogout}/> : <Login toggleSignIn={handleLogin}/>}</>;
}
