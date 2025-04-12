import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="container mx-auto px-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
