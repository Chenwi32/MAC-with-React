import React from "react";
import "./TeamMember.css";

function TeamMember({ image, name, title, comments }) {
  return (
    <div className="member flex member__1">
      <div className="member__image-container">
        <img className="member__image" src={image} alt="" />
      </div>

      <div className="member__quotes flex__col">
        <h4 className="member__title">{title}</h4>
        <p className="small">{comments}</p>

        <p className="member__name">{name}</p>
      </div>
    </div>
  );
}

export default TeamMember;
