import { Sidebar } from '../Sidebar'

type Props = {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-5 gap-4 h-screen">
      <div className="col-span-1 bg-gray-200 p-4">
        <Sidebar />
      </div>
      <div className="col-span-4 bg-white p-4">{children}</div>
    </div>
  )
}
