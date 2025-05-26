import type React from "react"
import { Check, Eye, Heart, Brain } from "lucide-react"
import "./SimpleAppointmentCard.css"

interface Appointment {
  id: string
  title: string
  time: string
  icon: string
  color: string
}

interface SimpleAppointmentCardProps {
  appointment: Appointment
}

const iconMap = {
  check: Check,
  eye: Eye,
  heart: Heart,
  brain: Brain,
}

const SimpleAppointmentCard: React.FC<SimpleAppointmentCardProps> = ({ appointment }) => {
  const IconComponent = iconMap[appointment.icon as keyof typeof iconMap]

  return (
    <div className="simple-appointment-card">
      <div className="appointment-icon" style={{ backgroundColor: appointment.color }}>
        <IconComponent size={16} />
      </div>

      <div className="appointment-details">
        <h4 className="appointment-title">{appointment.title}</h4>
        <p className="appointment-time">{appointment.time}</p>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
