import React from "react";
import Card from "./Card";
import { BiUserCircle } from "react-icons/bi";
import Clock from "react-live-clock";

export default function Learning(props) {
  const courseData = [
    {
      id: 1,
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces.",
      image:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      price: "Rs. 1000",
      instructor: "John Doe",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Angular",
      description:
        "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
      image:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      price: "Rs. 2000",
      instructor: "John Doe",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Vue",
      description:
        "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
      image:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      price: "Rs. 3000",
      instructor: "John Doe",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Node",
      description:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      image:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      price: "Rs. 4000",
      instructor: "John Doe",
      rating: 4.5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen py-2 w-full bg-gray-100">
      <div className="flex items-center ml-[3.2rem] w-[90%]">
        <BiUserCircle className="text-2xl" />
        <p className="p-5 text-md">
          Hello!{" "}
          <span className="font-medium">
            {props.user.firstName + " " + props.user.lastName}
          </span>
        </p>
        <Clock
          className="ml-auto "
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"Asia/Kolkata"}
        />
      </div>
      <div className="w-[90%] p-10 flex">
        {courseData.map((course) => (
          <Card
            key={course.id}
            name={course.name}
            description={course.description}
            image={course.image}
            price={course.price}
            instructor={course.instructor}
            rating={course.rating}
          />
        ))}
      </div>
    </div>
  );
}
