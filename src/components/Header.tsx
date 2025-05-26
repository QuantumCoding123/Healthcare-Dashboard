import type React from "react"
import { Search, Bell, Plus } from "lucide-react"
import "./Header.css"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">
          Health<span className="logo-accent">care</span>.
        </h1>
      </div>

      <div className="header-center">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>

      <div className="header-right">
        <button className="notification-btn">
          <Bell size={20} />
        </button>

        <div className="user-profile">
          <img src="/placeholder.svg?height=32&width=32" alt="User Avatar" className="user-avatar" />
        </div>

        <button className="add-btn">
          <Plus size={20} />
        </button>
      </div>
    </header>
  )
}

export default Header
