import axios from "axios";

const client = axios.create({
  baseURL: "http://fakestoreapi.com",
});

const getAllProducts = async () => {
  const { data } = await client.get(`/products`);
  return data;
};

const getProduct = async () => {
  const { data } = client.get(`/products/${id}`);
  return data;
};

const deleteProduct = async (id) => {
  const { data } = client.get(`/products/${id}`);
  return data;
};

export { getAllProducts, getProduct, deleteProduct };
