import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import DashboardMainContent from "../components/DashboardMainContent"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  )
}
