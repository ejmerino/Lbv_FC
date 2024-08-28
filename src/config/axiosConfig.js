// src/config/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 5000,  // Tiempo de espera de 5 segundos
  headers: {
    'Content-Type': 'application/json',
    // Agrega más cabeceras según sea necesario (por ejemplo, autenticación)
  }
});

export default axiosInstance;
