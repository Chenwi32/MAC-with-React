import React from "react";
import { useHistory } from "react-router";
import "./ProductsPageBC.css";

function ProductsPageBC() {
  const history = useHistory();

  return (
    <div className="products__breadcromes">
      <div className="container">
        <ul className="products__breadcromes-ul flex">
          <li onClick={(event) => history.push("/homeitems")}>
            <span className="products__breadcromes-options">Home Items</span>
          </li>

          <li onClick={(event) => history.push("/officeitems")}>
            <span className="products__breadcromes-options">Office Items</span>
          </li>

          <li onClick={(event) => history.push("/dressing")}>
            <span className="products__breadcromes-options">Dressing</span>
          </li>

          <li onClick={(event) => history.push("/fabrics")}>
            <span className="products__breadcromes-options">Fabrics</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductsPageBC;
