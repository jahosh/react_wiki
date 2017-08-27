import React from 'react';
import CategoryListItem from './CategoryListItem';

const CategoryList = ({ categories, handleFetchMembers }) => {
  return (
    <div className="ui relaxed divded list">
      { categories.sort((a, b) => b.touched > a.touched).map((category, i) => (
        <CategoryListItem key={i} category={category} handleFetchMembers={handleFetchMembers} />
      ))
    }
    </div>
  );
};

export default CategoryList;
