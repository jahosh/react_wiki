import React from 'react';
import CategoryListItem from './CategoryListItem';

const CategoryList = ({ categories }) => {
  console.log(categories);
  return (
    <div className="ui relaxed divded list">
      { categories.sort((a, b) => b.touched > a.touched).map((category, i) => (
        <CategoryListItem key={i} category={category} />
      ))
    }
    </div>
  );
};

export default CategoryList;
