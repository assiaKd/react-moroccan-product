import type { ProductProps } from "../models/Product";
 import "../index.css"
import React from "react";

 function ProductCard({ product, isInWishList, toggleWishList }:ProductProps) {
  return (
    <div  className="product-card">
      <img
        src={`images/${product.image}`}
        alt={product.name}
      />
      <div className="product-card-info">
        <h3 className="product-card-title">{product.name}</h3>
        <label className="switch">
          <input
            type="checkbox"
            checked={isInWishList}
            onChange={() => toggleWishList(product.id)}
          ></input>

          <span className="slider">
            <span className="slider-label">
              {isInWishList ? "In WishList" : "Add to WishList"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default React.memo(ProductCard);
