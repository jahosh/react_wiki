import React from 'react';
import { formatDate } from '../utils/helpers';

const CategoryListItem = ({ category }) => {
  return (
    <div className="item">
      <div className="content">
        <a className="header">{ category.title }</a>
        <div className="description">{ `created: ${formatDate(category.touched)}` }</div>
      </div>
    </div>
  );
};

export default CategoryListItem;
