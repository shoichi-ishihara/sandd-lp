import { servicesData } from '@/data/services'
import { FaBolt, FaCode, FaLightbulb, FaCheckCircle } from 'react-icons/fa'

const Services = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBolt':
        return <FaBolt className="text-4xl text-accent" />
      case 'FaCode':
        return <FaCode className="text-4xl text-accent" />
      case 'FaLightbulb':
        return <FaLightbulb className="text-4xl text-accent" />
      default:
        return <FaBolt className="text-4xl text-accent" />
    }
  }

  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(96,165,250,0.05),transparent_70%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 tracking-tight">
              事業内容
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
          <p className="text-textSecondary/80 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
            私たちは、お客様のビジネスを成功に導くための<br className="hidden sm:block" />
            3つの専門サービスを提供しています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-br from-surface/60 to-surface/30 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-10">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center shadow-lg">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-textPrimary mb-5 text-center leading-tight">
                  {service.title}
                </h3>

                <p className="text-textSecondary/90 leading-relaxed mb-8 text-center">
                  {service.description}
                </p>

                <div className="space-y-3.5">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-0.5">
                        <FaCheckCircle className="text-accent text-base flex-shrink-0" />
                      </div>
                      <span className="text-textSecondary/80 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 px-8 py-5 border-t border-border/30">
                <button className="text-accent hover:text-accent/80 font-semibold text-sm transition-colors group-hover:translate-x-1 inline-flex items-center">
                  詳細を見る
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
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
