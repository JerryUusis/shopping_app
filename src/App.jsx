import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Root from "./routes/Root";
import Products from './routes/Products';
import ProductSingle from './routes/ProductSingle';
import About from './routes/About';
import Cart from './routes/Cart';
import Not_found_404 from './routes/Not_found_404';
import { Provider } from 'react-redux';
import { store } from './store/store';

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
          element: <ProductSingle />
        },
        {
          path: "*",
          element: <Not_found_404 />
        }
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
