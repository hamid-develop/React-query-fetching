import { useAllProducts } from "../hooks";
import ListItem from "./ListItem";

const Products = () => {
  const { data } = useAllProducts();

 // if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data?.map((item) => {
        return <ListItem key={item.id} item={item} />
      })}
    </div>
  );
};

export default Products;
