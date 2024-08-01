import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

export const addProduct = async (product) => {
  try {
    const response = await api.post('/products', product);
    return response.data;
  } catch (error) {
    console.error('Error adding product', error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  } catch (error) {
    console.error('Error updating product', error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product', error);
    throw error;
  }
};
