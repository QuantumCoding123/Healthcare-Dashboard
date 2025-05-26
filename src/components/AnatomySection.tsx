import type React from "react"
import { anatomyIndicators } from "../data/healthData"
import "./AnatomySection.css"

const AnatomySection: React.FC = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <img src="/images/anatomy.png" alt="Human Anatomy" className="anatomy-image" />

        {anatomyIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className="anatomy-indicator"
            style={{
              top: indicator.position.top,
              left: indicator.position.left,
            }}
          >
            <div className="indicator-badge healthy">
              <span className="indicator-icon">❤️</span>
              <span className="indicator-text">{indicator.title}</span>
            </div>
          </div>
        ))}

        <button className="healthy-log-btn">📊 Healthy Log</button>
      </div>
    </div>
  )
}

export default AnatomySection
