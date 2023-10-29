import { BrowserRouter, useRoutes } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home/index";
import MyOrder from "../MyOrder/index";
import MyOrders from "../MyOrders/index";
import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/:category", element: <Home /> },
    // { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/shopi/"}>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
