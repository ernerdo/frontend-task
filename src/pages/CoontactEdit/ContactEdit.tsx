import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DefaultLayout } from '../../layout'
import { ContactsState, editContact } from '../../redux/slices/contactsSlice'

interface RootState {
  contacts: ContactsState
}

export const ContactEdit = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  const [contactId, setContactId] = useState(Number(id))
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    status: true,
  })

  if (!id) {
    navigate('/')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      editContact({
        id: contactId,
        firstName: userData.firstName,
        lastName: userData.lastName,
        status: userData.status,
      })
    )
    navigate('/')
  }
  useEffect(() => {
    const contact = contacts.find((contact) => contact.id === Number(id))
    if (contact) {
      setUserData(contact)
      setContactId(contact.id)
    }
  }, [id, contacts])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = event.target
    const newValue =
      type === 'radio' ? (value === 'active' ? true : false) : value
    setUserData((prevUserData) => ({
      ...prevUserData,
      [id]: newValue,
    }))
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 md:w-full place-items-center">
        <p className="font-bold  text-lg"> Edit Contact Screen</p>
        <div className="flex flex-col gap-4 border-2 border-black p-4">
          <form onSubmit={handleSubmit} className="w-96 mx-auto">
            <div className="mb-4 md:flex items-center	">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mr-2 w-36"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                value={userData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 md:flex items-center">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mr-2 w-36"
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex place-items-center mb-4 ">
              <span className="block text-gray-700 text-center text-sm font-bold mb-2 w-36">
                Status:
              </span>
              <div className="flex flex-col gap-2 w-full py-2 px-3">
                <label className="items-center">
                  <input
                    type="radio"
                    id="status"
                    className="form-radio text-blue-500"
                    value="active"
                    checked={userData.status === true}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label className="items-center">
                  <input
                    type="radio"
                    id="status"
                    className="form-radio text-red-500"
                    value="inactive"
                    checked={userData.status === false}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Inactive</span>
                </label>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Edited Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  )
}
