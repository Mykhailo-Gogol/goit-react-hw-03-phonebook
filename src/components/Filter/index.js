import { useState } from "react";
// import { debounce } from "debounce";

const Filter = ({ onFilter }) => {
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  const filterInputHandler = (event) => {
    handleInputChange(event);
    onFilter(event);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search contact"
        name="filter"
        value={filter}
        onChange={filterInputHandler}
        // onBlur={() => setFilter("")}
      />
    </div>
  );
};

export default Filter;
