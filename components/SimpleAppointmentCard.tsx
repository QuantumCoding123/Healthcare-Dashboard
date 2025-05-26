import { Check, Eye, Heart, Brain } from "lucide-react"

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

const SimpleAppointmentCard = ({ appointment }: SimpleAppointmentCardProps) => {
  const IconComponent = iconMap[appointment.icon as keyof typeof iconMap]

  return (
    <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-h-[80px]">
      <div
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center text-white flex-shrink-0"
        style={{ backgroundColor: appointment.color }}
      >
        <IconComponent size={16} />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2 truncate">{appointment.title}</h4>
        <p className="text-sm text-gray-500">{appointment.time}</p>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
