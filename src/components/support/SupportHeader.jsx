import React from "react";

function SupportHeader() {
  return (
    <div className="header__search container hide">
      <input className="search__input" type="text" />
      <Search className="search__icon" />
    </div>
  );
}

export default SupportHeader;
