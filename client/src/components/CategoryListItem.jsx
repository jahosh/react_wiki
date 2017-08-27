import React from 'react';
import { formatDate } from '../utils/helpers';

const CategoryListItem = ({ category, handleFetchMembers }) => {
  return (
    <div className="item">
      <i className="cube icon" />
      <div className="content">
        <a className="category-title header" onClick={() => { handleFetchMembers(category.title); }}>
          { category.title.substring(9, category.title.length) }
        </a>
        <div className="description created-at-text">{ `last updated: ${formatDate(category.touched)}` }</div>
      </div>
    </div>
  );
};

export default CategoryListItem;
