import React, { useEffect } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import "./MinBasePayDropdown.css";
import { styleObj } from "../../utils";

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
          sx={styleObj?.inputLabel}
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
          sx={styleObj?.selectDropdown}
        >
          {minBasePayArray?.map((ele) => {
            return <MenuItem value={ele}>{`${ele} LPA`}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default MinBasePayDropdown;
