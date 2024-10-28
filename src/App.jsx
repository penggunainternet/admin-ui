import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPassword from "./pages/forgotPass";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },

    {
      path: "/forgotPass",
      element: <ForgotPassword />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
