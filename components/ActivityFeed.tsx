import { activityData } from "../lib/data/appointmentData"

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.chartData.map((d) => d.value))

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Activity</h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">{activityData.title}</p>

      <div className="h-32 sm:h-40 lg:h-48">
        <div className="flex items-end justify-between h-full gap-1 sm:gap-2">
          {activityData.chartData.map((data, index) => (
            <div key={data.day} className="flex flex-col items-center flex-1 h-full">
              <div
                className="w-full max-w-4 sm:max-w-6 rounded-t transition-all duration-300 mb-1 sm:mb-2"
                style={{
                  height: `${(data.value / maxValue) * 100}%`,
                  backgroundColor: index === 3 ? "#4ecdc4" : "#e2e8f0",
                }}
              />
              <span className="text-xs text-gray-400 font-medium">{data.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed
