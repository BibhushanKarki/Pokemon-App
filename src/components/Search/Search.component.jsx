import React from 'react';
import styles from 'components/Search/Search.module.scss';

export const SearchComponent = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={styles.search}
      type="search"
      value={value}
      onChange={handleChange}
      placeholder="Search..."
      maxLength={12}
    />
  );
};