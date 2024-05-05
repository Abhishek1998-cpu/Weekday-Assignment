import React from "react";
import SearchInputField from "../SearchInputField";
import ExperienceDropdown from "../ExperienceDropdown/ExperienceDropdown";
import MinBasePayDropdown from "../MinBasePayDropdown/MinBasePayDropdown";
import LocationDropdown from "../LocationDropdown/LocationDropdown";
import "./Filter.css";

const Filter = ({
  setSearchString,
  setExperienceFilter,
  setMinBasePayFilter,
  setLocationFilter,
}) => {
  const onSearch = (searchString) => {
    setSearchString(searchString);
  };
  return (
    <div className="filter-container">
      <SearchInputField onSearch={onSearch} />
      <ExperienceDropdown setExperienceFilter={setExperienceFilter} />
      <MinBasePayDropdown setMinBasePayFilter={setMinBasePayFilter} />
      <LocationDropdown setLocationFilter={setLocationFilter} />
    </div>
  );
};

export default Filter;
