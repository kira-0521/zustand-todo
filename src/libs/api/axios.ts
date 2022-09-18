
import axios from 'axios';
import { BASE_URL } from '../const';

export const apiInstance = axios.create({
  baseURL: BASE_URL
})