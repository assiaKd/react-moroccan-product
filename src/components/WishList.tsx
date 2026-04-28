 import "../index.css"
import type { Props } from "../models/Product";
import ProdcutCard from "./ProductCard";

export default function Wishlist({ products, wishlistSet, toggleWishList }:Props) {
  const productMap = new Map(products.map(p => [p.id, p]));
  return (
    <div>
      <h1 className="title">Your WishList</h1>
      <div className="WishList">
        {Array.from(wishlistSet).map((id) => {
        const product = productMap.get(id);
           if (!product) return null;
          return (
            <ProdcutCard
              key={id}
              product={product}
              toggleWishList={toggleWishList}
              isInWishList={true}
            ></ProdcutCard>
          );
        })}
      </div>
    </div>
  );
}
