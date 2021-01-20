import axios from 'axios';
const API_URL =
  'https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  timeout: 5000,
});

const Get = async (url, data) => {
  return axiosInstance.get(url);
};

const Post = async (url, data) => {
  return axiosInstance.post(url, data);
};

const Put = async (url, data) => {
  return axiosInstance.put(url, data);
};

const GetWithHeader = async (url, token) => {
  try {
    const response = await axiosInstance.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err, 'err data');
    return err;
  }
};

const ApiService = {
  Get,
  Post,
  Put,
  GetWithHeader,
};

export default ApiService;
