import { useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div>
      <header className="w-full text-right p-4 md:hidden">
        <button
          className="text-blue-500 underline"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </header>
      <aside
        className={`w-full md:w-44 fixed left-0 top-0 h-screen bg-slate-700 p-6 md:block ${
          showSidebar ? 'block' : 'hidden'
        }`}
      >
        <div className="md:hidden flex flex-row-reverse">
          <button
            className="text-blue-500 underline"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 8.586L4.707 3.293a1 1 0 0 0-1.414 1.414L8.586 10l-5.293 5.293a1 1 0 1 0 1.414 1.414L10 11.414l5.293 5.293a1 1 0 0 0 1.414-1.414L11.414 10l5.293-5.293a1 1 0 1 0-1.414-1.414L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
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
      </aside>
      <main className="mt-10 md:ml-44 text-center">{children}</main>
    </div>
  )
}
