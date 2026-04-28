
import { useCallback, useEffect, useState } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductList from './components/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WishList from './components/WishList';

function App() {
  const [products, setProducts] = useState([]);
  const [wishlistSet, setWishlistSet] = useState<Set<number>>(new Set());

    useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);


    const toggleWishlist = useCallback((productId:number) => {
    setWishlistSet((prev) =>
     {
       const newSet = new Set(prev);
      if(newSet.has(productId) ) newSet.delete(productId) 
        else  newSet.add(productId);
      return newSet;}
    );
  }, []);

return (
  <div className="App">
    <div className="container">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                wishlistSet={wishlistSet}
                products={products}
                toggleWishList={toggleWishlist}
              />
            }
          />

          <Route
            path="/wishlist"
            element={
              <WishList
                wishlistSet={wishlistSet}
                products={products}
                toggleWishList={toggleWishlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>

    <Footer />
  </div>
);
}

export default App
