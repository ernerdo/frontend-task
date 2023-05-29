import { useState } from 'react'
import { DefaultLayout } from '../../layout'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/slices/contactsSlice'
import { useNavigate } from 'react-router-dom'

export const ContactCreate = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [status, setStatus] = useState(true)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      addContact({
        id: Math.floor(Math.random() * 1000),
        firstName,
        lastName,
        status,
      })
    )
    navigate('/')
  }
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 md:w-full place-items-center">
        <p className="font-bold  text-lg"> Create Contact Screen</p>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                    className="form-radio text-blue-500"
                    value="active"
                    checked={status === true}
                    onChange={() => setStatus(true)}
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label className="items-center">
                  <input
                    type="radio"
                    className="form-radio text-red-500"
                    value="inactive"
                    checked={status === false}
                    onChange={() => setStatus(false)}
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
                Save Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  )
}
