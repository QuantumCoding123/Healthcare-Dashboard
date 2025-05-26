import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { calendarData, appointmentCards, upcomingSchedule } from "../lib/data/appointmentData"
import SimpleAppointmentCard from "./SimpleAppointmentCard"

const CalendarScheduleSection = () => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      {/* Header with Profile and Plus Icons */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 flex-1">
          <span className="text-sm text-gray-500">This Week</span>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-base sm:text-lg font-semibold text-gray-800">{calendarData.month}</span>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <ChevronLeft size={16} className="text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <ChevronRight size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Profile and Plus Icons */}
        <div className="flex items-center gap-2 sm:gap-3 ml-4">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-teal-400 flex items-center justify-center">
            <img src="/images/logo2.jpg" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
          <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition-colors">
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4 sm:mb-6">
        {calendarData.days.map((day) => (
          <div key={day.date} className="text-center p-1 sm:p-3">
            <div className="mb-1 sm:mb-2">
              <span className="block text-xs text-gray-400 mb-1">{day.day}</span>
              <span className="block text-sm sm:text-base font-semibold text-gray-800">{day.date}</span>
            </div>

            <div className="space-y-1">
              {day.appointments.map((time, index) => (
                <div key={index} className="text-xs px-1 sm:px-2 py-1 bg-indigo-600 text-white rounded text-center">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
        {appointmentCards.map((card) => (
          <div
            key={card.id}
            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl text-white"
            style={{ backgroundColor: card.color }}
          >
            <div className="text-xl sm:text-2xl">{card.type === "dentist" ? "🦷" : "🏥"}</div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs sm:text-sm font-semibold mb-1 truncate">{card.title}</h4>
              <p className="text-xs opacity-90 mb-1">{card.time}</p>
              <p className="text-xs opacity-80 truncate">{card.doctor}</p>
            </div>
          </div>
        ))}
      </div>

      {/* The Upcoming Schedule Section */}
      <div className="border-t border-gray-100 pt-6 sm:pt-8 mt-2">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-6 sm:mb-8">The Upcoming Schedule</h2>

        {upcomingSchedule.map((daySchedule, index) => (
          <div key={index} className="mb-4 sm:mb-6 last:mb-0">
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-3 sm:mb-4">{daySchedule.day}</h3>

            {/* Grid layout for appointment cards - 2 cards per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {daySchedule.appointments.map((appointment) => (
                <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarScheduleSection
