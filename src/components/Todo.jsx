import PropTypes from "prop-types";
import cross from "../assets/svg/icon-cross.svg";
import check from "../assets/svg/icon-check.svg";

function Todo({ texte, isCompleted, toMake, setToMake, id }) {
  const changeStatut = (id, bool) => {
    setToMake((prevToMake) =>
      prevToMake.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: bool } : todo
      )
    );
  };

  return (
    <div className="px-3 flex bg-white justify-around items-center border group overflow-hidden">
      <div
        className={`roundicon h-7 w-7 rounded-full border-2 transition ${
          isCompleted ? "estDesac" : "hover:border-[#C058F3]"
        } flex items-center justify-center`}
        onClick={() => changeStatut(id, !isCompleted)}
      >
        {isCompleted && (
          <img src={check} alt="check icon" className="h-1/2 w-1/2" />
        )}
      </div>
      <div className="w-10/12 flex items-center justify-between">
        <p className={isCompleted ? "line-through text-gray-400" : null}>
          {texte}
        </p>
        <img
          src={cross}
          className="h-4 w-4 invisible group-hover:visible z-10"
          alt="delete crosslike icon"
          onClick={() => {
            setToMake(toMake.filter((element) => element.id !== id));
          }}
        />
      </div>
    </div>
  );
}

Todo.propTypes = {
  texte: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toMake: PropTypes.array.isRequired,
  setToMake: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Todo;
