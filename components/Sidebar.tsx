import { Grid, Clock, Calendar, Users, BarChart, FileText, MessageCircle, Phone, Settings } from "lucide-react"
import { navigationItems } from "../lib/data/navigationData"

const iconMap = {
  grid: Grid,
  clock: Clock,
  calendar: Calendar,
  users: Users,
  "bar-chart": BarChart,
  "file-text": FileText,
  "message-circle": MessageCircle,
  phone: Phone,
  settings: Settings,
}

const Sidebar = () => {
  return (
    <aside className="w-48 sm:w-56 lg:w-60 bg-white border-r border-gray-100 h-[calc(100vh-70px)] overflow-y-auto">
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
        <div className="mb-8">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4 px-2 sm:px-4">General</h3>
          <nav className="space-y-1">
            {navigationItems
              .filter((item) => item.id !== "setting")
              .map((item) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <a
                    key={item.id}
                    href="#"
                    className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                      item.active ? "bg-teal-400 text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <IconComponent size={18} />
                    <span className="hidden sm:block">{item.label}</span>
                  </a>
                )
              })}
          </nav>
        </div>

        {/* Settings at the bottom */}
        <div className="mt-auto">
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <Settings size={18} />
            <span className="hidden sm:block">Setting</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
