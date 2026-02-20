'use client'

import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const scrollToCompany = () => {
    const element = document.getElementById('company')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,138,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(96,165,250,0.1),transparent_50%)]"></div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-textPrimary">技術とイノベーションで</span>
              <span className="block mt-3 bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent">
                未来を創造する
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-textSecondary/90 max-w-4xl mx-auto leading-relaxed font-light">
              FA設備設計からITコンサルティングまで<br className="hidden sm:block" />
              お客様のビジネスを全力でサポートします
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
            <button
              onClick={scrollToCompany}
              className="group relative px-10 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-glow text-lg min-w-[200px]"
            >
              <span className="relative z-10">詳しく見る</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-10 py-4 bg-surface/50 backdrop-blur-sm border-2 border-accent/50 text-accent hover:border-accent hover:bg-accent/10 font-semibold rounded-xl transition-all duration-300 text-lg min-w-[200px]"
            >
              事業内容
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-textSecondary/60">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <FaArrowDown className="text-xl animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
