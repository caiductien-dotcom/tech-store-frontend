import React, { useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';
import ProductCard from '../../components/common/ProductCard';
import { Truck, RotateCcw, ShieldCheck, Gift } from 'lucide-react';
import './HomePage.css';

// du lieu mau truoc khi render bat
const DEFAULT_CATEGORIES = [
  { category_id: 1, name: 'Điện thoại', icon: '📱' },
  { category_id: 2, name: 'Laptop', icon: '💻' },
  { category_id: 3, name: 'Máy tính', icon: '🖥️' },
  { category_id: 4, name: 'Phụ kiện', icon: '🎧' },
  { category_id: 5, name: 'Tablet', icon: '📟' },
  { category_id: 6, name: 'Camera', icon: '📷' }
];

// ham tu dong gan icon danh sach theo db
const getCategoryIcon = (name = '') => {
  const lower = name.toLowerCase();
  if (lower.includes('thoại') || lower.includes('phone')) return '📱';
  if (lower.includes('laptop')) return '💻';
  if (lower.includes('máy tính') || lower.includes('pc')) return '🖥️';
  if (lower.includes('phụ kiện')) return '🎧';
  if (lower.includes('tablet') || lower.includes('ipad')) return '📟';
  if (lower.includes('camera') || lower.includes('ảnh')) return '📷';
  return '📦';
};

export default function HomePage() {
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('newest');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [catRes, prodRes] = await Promise.allSettled([
          axiosClient.get('/categories'),
          axiosClient.get(`/products?limit=8&sort=${activeTab}`)
        ]);

        if (catRes.status === 'fulfilled' && catRes.value.data?.data?.length > 0) {
          setCategories(catRes.value.data.data);
        }

        if (prodRes.status === 'fulfilled' && prodRes.value.data?.data) {
          setProducts(prodRes.value.data.data);
        }
      } catch (err) {
        console.error('Lỗi khi tải dữ liệu trang chủ:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  return (
    <div className="home-container">
      {/* banner */}
      <section className="container home-banner-section">
        <div className="home-hero-banner">
          <div className="banner-text">
            <h2>Mở Bán Siêu Phẩm Công Nghệ 2026</h2>
            <p>Trải nghiệm hiệu năng bứt phá - Giảm ngay tới 20% hôm nay</p>
            <button className="btn-primary" style={{ marginTop: '16px' }}>
              Khám phá ngay
            </button>
          </div>
        </div>
      </section>

      {/* danh muc noi bat nhat */}
      <section className="container home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">DANH MỤC NỔI BẬT</h2>
          <span className="home-view-all">Xem tất cả →</span>
        </div>
        <div className="home-categories-grid">
          {categories.map((cat) => (
            <div key={cat.category_id} className="home-category-card">
              <div className="cat-icon-box">{cat.icon || getCategoryIcon(cat.name)}</div>
              <span className="cat-name">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* san pham noi bat nhat */}
      <section className="container home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">SẢN PHẨM NỔI BẬT</h2>
          <div className="home-tabs">
            <button
              className={`home-tab-btn ${activeTab === 'newest' ? 'active' : ''}`}
              onClick={() => setActiveTab('newest')}
            >
              Mới nhất
            </button>
            <button
              className={`home-tab-btn ${activeTab === 'bestseller' ? 'active' : ''}`}
              onClick={() => setActiveTab('bestseller')}
            >
              Bán chạy
            </button>
          </div>
        </div>

        {loading && products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--text-muted)' }}>
            Đang tải sản phẩm từ máy chủ... (Server Render có thể mất 30-45 giây để thức dậy)
          </div>
        ) : products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
            Chưa có sản phẩm nào được hiển thị.
          </div>
        ) : (
          <div className="home-products-grid">
            {products.map((p) => (
              <ProductCard key={p.product_id} product={p} />
            ))}
          </div>
        )}

        {/* xem them */}
        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <button
            className="btn-outline"
            style={{ padding: '10px 32px', fontWeight: 600 }}
            onClick={() => window.location.href = '/search'}
          >
            Xem thêm sản phẩm
          </button>
        </div>
      </section>

      {/* khoi cam ket dich vu */}
      <section className="container home-services-section">
        <div className="home-services-grid">
          <div className="service-card">
            <Truck size={28} className="service-icon" />
            <div>
              <h4>Miễn phí vận chuyển</h4>
              <p>Đơn hàng từ 300k</p>
            </div>
          </div>
          <div className="service-card">
            <RotateCcw size={28} className="service-icon" />
            <div>
              <h4>Đổi trả dễ dàng</h4>
              <p>Trong 30 ngày</p>
            </div>
          </div>
          <div className="service-card">
            <ShieldCheck size={28} className="service-icon" />
            <div>
              <h4>Bảo mật thanh toán</h4>
              <p>Chứng thực SSL 256-bit</p>
            </div>
          </div>
          <div className="service-card">
            <Gift size={28} className="service-icon" />
            <div>
              <h4>Ưu đãi thành viên</h4>
              <p>Tích điểm đổi quà</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}