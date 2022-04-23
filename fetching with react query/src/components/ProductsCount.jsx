import { useAllProducts } from "../hooks";

const ProductsCount = () => {
    const {data, loading} = useAllProducts();
    return ( 
        <div>
           total product count : {loading ? "loading..." : data?.length}
        </div>
     );
}
 
export default ProductsCount;