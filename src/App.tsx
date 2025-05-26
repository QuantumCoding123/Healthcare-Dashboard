import type React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import DashboardMainContent from "./components/DashboardMainContent"
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
