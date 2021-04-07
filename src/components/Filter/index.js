import { useState } from "react";
import PropTypes from "prop-types";

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

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
