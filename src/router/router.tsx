import { createBrowserRouter } from "react-router";
import HomePage from "../features/Home/HomePage";
import MessagePage from "../features/Message/MessagePage";
import WalletPage from "../features/Wallet/WalletPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/message",
        element: <MessagePage />,
      },
      {
        path: "/wallet",
        element: <WalletPage />,
      },
    ],
  },
]);
