import { TextField } from '@mui/material';
import React from 'react';

export const SearchComponent = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <TextField 
    fullWidth
    id="outlined-basic" 
    variant="filled"
    type="search"
    value={value}
    onChange={handleChange}
    placeholder="Search..."
    maxLength={12} />
  );
};