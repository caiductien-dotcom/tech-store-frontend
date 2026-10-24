import React from 'react';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-img-wrap">
        {product.discount_percent > 0 && (
          <span className="badge-discount product-card-badge">
            -{product.discount_percent}%
          </span>
        )}
        <img 
          src={product.image_url || 'https://placehold.co/300x300?text=No+Image'} 
          alt={product.name} 
          className="product-card-img"
        />
      </div>

      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        
        <div className="product-card-price-row">
          <span className="product-card-price">
            {Number(product.price).toLocaleString('vi-VN')} đ
          </span>
        </div>

        <div className="product-card-rating">
          <span className="product-card-stars">★ {product.rating_avg || 5.0}</span>
          <span className="product-card-reviews">({product.review_count || 0})</span>
        </div>

        <button className="btn-outline product-card-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}