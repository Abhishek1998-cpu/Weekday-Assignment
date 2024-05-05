import React, { useEffect } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import "./LocationDropdown.css";
import { styleObj } from "../../utils";

const LocationDropdown = ({ setLocationFilter }) => {
  const [location, setLocation] = React.useState("");
  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    setLocationFilter(location);
  }, [location]);

  return (
    <div className="location-wrapper">
      <FormControl fullWidth>
        <InputLabel
          size="small"
          id="experience-dropdown-label"
          sx={styleObj?.inputLabel}
        >
          Location
        </InputLabel>
        <Select
          labelId="experience-dropdown-label"
          id="experience-dropdown"
          value={location}
          label="Location"
          onChange={handleChange}
          sx={styleObj?.selectDropdown}
          size="small"
        >
          <MenuItem value={"remote"}>Remote</MenuItem>;
          <MenuItem value={"in-office"}>In Office</MenuItem>;
          <MenuItem value={"both"}>Both</MenuItem>;
        </Select>
      </FormControl>
    </div>
  );
};

export default LocationDropdown;
