import axios from 'axios';


const API_URL = 'http://localhost:8080'; // ✅ Backend base URL

export const getKararlar = () => axios.get(`${API_URL}/api/karar`);
export const araKarar = (kelime) => axios.get(`${API_URL}/ara?kelime=${kelime}`);
export const ekleKarar = (data) => axios.post(API_URL, data);
export const silKarar = (id) => axios.delete(`${API_URL}/${id}`);

export const syncKararlar = () => axios.post(`${API_URL}/sync/kararlar`);

export const aramaYap = (sorgu) =>
  axios.get(`${API_URL}/api/aramalar/arama?q=${encodeURIComponent(sorgu)}`);
