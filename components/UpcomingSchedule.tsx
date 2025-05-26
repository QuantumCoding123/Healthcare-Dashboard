import { upcomingSchedule } from "../lib/data/appointmentData"
import SimpleAppointmentCard from "./SimpleAppointmentCard"

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">The Upcoming Schedule</h2>

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
  )
}

export default UpcomingSchedule
