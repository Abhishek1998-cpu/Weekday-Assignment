import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
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
          sx={{ fontSize: "13px", color: "rgb(128, 128, 128)" }}
        >
          Experience
        </InputLabel>
        <Select
          labelId="experience-dropdown-label"
          id="experience-dropdown"
          value={experience}
          label="Experience"
          onChange={handleChange}
          sx={{
            fontSize: "13px",
            color: "rgb(128, 128, 128)",
            textAlign: "left",
          }}
          size="small"
        >
          {experienceArray?.map((ele, index) => {
            return <MenuItem value={ele}>{ele}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default ExperienceDropdown;
