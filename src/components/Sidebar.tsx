import type React from "react"
import { Grid, Clock, Calendar, Users, BarChart, FileText, MessageCircle, Phone, Settings } from "lucide-react"
import { navigationItems } from "../data/navigationData"
import "./Sidebar.css"

const iconMap = {
  grid: Grid,
  clock: Clock,
  calendar: Calendar,
  users: Users,
  "bar-chart": BarChart,
  "file-text": FileText,
  "message-circle": MessageCircle,
  phone: Phone,
  settings: Settings,
}

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h3 className="sidebar-title">General</h3>
          <nav className="sidebar-nav">
            {navigationItems.map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap]
              return (
                <a key={item.id} href="#" className={`nav-item ${item.active ? "active" : ""}`}>
                  <IconComponent size={20} />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
