import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom'
import { ChartMap, ContactEdit, Contacts, ContactCreate } from '../pages'

interface RoutesProps {
  children?: React.ReactNode
  location?: Partial<Location> | string
}
export const AppRouter = ({ children }: RoutesProps) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/contact/create" element={<ContactCreate />} />
        <Route path="/contact/edit/:id" element={<ContactEdit />} />
        <Route path="/chart-map" element={<ChartMap />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}
