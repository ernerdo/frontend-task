import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="col-span-1 bg-gray-200 p-4">
      <ul className="space-y-2">
        <li>
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/chart-map" className="text-blue-500 hover:text-blue-700">
            Charts and Maps
          </Link>
        </li>
      </ul>
    </div>
  );
};
