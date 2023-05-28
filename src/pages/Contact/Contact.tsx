import { Link } from 'react-router-dom'
import { DefaultLayout } from '../../layout'
import { NotContact } from './components'
import { useSelector } from 'react-redux'
import { ContactsState } from '../../redux/slices/contactsSlice'

interface RootState {
  contacts: ContactsState
}

export const Contacts = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 w-full place-items-center">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/contact/create">Create Contact</Link>
          </button>
        </div>
        {contacts.length > 0 ? (
          <>
            <h1>contacts list</h1>
          </>
        ) : (
          <NotContact />
        )}
      </div>
    </DefaultLayout>
  )
}
