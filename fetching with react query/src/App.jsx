import "./App.css";
import Products from "./components/Products";
import ProductsCount from "./components/ProductsCount";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsCount /> 
      <Products />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
