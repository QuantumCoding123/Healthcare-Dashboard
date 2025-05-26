import { ChevronLeft, ChevronRight } from "lucide-react"
import { calendarData, appointmentCards } from "../lib/data/appointmentData"

const CalendarView = () => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
    </div>
  )
}

export default CalendarView
