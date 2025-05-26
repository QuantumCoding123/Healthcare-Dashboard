import { anatomyIndicators } from "../lib/data/healthData"

const AnatomySection = () => {
  return (
    <div className="flex justify-center items-center p-4 sm:p-6 lg:p-8 bg-white rounded-xl">
      <div className="relative w-[200px] h-[280px] sm:w-[250px] sm:h-[350px] lg:w-[300px] lg:h-[400px]">
        <img src="/images/human-body.jpg" alt="Human Anatomy" className="w-full h-full object-contain" />

        {anatomyIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className="absolute z-10"
            style={{
              top: indicator.position.top,
              left: indicator.position.left,
            }}
          >
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-indigo-600 text-white rounded-full text-xs font-medium whitespace-nowrap shadow-lg">
              <span>❤️</span>
              <span>{indicator.title}</span>
            </div>
          </div>
        ))}

        <button className="absolute -bottom-3 sm:-bottom-5 left-1/2 transform -translate-x-1/2 px-3 sm:px-6 py-2 sm:py-3 bg-teal-400 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-teal-500 transition-all shadow-lg hover:shadow-xl">
          📊 Healthy Log
        </button>
      </div>
    </div>
  )
}

export default AnatomySection
