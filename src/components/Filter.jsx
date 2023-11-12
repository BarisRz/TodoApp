import PropTypes from "prop-types";

function Filter({ completed, isActive, setisActive, toMake, setToMake }) {
  return (
    <div className="filter flex items-center justify-around bg-white border text-xs text-gray-400 max-sm:text-[0.6rem]">
      <p>
        {completed} {completed > 1 ? "tasks left" : "task left"}
      </p>
      <div className="real-filter flex justify-between gap-4">
        <button
          className="hover:text-black transition font-bold disabled:text-[#3F7EFD]"
          onClick={() => {
            setisActive(0);
          }}
          disabled={isActive === 0}
        >
          All
        </button>
        <button
          className="button-filter hover:text-black transition font-bold disabled:text-[#3F7EFD]"
          onClick={() => {
            setisActive(1);
          }}
          disabled={isActive === 1}
        >
          Active
        </button>
        <button
          className="button-filter hover:text-black transition font-bold disabled:text-[#3F7EFD]"
          onClick={() => {
            setisActive(2);
          }}
          disabled={isActive === 2}
        >
          Completed
        </button>
      </div>
      <button
        onClick={() => {
          setToMake(toMake.filter((element) => element.isCompleted !== true));
        }}
        className="button-filter hover:text-black transition font-bold"
      >
        Clear Completed
      </button>
    </div>
  );
}

Filter.propTypes = {
  completed: PropTypes.number.isRequired,
  isActive: PropTypes.number.isRequired,
  setisActive: PropTypes.func.isRequired,
  toMake: PropTypes.array.isRequired,
  setToMake: PropTypes.func.isRequired,
};

export default Filter;
