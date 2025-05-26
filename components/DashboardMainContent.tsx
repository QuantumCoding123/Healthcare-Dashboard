import AnatomySection from "./AnatomySection"
import HealthStatusCards from "./HealthStatusCards"
import CalendarScheduleSection from "./CalendarScheduleSection"
import ActivityFeed from "./ActivityFeed"
import { Search, Bell } from "lucide-react"

const DashboardMainContent = () => {
  return (
    <main className="flex-1 p-3 sm:p-4 lg:p-6 xl:p-8 bg-gray-50 overflow-y-auto">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">Dashboard</h1>

        {/* Search below Dashboard title */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all"
              />
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="text-gray-600" size={20} />
          </button>
        </div>
      </div>

      

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl">
        {/* Left Column - Anatomy and Health Status */}
        <div className="xl:col-span-1 order-1">
          <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
            <div className="w-full lg:flex-1">
              <AnatomySection />
            </div>
            <div className="w-full lg:w-auto">
              <HealthStatusCards />
            </div>
          </div>

          {/* Activity Feed below anatomy section */}
          <div className="xl:block">
            <ActivityFeed />
          </div>
        </div>

        {/* Right Column - Combined Calendar and Schedule with Profile Icons */}
        <div className="xl:col-span-1 order-2">
          <CalendarScheduleSection />
        </div>
      </div>
    </main>
  )
}

export default DashboardMainContent
