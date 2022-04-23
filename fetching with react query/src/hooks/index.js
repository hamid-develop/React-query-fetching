import { useState, useEffect } from "react";
import * as api from "../api";
import { useMutation, useQuery, QueryCache } from "react-query";

const useAllProducts = () => {
  return useQuery("products", api.getAllProducts);

  //         const [data, setData] = useState(null)
  //     const [loading, setLoading] = useState(true)

  //   useEffect(() => {
  //     api.getAllProducts().then((data) => {
  //         setData(data)
  //         setLoading(false)
  //     })

  //   },[])
  //   return {data, loading}
};

const useProduct = (id) => {
  return useQuery("product", api.getProduct(id));
};

const useDeleteProduct = () => {
  return useMutation(api.deleteProduct, {
    onSuccess: (id) => {
      const products = QueryCache.getQueryData("products");
      const data = products.filter((item) => item.id !== id);
      QueryCache.setQueryData("products", data);
    },
  });
};

export { useAllProducts, useProduct, useDeleteProduct };
