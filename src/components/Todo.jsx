import Checkbox from "./Checkbox";
import cross from "../assets/svg/icon-cross.svg";

function Todo() {
  return (
    <div className="px-3 flex bg-white justify-around items-center">
      <Checkbox />
      <div className="w-10/12 flex justify-between">
        <p>Test</p>
        <img src={cross} className="h-4 w-4" alt="delete crosslike icon" />
      </div>
    </div>
  );
}

export default Todo;
