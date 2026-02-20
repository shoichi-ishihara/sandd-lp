import { visionData } from '@/data/vision'
import { FaLightbulb, FaEye, FaFlag, FaStar } from 'react-icons/fa'

const Vision = () => {
  return (
    <section id="vision" className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 tracking-tight">
              VISION
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
          <p className="text-textSecondary/80 mt-6 text-lg">私たちが目指す未来</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="group relative bg-gradient-to-br from-surface/60 to-surface/30 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaLightbulb className="text-accent text-4xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-textPrimary mb-5 text-center">
                {visionData.philosophy.title}
              </h3>
              <p className="text-textSecondary/90 leading-relaxed text-center">
                {visionData.philosophy.description}
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-surface/60 to-surface/30 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaEye className="text-accent text-4xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-textPrimary mb-5 text-center">
                {visionData.vision.title}
              </h3>
              <p className="text-textSecondary/90 leading-relaxed text-center">
                {visionData.vision.description}
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-surface/60 to-surface/30 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaFlag className="text-accent text-4xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-textPrimary mb-5 text-center">
                {visionData.mission.title}
              </h3>
              <p className="text-textSecondary/90 leading-relaxed text-center">
                {visionData.mission.description}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-textPrimary mb-3">私たちの価値観</h3>
            <p className="text-textSecondary/80 text-lg">Core Values</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionData.values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-surface/40 to-surface/20 backdrop-blur-sm border border-border/40 rounded-xl p-7 hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <FaStar className="text-accent text-lg" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-textPrimary mb-2.5">
                      {value.title}
                    </h4>
                    <p className="text-textSecondary/90 text-sm leading-relaxed">
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
