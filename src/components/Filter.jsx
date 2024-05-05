import React from "react";
import SearchInputField from "./SearchInputField";
import ExperienceDropdown from "./ExperienceDropdown";
import MinBasePayDropdown from "./MinBasePayDropdown";
import LocationDropdown from "./LocationDropdown";
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
