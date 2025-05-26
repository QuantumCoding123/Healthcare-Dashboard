import { healthStatusData } from "../lib/data/healthData"

const HealthStatusCards = () => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto">
      {healthStatusData.map((item) => (
        <div key={item.id} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm min-w-[180px] sm:min-w-[200px]">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <div className="text-xl sm:text-2xl">
              {item.id === "lungs" && "🫁"}
              {item.id === "teeth" && "🦷"}
              {item.id === "bone" && "🦴"}
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-800">{item.title}</h3>
          </div>

          <p className="text-xs text-gray-500 mb-3 sm:mb-4">{item.date}</p>

          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
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
