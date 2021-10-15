import React from "react";
import "./TeamMember.css";

function TeamMember({ image, name, title, comments }) {
  return (
    <div className="member flex__col member__1">
      <div className="member__image-container">
        <img className="member__image" src={image} alt="" />
      </div>

      <div className="member__quotes flex__col">
        <p className="member__name">{name}</p>
        <p className="small">{comments}</p>
        <h4 className="member__title">{title}</h4>
      </div>
    </div>
  );
}

export default TeamMember;
