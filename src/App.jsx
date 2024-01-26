import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Root from "./routes/Root";
import Products from './routes/Products';
import Product from './routes/Product';
import About from './routes/About';
import Cart from './routes/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/products/:id",
          element: <Product />
        }
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
