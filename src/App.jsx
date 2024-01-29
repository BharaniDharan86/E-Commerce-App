import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products ";
import CartPage from "./pages/CartPage";
import AboutUs from "./pages/AboutUs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SingleProduct from "./features/products/SingleProduct";
import { Provider } from "react-redux";
import store from "./utils/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
