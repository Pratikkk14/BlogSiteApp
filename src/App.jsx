import "./App.css";
import React, { useEffect } from "react";
import { useUIStore } from "./store/useStore";
import {
  TestComponent,
  ErrorPage,
  Signin,
  Home,
  Signup,
  signinAction,
  signupAction,
  Profile,
  Dashboard,
  Settings,
  Write,
  PasswordPage,
} from "./components";
import MainLayout from "./components/Layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router";


function App() {
   const theme = useUIStore((state) => state.theme);

   useEffect(() => {
     document.documentElement.setAttribute("data-theme", theme);
   }, [theme]);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
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
          path: "write",
          element: <Write />,
        },
        {
          path: "notifications",
          element: <div>To be implemented: NOTIFICATIONS </div>,
        },
        {
          path: "user",
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "settings",
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
                  path: "Library",
                  element: <div>To be implemented: LIBRARY</div>,
                },
                {
                  path: "change-password",
                  element: <PasswordPage />,
                },
                {
                  path: "blogs",
                  element: <div>To be implemented: BLOGS</div>
                },
                {
                  path: "notifications",
                  element: <div>To be implemented: NOTIFICATIONS </div>,
                }
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
