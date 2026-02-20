import { servicesData } from '@/data/services'
import { FaBolt, FaCode, FaLightbulb, FaCheckCircle } from 'react-icons/fa'

const Services = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBolt':
        return <FaBolt className="text-5xl text-accent" />
      case 'FaCode':
        return <FaCode className="text-5xl text-accent" />
      case 'FaLightbulb':
        return <FaLightbulb className="text-5xl text-accent" />
      default:
        return <FaBolt className="text-5xl text-accent" />
    }
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-textPrimary mb-4">
            事業内容
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            私たちは、お客様のビジネスを成功に導くための
            <br />
            3つの専門サービスを提供しています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-surface border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="p-8">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-textPrimary mb-4 text-center">
                  {service.title}
                </h3>

                <p className="text-textSecondary leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="text-accent text-sm mt-1 flex-shrink-0" />
                      <span className="text-textSecondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/20 px-8 py-4 border-t border-border">
                <button className="text-accent hover:text-accent/80 font-semibold text-sm transition-colors">
                  詳細を見る →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
