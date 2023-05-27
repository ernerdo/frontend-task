import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ChartMap, Contacts } from "../pages";

interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}
export const AppRouter = ({ children }: RoutesProps) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/chart-map" element={<ChartMap />} />
      </Routes>
    </Router>
  );
};
