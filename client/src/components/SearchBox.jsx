import React from 'react';

const SearchBox = ({ handleSearch }) => {
  return (
    <div className="ui icon input">
      <input
        type="text"
        placeholder="Search Wikipedia..."
        onChange={handleSearch}
      />
      <i className="inverted circular search link icon" />
    </div>
  );
};

export default SearchBox;
