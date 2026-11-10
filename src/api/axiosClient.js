import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://tech-store-backend-37qq.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Hàm tự động lấy Guest Token nếu chưa có bất kỳ token nào
const ensureToken = async () => {
  let token = localStorage.getItem('token');
  if (!token) {
    try {
      const res = await axios.post('https://tech-store-backend-37qq.onrender.com/api/auth/guest');
      if (res.data?.data?.token) {
        token = res.data.data.token;
        localStorage.setItem('token', token);
      }
    } catch (e) {
      console.warn('Không thể khởi tạo guest token:', e);
    }
  }
  return token;
};

axiosClient.interceptors.request.use(async (config) => {
  let token = localStorage.getItem('token');
  if (!token) {
    token = await ensureToken();
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;