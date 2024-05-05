import React, { useEffect } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { styleObj } from "../../utils";
import "./ExperienceDropdown.css";

const ExperienceDropdown = ({ setExperienceFilter }) => {
  const [experience, setExperience] = React.useState("");
  const experienceArray = Array(10)
    .fill()
    .map((_, index) => index + 1);
  const handleChange = (event) => {
    setExperience(event.target.value);
  };

  useEffect(() => {
    setExperienceFilter(experience);
  }, [experience]);

  return (
    <div className="experience-dropdown-wrapper">
      <FormControl fullWidth>
        <InputLabel
          size="small"
          id="experience-dropdown-label"
          sx={styleObj?.inputLabel}
        >
          Experience
        </InputLabel>
        <Select
          labelId="experience-dropdown-label"
          id="experience-dropdown"
          value={experience}
          label="Experience"
          onChange={handleChange}
          sx={styleObj?.selectDropdown}
          size="small"
        >
          {experienceArray?.map((ele) => {
            return <MenuItem value={ele}>{ele}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default ExperienceDropdown;
