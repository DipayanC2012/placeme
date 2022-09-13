import React from "react";
import EditProfile from "./EditProfile";
import Sidebar from "./Sidebar";
import Learning from "./Learning";

export default function Student(props) {

  const userData = JSON.parse(localStorage.getItem("user"));

  console.log(userData);

  const [activeComponent, setActiveComponent] = React.useState("learning");

  function toggleComponent() {
    if (activeComponent === "learning") {
      setActiveComponent("editProfile");
    } else {
      setActiveComponent("learning");
    }
  }

  return (
    <div className="flex ">
      <Sidebar toggleSignOut={props.toggleSignOut} toggleComponent={toggleComponent}/>
      {activeComponent === "learning"? <Learning user={userData}/> : <EditProfile user={userData}/>}
    </div>
  );
}
