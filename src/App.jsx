import "./App.css";
import React, { useEffect } from "react";
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
  Profile,
  Dashboard,
  Settings,
  Write,
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
        {
          path: "write",
          element: <Write />,
        },
        {
          path: "user",
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "dashboard",
              element: <Dashboard />,
              children: [
                {
                  index: true,
                  element: <Settings />,
                },
                {
                  path: "edit-profile",
                  element: <Settings />,
                },
                {
                  path: "write",
                  element: <Write />,
                },
                // {
                //   path: "blogs",
                //   element: <div className="flex-1 p-8"><h1 className="text-2xl font-semibold">My Blogs</h1><p className="text-gray-600">My blogs page - To be implemented</p></div>,
                // },
              ],
            },
          ],
        }
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
