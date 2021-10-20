import { Search } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./SupportHeader.css";

function SupportHeader() {
  return (
    <div className="support">
      <div className="supprt__container container flex">
        <div className="header__search  ">
          <input className="search__input" type="text" />
          <span className="search__icon">
            <Search />
          </span>
        </div>
        <div className="support__options">
          <Link>
            <span className="support__option">Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SupportHeader;
