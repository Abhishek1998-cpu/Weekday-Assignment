import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./MinBasePayDropdown.css";

const MinBasePayDropdown = ({ setMinBasePayFilter }) => {
  const [minBasePay, setMinBasePay] = React.useState("");
  const minBasePayArray = Array(80)
    .fill()
    .map((_, index) => index + 1);
  const handleChange = (event) => {
    setMinBasePay(event.target.value);
  };

  useEffect(() => {
    setMinBasePayFilter(minBasePay);
  }, [minBasePay]);

  return (
    <div className="min-base-pay-dropdown-wrapper">
      <FormControl fullWidth>
        <InputLabel
          id="experience-dropdown-label"
          size="small"
          sx={{ fontSize: "13px", color: "rgb(128, 128, 128)" }}
        >
          Min Base Pay
        </InputLabel>
        <Select
          labelId="experience-dropdown-label"
          id="experience-dropdown"
          value={minBasePay}
          label="Min Base Pay"
          onChange={handleChange}
          size="small"
          sx={{
            fontSize: "13px",
            color: "rgb(128, 128, 128)",
            textAlign: "left",
          }}
        >
          {minBasePayArray?.map((ele, index) => {
            return <MenuItem value={ele}>{ele}L</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default MinBasePayDropdown;
