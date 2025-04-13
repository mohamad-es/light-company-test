import { createBrowserRouter } from "react-router";
import MessagePage from "../features/Message/MessagePage";
import WalletPage from "../features/Wallet/WalletPage";
import App from "../App";
import HomePage from "../features/Home/pages/HomePage";

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
