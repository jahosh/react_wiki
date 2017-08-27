import React from 'react';
import MemberListItem from './MemberListItem';

const MemberList = ({ members }) => {
  return (
    <div id="member-list" className="ui horizontal list">
      <h3>Member Results : { `${members.length}` } </h3>
      { members.map((member, i) => (
        <MemberListItem key={i} member={member} />
      ))
      }
    </div>
  );
};

export default MemberList;
