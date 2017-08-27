import React from 'react';
import MemberListItem from './MemberListItem';

const MemberList = ({ members, category }) => {
  return (
    <div id="member-list" className="ui horizontal list">
      <h3>{`${category.substring(9, category.length)}`}</h3>

      { members.filter(record => record.type === 'page').map((member, i) => (
        <MemberListItem key={i} member={member} />
      ))
      }
    </div>
  );
};

export default MemberList;
