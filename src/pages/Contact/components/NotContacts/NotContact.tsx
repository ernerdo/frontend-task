export const NotContact = () => {
  return (
    <>
      <div className="flex flex-row place-items-center justify-center gap-4 border-2 p-1 border-black w-fit md:w-1/2 lg:w-1/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-20 h-20"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        <div className="flex flex-col gap-4 justify-around ">
          <p className="text-sm md:text-lg whitespace-nowrap">
            No contact Found
          </p>
          <p className="text-sm md:text-lg whitespace-nowrap">
            Please add contact form
          </p>
          <p className="text-sm md:text-lg whitespace-nowrap">
            Create Contact button
          </p>
        </div>
      </div>
    </>
  )
}
