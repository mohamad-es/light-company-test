import { Link, useLocation } from "react-router";

const Sidebar = () => {
  // Array of sidebar menu items
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Message", path: "/message" },
    { label: "Wallet", path: "/wallet" },
  ];

  // Get the current location (URL) using useLocation hook
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-base-200 p-4">
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
      <ul className="menu p-4 space-y-4 w-full">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`hover:bg-gray-300 ${location.pathname === item.path ? 'bg-gray-300' : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
