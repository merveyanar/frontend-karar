import axios from 'axios';

const API_URL = 'http://localhost:8080/api/karar';

export const getKararlar = () => axios.get(API_URL);
export const araKarar = (kelime) => axios.get(`${API_URL}/ara?kelime=${kelime}`);
export const ekleKarar = (data) => axios.post(API_URL, data);
export const silKarar = (id) => axios.delete(`${API_URL}/${id}`);
