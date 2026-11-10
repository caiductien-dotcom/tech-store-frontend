import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4 className="footer-title">THÔNG TIN LIÊN HỆ</h4>
          <p>Địa chỉ: 123 Đường Cầu Giấy, Hà Nội</p>
          <p>Email: contact@techstore.vn</p>
          <p>Hotline: 1800-xxxx</p>
          <p>Giờ làm việc: 8h - 22h</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">CHÍNH SÁCH</h4>
          <p>Chính sách đổi trả</p>
          <p>Chính sách bảo hành</p>
          <p>Điều khoản sử dụng</p>
          <p>Bảo mật thông tin</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">HỖ TRỢ</h4>
          <p>Hướng dẫn mua hàng</p>
          <p>Tra cứu đơn hàng</p>
          <p>Câu hỏi thường gặp</p>
          <p>Liên hệ hỗ trợ</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">KẾT NỐI VỚI CHÚNG TÔI</h4>
          <div className="footer-socials">
            <span className="badge-social">Facebook</span>
            <span className="badge-social">Instagram</span>
          </div>
          <div className="footer-newsletter">
            <input type="text" placeholder="Email của bạn..." className="footer-input" />
            <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '13px' }}>Đăng ký</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Tech Store Ecommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}