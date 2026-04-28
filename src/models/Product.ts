export  type Product={
    id:number,
    name:string,
    image:string,
    type:string,
    rating:number
}

export type  ProductProps={
  product:  Product,
  isInWishList:boolean,
  toggleWishList:(productId:number)=>void
}

export type  Props={
  products:  Product[],
  wishlistSet:Set<number>,
  toggleWishList:(productId:number)=>void
}

export const PRODUCT_TYPES = ["All Types", "Beauty", "Clothes", "Cookware"];
export type ProductType = typeof PRODUCT_TYPES[number];