import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search?q=${encodeURIComponent(keyword.trim())}`);
    }
  };

  return (
    <header className="header-wrapper">
      <div className="container header-top">
        <Link to="/" className="header-logo">TECHSTORE</Link>

        <form className="header-search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm, điện thoại, laptop..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="header-search-input"
          />
          <button type="submit" className="header-search-btn">
            <Search size={18} />
            <span>Tìm</span>
          </button>
        </form>

        <div className="header-actions">
          <Link to="/cart" className="header-action-btn cart-btn">
            <ShoppingCart size={20} />
            <span className="cart-badge">0</span>
          </Link>
          <Link to="/login" className="btn-outline header-login-btn">
            <User size={18} />
            <span>Đăng nhập</span>
          </Link>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container header-nav-list">
          <Link to="/search" className="nav-item active">Tất cả danh mục</Link>
          <Link to="/search?category=1" className="nav-item">Điện thoại</Link>
          <Link to="/search?category=2" className="nav-item">Laptop</Link>
          <Link to="/search?category=3" className="nav-item">Máy tính</Link>
          <Link to="/search?category=4" className="nav-item">Phụ kiện</Link>
          <Link to="/search?category=5" className="nav-item">Tablet</Link>
        </div>
      </nav>
    </header>
  );
}