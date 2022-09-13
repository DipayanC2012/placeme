import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiBuilding, BiHelpCircle, BiLogOut } from "react-icons/bi";
import { IoEarthOutline } from "react-icons/io5";
import { GiOpenBook } from "react-icons/gi";
import {
  AiOutlineShoppingCart,
  AiFillStar,
  AiOutlineUser,
} from "react-icons/ai";

export default function Sidebar(props) {
  const [open, setOpen] = React.useState(true);

  const [active, setActive] = React.useState("learning");

  return (
    <div
      className={`bg-primary h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-primary text-3xl rounded-full absolute -right-3 top-9 border border-primary cursor-pointer ${
          !open && "rotate-180"
        } duration-300`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <BiBuilding
          className={`text-4xl text-white border-2 rounded cursor-pointer block float-left mr-2 ${
            !open && "rotate-[360deg]"
          } duration-500`}
        />
        <h1
          className={`text-white origin-left font-medium text-2xl ${
            !open && "scale-0"
          } duration-300`}
        >
          PlaceMe
        </h1>
      </div>
      <ul className="pt-2">
          <li
            className={`text-white text-sm flex items-center gap-x-2 py-2 px-1 hover:bg-light-white rounded-md mt-2 cursor-pointer ${
              active === "learning" && "bg-light-white"
            }`}
            onClick={() => {
              setActive("learning");
              props.toggleComponent();
            }}
          >
            <span className="text-2xl block float-left">
              <GiOpenBook />
            </span>
            <span
              className={`text-base font-medium flex-1 ml-2 ${
                !open && "hidden"
              } `}
            >
              My Learning
            </span>
          </li>
        <li
          className={`text-white text-sm flex items-center gap-x-2 py-2 px-1 hover:bg-light-white rounded-md mt-2 cursor-pointer ${
            active === "cart" && "bg-light-white"
          }`}
          onClick={() => setActive("cart")}
        >
          <span className="text-2xl block float-left">
            <AiOutlineShoppingCart />
          </span>
          <span
            className={`text-base font-medium flex-1 ml-2 ${
              !open && "hidden"
            } `}
          >
            My Cart
          </span>
        </li>
        <li
          className={`text-white text-sm flex items-center gap-x-2 py-2 px-1 hover:bg-light-white rounded-md mt-2 cursor-pointer ${
            active === "wishlist" && "bg-light-white"
          }`}
          onClick={() => setActive("wishlist")}
        >
          <span className="text-2xl block float-left">
            <AiFillStar />
          </span>
          <span
            className={`text-base font-medium flex-1 ml-2 ${
              !open && "hidden"
            } `}
          >
            WishList
          </span>
        </li>
        <li className="text-white text-sm flex items-center gap-x-2 py-2 px-1  rounded-md mt-2 ">
          <div
            className={`h-px bg-white w-full mt-2 ${open ? "mr-4" : "mr-3"}`}
          />
        </li>
        <li
          className={`text-white text-sm flex items-center gap-x-2 py-2 px-1 hover:bg-light-white rounded-md mt-2 cursor-pointer ${
            active === "language" && "bg-light-white"
          }`}
          onClick={() => setActive("language")}
        >
          <span className="text-2xl block float-left">
            <IoEarthOutline />
          </span>
          <span
            className={`text-base font-medium flex-1 ml-2 ${
              !open && "hidden"
            } `}
          >
            Language - English
          </span>
        </li>
        <li
          className={`text-white text-sm flex items-center gap-x-2 py-2 px-1 hover:bg-light-white rounded-md mt-2 cursor-pointer ${
            active === "help" ? "bg-light-white" : ""
          }`}
          onClick={() => setActive("help")}
        >
          <span className="text-2xl block float-left">
            <BiHelpCircle />
          </span>
          <span
            className={`text-base font-medium flex-1 ml-2 ${
              !open && "hidden"
            } `}
          >
            Help
          </span>
        </li>
        <li className="text-white text-sm flex items-center gap-x-2 py-2 px-1  rounded-md mt-2">
          <div
            className={`h-px bg-white w-full mt-2 ${open ? "mr-4" : "mr-3"}`}
          />
        </li>
        <li
          className={`text-white text-sm flex items-center gap-x-2 py-2 px-1 hover:bg-light-white rounded-md mt-2 cursor-pointer ${
            active === "EditProfile" && "bg-light-white"
          }`}
          onClick={() => {
            setActive("EditProfile")
            props.toggleComponent()
          }}
        >
          <span className="text-2xl block float-left">
            <AiOutlineUser />
          </span>
          <span
            className={`text-base font-medium flex-1 ml-2 ${
              !open && "hidden"
            } `}
          >
            Edit Profile
          </span>
        </li>
        <li
          className="text-white text-sm flex items-center gap-x-2 py-2 px-1 hover:bg-light-white rounded-md mt-2 cursor-pointer"
          onClick={props.toggleSignOut}
        >
          <span className="text-2xl block float-left">
            <BiLogOut />
          </span>
          <span
            className={`text-base font-medium flex-1 ml-2 ${
              !open && "hidden"
            } `}
          >
            LogOut
          </span>
        </li>
      </ul>
    </div>
  );
}
