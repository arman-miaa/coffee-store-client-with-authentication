import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch("https://coffee-store-server-one-coral.vercel.app/coffee"),
        },
        {
          path: "addCoffee",
          element: <AddCoffee></AddCoffee>,
        },
        {
          path: "updateCoffee/:id",
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({ params }) =>
            fetch(
              `https://coffee-store-server-one-coral.vercel.app/coffee/${params.id}`
            ),
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/users",
          element: <Users></Users>,
          loader: () =>
            fetch("https://coffee-store-server-one-coral.vercel.app/users"),
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
