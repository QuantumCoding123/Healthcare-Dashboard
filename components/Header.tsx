import { Search, Bell } from "lucide-react"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-white border-b border-gray-100 h-[70px]">
      <div className="flex-shrink-0">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Health<span className="text-teal-400">care</span>.
        </h1>
      </div>

      {/* <div className="flex flex-1 max-w-md mx-4 lg:mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all"
          />
        </div>
      </div> */}

      {/* <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} className="text-gray-600" />
        </button>
      </div> */}
    </header>
  )
}

export default Header
