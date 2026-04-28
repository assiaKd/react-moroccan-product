import { useState } from "react";
import ProdcutCard from "./ProductCard";
import { PRODUCT_TYPES, type ProductType, type Props } from "../models/Product";


export default function ProductList({ products, wishlistSet, toggleWishList }:Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState<ProductType>("All Types");
  const normalizedSearch = searchTerm.toLowerCase();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as ProductType);
  };


const filteredProducts = products.filter((product) => {
  const matchesType =
    type === "All Types" ||
    product.type.toLowerCase() === type.toLowerCase();

  const matchesSearch =
    product.name.toLowerCase().includes(normalizedSearch);

  return matchesType && matchesSearch;
});

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label  htmlFor="type">Type</label>
          <select id="type"
            className="filter-dropdown"
            value={type}
            onChange={handleTypeChange}
          >
          {PRODUCT_TYPES.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ))}
          </select>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProdcutCard
            product={product}
            key={product.id}
            toggleWishList={toggleWishList}
            isInWishList={wishlistSet.has(product.id)}
          ></ProdcutCard>
        ))}
      </div>
    </div>
  );
}
