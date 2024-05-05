import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const SearchInput = ({ onSearch }) => {
  const useDebouncedValue = (inputValue, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(inputValue);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(inputValue);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [inputValue, delay]);

    return debouncedValue;
  };

  const [value, setValue] = useState("");
  const debouncedSearchTerm = useDebouncedValue(value, 2000);

  useEffect(() => {
    // API call or other actions to be performed with debounced value
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <TextField
      variant="outlined"
      size="small"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      placeholder="Search Company Name"
      inputProps={{ style: { fontSize: "13px", color: "rgb(128, 128, 128)" } }}
      fullWidth
      sx={{
        borderRadius: "4px",
        minWidth: "10rem",
        maxWidth: "25%"
      }}
    />
  );
};

export default SearchInput;
