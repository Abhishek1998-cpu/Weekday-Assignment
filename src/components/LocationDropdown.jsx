import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./LocationDropdown.css";

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
          sx={{ fontSize: "13px", color: "rgb(128, 128, 128)" }}
        >
          Location
        </InputLabel>
        <Select
          labelId="experience-dropdown-label"
          id="experience-dropdown"
          value={location}
          label="Location"
          onChange={handleChange}
          sx={{
            fontSize: "13px",
            color: "rgb(128, 128, 128)",
            textAlign: "left",
          }}
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
