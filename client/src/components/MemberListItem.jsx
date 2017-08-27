import React from 'react';
import { formatDate } from '../utils/helpers';

const MemberListItem = ({ member }) => {
  return (
    <div className="item">
      <div className="content">
        <a className="category-title header" href={`https://en.wikipedia.org/?curid=${member.pageid}`} target="__blank">
          { `${member.title}` }
        </a>
        <div className="description created-at-text">{`created: ${formatDate(member.timestamp)}`}</div>
      </div>
    </div>
  );
};

export default MemberListItem;
