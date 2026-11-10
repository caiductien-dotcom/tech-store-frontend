import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/Home/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 120px)', paddingBottom: '40px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<div className="container" style={{ padding: '40px 0' }}>Trang Tìm kiếm (Đang cập nhật)</div>} />
          <Route path="/products/:id" element={<div className="container" style={{ padding: '40px 0' }}>Trang Chi tiết sản phẩm (Đang cập nhật)</div>} />
          <Route path="*" element={<div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>404 - Trang không tồn tại</div>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}