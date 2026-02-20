import { visionData } from '@/data/vision'
import { FaLightbulb, FaEye, FaFlag, FaStar } from 'react-icons/fa'

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-textPrimary mb-4">
            VISION
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <FaLightbulb className="text-accent text-3xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-textPrimary mb-4 text-center">
              {visionData.philosophy.title}
            </h3>
            <p className="text-textSecondary leading-relaxed text-center">
              {visionData.philosophy.description}
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <FaEye className="text-accent text-3xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-textPrimary mb-4 text-center">
              {visionData.vision.title}
            </h3>
            <p className="text-textSecondary leading-relaxed text-center">
              {visionData.vision.description}
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <FaFlag className="text-accent text-3xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-textPrimary mb-4 text-center">
              {visionData.mission.title}
            </h3>
            <p className="text-textSecondary leading-relaxed text-center">
              {visionData.mission.description}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-textPrimary mb-2">私たちの価値観</h3>
            <p className="text-textSecondary">Values</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionData.values.map((value, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <FaStar className="text-accent text-xl mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-lg font-bold text-textPrimary mb-2">
                      {value.title}
                    </h4>
                    <p className="text-textSecondary text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
