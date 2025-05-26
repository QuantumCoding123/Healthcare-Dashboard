import type React from "react"
import { upcomingSchedule } from "../data/appointmentData"
import SimpleAppointmentCard from "./SimpleAppointmentCard"
import "./UpcomingSchedule.css"

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className="schedule-title">The Upcoming Schedule</h2>

      {upcomingSchedule.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <h3 className="day-title">{daySchedule.day}</h3>
          <div className="appointments-list">
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
