// import router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// import components
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";

function App() {
  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
