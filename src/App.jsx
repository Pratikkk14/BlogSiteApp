import "./App.css";
import React, { useState, useEffect } from "react";
import { useUIStore } from "./store/useStore";
import {
  TestComponent,
  ErrorPage,
  Signin,
  Navbar,
  Home,
  Signup,
  signinAction,
  signupAction,
} from "./components";
import { createBrowserRouter, RouterProvider } from "react-router";


function App() {
   const theme = useUIStore((state) => state.theme);

   useEffect(() => {
     document.documentElement.setAttribute("data-theme", theme);
   }, [theme]);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Signin />,
          action: signinAction,
        },
        {
          path: "signin",
          element: <Signin />,
          action: signinAction,
        },
        {
          path: "signup",
          element: <Signup />,
          action: signupAction,
        },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
    {
      path: "/test",
      element: <TestComponent />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
