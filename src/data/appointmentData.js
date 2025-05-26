export const calendarData = {
  month: "October 2021",
  days: [
    { date: 25, day: "Mon", appointments: ["10:00", "11:00", "12:00"] },
    { date: 26, day: "Tue", appointments: ["08:00", "09:00", "10:00"] },
    { date: 27, day: "Wed", appointments: ["12:00", "13:00"] },
    { date: 28, day: "Thu", appointments: ["10:00", "11:00"] },
    { date: 29, day: "Fri", appointments: ["14:00", "16:00"] },
    { date: 30, day: "Sat", appointments: ["15:00", "14:00"] },
    { date: 31, day: "Sun", appointments: ["09:00", "10:00", "11:00"] },
  ],
}

export const appointmentCards = [
  {
    id: "dentist",
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr Cameron Williamson",
    type: "dentist",
    color: "#4c63d2",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr Kevin Djores",
    type: "physiotherapy",
    color: "#f39c12",
  },
]

export const upcomingSchedule = [
  {
    day: "On Thursday",
    appointments: [
      {
        id: "checkup",
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "check",
        color: "#4ecdc4",
      },
      {
        id: "ophthalmologist",
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "eye",
        color: "#9b59b6",
      },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      {
        id: "cardiologist",
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "heart",
        color: "#e74c3c",
      },
      {
        id: "neurologist",
        title: "Neurologist",
        time: "16:00 PM",
        icon: "brain",
        color: "#3498db",
      },
    ],
  },
]

export const activityData = {
  title: "3 appointment on this week",
  chartData: [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 45 },
    { day: "Wed", value: 30 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 25 },
    { day: "Sat", value: 40 },
    { day: "Sun", value: 35 },
  ],
}
