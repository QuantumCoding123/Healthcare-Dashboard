import type React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { calendarData, appointmentCards } from "../data/appointmentData"
import "./CalendarView.css"

const CalendarView: React.FC = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <div className="calendar-nav">
          <span className="week-label">This Week</span>
          <div className="month-nav">
            <span className="month-year">{calendarData.month}</span>
            <div className="nav-buttons">
              <button className="nav-btn">
                <ChevronLeft size={16} />
              </button>
              <button className="nav-btn">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.days.map((day) => (
          <div key={day.date} className="calendar-day">
            <div className="day-header">
              <span className="day-name">{day.day}</span>
              <span className="day-number">{day.date}</span>
            </div>

            <div className="day-appointments">
              {day.appointments.map((time, index) => (
                <div key={index} className="appointment-time">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="appointment-cards">
        {appointmentCards.map((card) => (
          <div key={card.id} className="appointment-card" style={{ backgroundColor: card.color }}>
            <div className="card-icon">{card.type === "dentist" ? "🦷" : "🏥"}</div>
            <div className="card-content">
              <h4 className="card-title">{card.title}</h4>
              <p className="card-time">{card.time}</p>
              <p className="card-doctor">{card.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarView
