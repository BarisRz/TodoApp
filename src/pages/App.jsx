import { useState } from "react";
import Todo from "../components/Todo";
import Checkbox from "../components/Checkbox";

import BackgroundLight from "../assets/images/bg-desktop-light.jpg";
import moon from "../assets/svg/icon-moon.svg";
import sun from "../assets/svg/icon-sun.svg";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <div className="first-container flex justify-center items-center">
        <img
          className="h-[300px] object-cover absolute top-0 z-0"
          src={BackgroundLight}
        />
        <div className="container">
          <div className="titre flex justify-between mt-20">
            <h1 className="text-white text-5xl font-bold tracking-[1rem]">
              TODO
            </h1>
            <img
              className="h-9"
              src={theme === "light" ? moon : sun}
              alt={theme === "light" ? "darkmode toggle" : "lightmode toggle"}
            />
          </div>
          <div className="pl-3 h-16 flex bg-white justify-around items-center mt-10 rounded-md">
            <Checkbox />
            <input
              type="search"
              className="w-10/12 px-2 h-8 focus:border-none"
              placeholder="Create a new todo"
            />
          </div>
          <div className="todolist grid rounded-md overflow-hidden">
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
