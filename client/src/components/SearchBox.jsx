import React from 'react';
import { debounce } from '../utils/helpers';

const SearchBox = ({ handleSearch }) => {
  return (
    <div className="ui huge icon input">
      <input
        type="text"
        placeholder="Search Wikipedia..."
        onChange={handleSearch}
        onKeyUp={handleSearch}
      />
      <i className="inverted circular search link icon" />
    </div>
  );
};

export default SearchBox;
