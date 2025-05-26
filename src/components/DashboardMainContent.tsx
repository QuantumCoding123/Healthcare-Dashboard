import type React from "react"
import AnatomySection from "./AnatomySection"
import HealthStatusCards from "./HealthStatusCards"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"
import ActivityFeed from "./ActivityFeed"
import "./DashboardMainContent.css"

const DashboardMainContent: React.FC = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>

      <div className="dashboard-grid">
        <div className="anatomy-health-section">
          <div className="anatomy-health-container">
            <AnatomySection />
            <HealthStatusCards />
          </div>
        </div>

        <div className="calendar-section">
          <CalendarView />
        </div>

        <div className="schedule-section">
          <UpcomingSchedule />
        </div>

        <div className="activity-section">
          <ActivityFeed />
        </div>
      </div>
    </main>
  )
}

export default DashboardMainContent
