import type React from "react"
import { activityData } from "../data/appointmentData"
import "./ActivityFeed.css"

const ActivityFeed: React.FC = () => {
  const maxValue = Math.max(...activityData.chartData.map((d) => d.value))

  return (
    <div className="activity-feed">
      <h2 className="activity-title">Activity</h2>
      <p className="activity-subtitle">{activityData.title}</p>

      <div className="chart-container">
        <div className="chart">
          {activityData.chartData.map((data, index) => (
            <div key={data.day} className="chart-bar-container">
              <div
                className="chart-bar"
                style={{
                  height: `${(data.value / maxValue) * 100}%`,
                  backgroundColor: index === 3 ? "#4ecdc4" : "#e2e8f0",
                }}
              />
              <span className="chart-label">{data.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed
