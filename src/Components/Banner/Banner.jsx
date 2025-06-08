import React from 'react';
import bannerImg from '../../assets/banner1.jpg';
import productImg1 from '../../assets/Mouse.jpg'; 
import productImg2 from '../../assets/Smartphone.jpg'; 
import productImg3 from '../../assets/Headphones.jpg'; 
import productImg4 from '../../assets/Watch.jpg'; 
import productImg5 from '../../assets/Book.jpg'; 
import productImg6 from '../../assets/Shoes.jpg'; 
import productImg7 from '../../assets/Lipstick.jpg'; 
import productImg8 from '../../assets/SmartTv.jpg'; 
import productImg9 from '../../assets/Bag.jpg'; 
import productImg10 from '../../assets/Tshirt.jpg'; 
import { useCart } from '../../context/CartContext';

import './Banner.css';

const products = [
  { id: 1, name: 'Mouse', price: 499, image: productImg1 },
  { id: 2, name: 'SmartPhone', price: 15749, image: productImg2 },
  { id: 3, name: 'Headphone', price: 2999, image: productImg3 },
  { id: 4, name: 'Watch', price: 1500, image: productImg4 },
  { id: 5, name: 'Book', price: 189, image: productImg5 },
  { id: 6, name: 'Shoes', price: 1299, image: productImg6 },
  { id: 7, name: 'Lipstick', price: 599, image: productImg7 },
  { id: 8, name: 'Smart-Tv', price: 35648, image: productImg8 },
  { id: 9, name: 'Bag', price: 847, image: productImg9 },
  { id: 10, name: 'T-Shirt', price: 299, image: productImg10 },
];


const HomePage = () => {
  const { addToCart } = useCart();
  return (
    <div className="homepage">
      {/* Banner */}
      <div className="banner-container">
        <img src={bannerImg} alt="Banner" className="banner-img" />
      </div>

      {/* Product Section */}
      <section className="products-section">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      {/* Footer Section */}
      <div style={{
        backgroundColor: "#a05360",
        color: "white",
        padding: "40px 20px 20px",
        textAlign: "center",
        marginTop: "0px"
      }}>
        <h3 style={{ margin: 0, fontSize: "24px" }}>QuickShop</h3>
        <p style={{ margin: "10px 0", fontSize: "16px" }}>Your one-stop shop for everything!</p>

        <div style={{ marginTop: "15px" }}>
          <a href="#" style={{ margin: "0 10px", fontSize: "20px", color: "white" }}><i className="fab fa-facebook-f"></i></a>
          <a href="#" style={{ margin: "0 10px", fontSize: "20px", color: "white" }}><i className="fab fa-instagram"></i></a>
          <a href="#" style={{ margin: "0 10px", fontSize: "20px", color: "white" }}><i className="fab fa-twitter"></i></a>
          <a href="#" style={{ margin: "0 10px", fontSize: "20px", color: "white" }}><i className="fab fa-linkedin-in"></i></a>
        </div>

        <p style={{ marginTop: "20px", fontSize: "14px", opacity: 0.9 }}>© 2025 QuickShop. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
