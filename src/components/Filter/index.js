import { useState } from "react";
import PropTypes from "prop-types";

const Filter = ({ onFilter }) => {
  const [filter, setFilter] = useState("");

  const handleInputChange = ({ value }) => {
    setFilter(value);
  };

  const filterInputHandler = (event) => {
    handleInputChange(event.target);
    onFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search contact"
        name="filter"
        value={filter}
        onChange={filterInputHandler}
      />
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
