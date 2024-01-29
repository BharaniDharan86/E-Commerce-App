import { useQuery } from "@tanstack/react-query";
import getAllProducts from "../../services/apiProducts";
import ProductList from "./ProductList";

function Product() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      {products.map((product) => {
        return <ProductList key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Product;
