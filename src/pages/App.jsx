import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import Todo from "../components/Todo";
import BackgroundLight from "../assets/images/bg-desktop-light.jpg";
import moon from "../assets/svg/icon-moon.svg";
import sun from "../assets/svg/icon-sun.svg";
import Filter from "../components/Filter";
import Vide from "../components/Vide";

function App() {
  const [theme, setTheme] = useState("light");
  const [toMake, setToMake] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState(toMake);
  const [isActive, setIsActive] = useState(0);
  const [id, setId] = useState(0);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (newTodo.length && event.key === "Enter") {
      setId(() => id + 1);
      setToMake(() => [
        ...toMake,
        {
          taskname: newTodo.trim(),
          isCompleted: false,
          id: id,
        },
      ]);
      setNewTodo("");
    }
  };
  useEffect(() => {
    const data = window.localStorage.getItem("TODO_APP_LIST");
    if (data) setToMake(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (isActive === 1) {
      if (filter.length === 0) {
        setIsActive(0);
      }
      setFilter(toMake.filter((element) => element.isCompleted === false));
    } else if (isActive === 2) {
      setFilter(toMake.filter((element) => element.isCompleted === true));
    } else {
      setFilter(toMake);
    }
    setCompleted(toMake.filter((element) => element.isCompleted).length);
  }, [toMake, isActive]);

  useEffect(() => {
    window.localStorage.setItem("TODO_APP_LIST", JSON.stringify(toMake));
  }, [toMake]);

  return (
    <>
      <div className="first-container flex justify-center items-center">
        <img
          className="h-[300px] object-cover absolute top-0 z-0"
          src={BackgroundLight}
        />
        <div className="container">
          <div className="titre flex justify-between mt-16">
            <h1 className="text-white text-4xl font-bold tracking-[1rem]">
              TODO
            </h1>
            <img
              className="h-7"
              src={theme === "light" ? moon : sun}
              alt={theme === "light" ? "darkmode toggle" : "lightmode toggle"}
            />
          </div>
          <div className="pl-3 h-16 flex bg-white justify-around items-center mt-10 rounded-md shadow-lg">
            <div className="h-7 w-7 rounded-full border-2"></div>
            <input
              type="search"
              className="w-10/12 px-2 h-8 focus:border-none"
              placeholder="Create a new todo"
              value={newTodo}
              onChange={handleInputChange}
              onKeyDown={handleEnterPress}
            />
          </div>
          <Reorder.Group
            as="div"
            axis="y"
            values={toMake}
            onReorder={setToMake}
          >
            <div className="todolist grid rounded-md mt-5 shadow-2xl overflow-hidden mb-10">
              {toMake.length === 0 ? (
                <Vide />
              ) : (
                filter.map((element) => (
                  <Reorder.Item
                    as="div"
                    key={element.id}
                    value={element}
                    className="px-3 flex bg-white justify-around items-center border group overflow-hidden"
                  >
                    <Todo
                      texte={element.taskname}
                      isCompleted={element.isCompleted}
                      toMake={toMake}
                      setToMake={setToMake}
                      id={element.id}
                    />
                  </Reorder.Item>
                ))
              )}
              <Filter
                completed={toMake.length - completed}
                isActive={isActive}
                setisActive={setIsActive}
                setFilter={setFilter}
                toMake={toMake}
                setToMake={setToMake}
              />
            </div>
          </Reorder.Group>
        </div>
      </div>
    </>
  );
}

export default App;
