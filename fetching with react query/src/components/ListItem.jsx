import { useDeleteProduct } from "../hooks";

const ListItem = ({ item }) => {
  const {remove} = useDeleteProduct();
  return (
    <div key={item.id} onClick={() => remove(item.id)}>
      {item.title}
    </div>
  );
};

export default ListItem;
