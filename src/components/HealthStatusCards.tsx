import type React from "react"
import { healthStatusData } from "../data/healthData"
import "./HealthStatusCards.css"

const HealthStatusCards: React.FC = () => {
  return (
    <div className="health-status-cards">
      {healthStatusData.map((item) => (
        <div key={item.id} className="health-card">
          <div className="health-card-header">
            <div className="health-icon">
              {item.id === "lungs" && "🫁"}
              {item.id === "teeth" && "🦷"}
              {item.id === "bone" && "🦴"}
            </div>
            <h3 className="health-title">{item.title}</h3>
          </div>

          <p className="health-date">{item.date}</p>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: `${item.progress}%`,
                backgroundColor: item.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default HealthStatusCards
