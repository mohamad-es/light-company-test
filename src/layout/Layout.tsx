import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;
