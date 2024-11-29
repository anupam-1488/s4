// src/ProductPage.js
import React, { useState } from 'react';
import { Header } from './Header';

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const price = 1800.00;
    const originalPrice = 3000.00;
    const discount = 20;

    const handleQuantityChange = (event) => {
        const value = Math.max(1, Number(event.target.value)); // Ensure quantity is at least 1
        setQuantity(value);
    };

    const handleAddToCart = () => {
        console.log(`Added ${quantity} KERATOM – FULL HANDLE KNIFE to cart.`);
        // Implement cart functionality here
    };

    const totalPrice = (price * quantity).toFixed(2);

    return (
        <div>
            <Header />
            <div className="product-page">
                <div className="product-image">
                    <img 
                        src="/Images/trail.jpg" 
                        alt="Keratom Full Handle Knife" 
                        className="img-responsive" 
                    />
                </div>
                <div className="product-details">
                    <h1>KERATOM – FULL HANDLE KNIFE</h1>
                    <p className="in-stock">IN STOCK</p>
                    <p className="original-price">
                        MRP: <span>₹{originalPrice.toFixed(2)}</span>
                    </p>
                    <p className="current-price">
                        Price: ₹{price.toFixed(2)}
                    </p>
                    <p className="discount-info">MOQ/5 BOXES - {discount}% Discount</p>
                    <button className="btn-download">
                        Download Catalog
                    </button>
                    <div className="size-selection">
                        <label htmlFor="size">Size: </label>
                        <select id="size" aria-label="Select size">
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <div className="quantity-selection">
                        <label htmlFor="quantity">Quantity: </label>
                        <input 
                            type="number" 
                            id="quantity" 
                            value={quantity} 
                            onChange={handleQuantityChange} 
                            min="1" 
                            aria-label="Select quantity" 
                        />
                    </div>
                    <p className="total-price">Total Price: ₹{totalPrice}</p>
                    <button 
                        className="btn-add-to-cart"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
