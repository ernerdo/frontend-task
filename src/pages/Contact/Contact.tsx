import { Link } from 'react-router-dom'
import { DefaultLayout } from '../../layout'
import { NotContact } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { ContactsState, removeContact } from '../../redux/slices/contactsSlice'

interface RootState {
  contacts: ContactsState
}

export const Contacts = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  const dispatch = useDispatch()

  const handleRemoveContact = (contactId: number) => {
    dispatch(removeContact(contactId))
  }
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 w-full place-items-center">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/contact/create">Create Contact</Link>
          </button>
        </div>
        {contacts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
            {contacts &&
              contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="border-2 border-black p-4 text-center"
                >
                  <p className="font-bold text-lg">
                    {contact.firstName} {contact.lastName}
                  </p>
                  <p className="font-bold text-lg">
                    {contact.status ? 'Active' : 'Inactive'}
                  </p>
                  <div className="flex flex-col gap-4 w-56">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      <Link to={`/`}>Edit</Link>
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleRemoveContact(contact.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <NotContact />
        )}
      </div>
    </DefaultLayout>
  )
}
