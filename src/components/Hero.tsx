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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-primary/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,58,138,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(96,165,250,0.05),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-textPrimary leading-tight">
            <span className="block">技術とイノベーションで</span>
            <span className="block text-accent mt-2">未来を創造する</span>
          </h1>

          <p className="text-xl sm:text-2xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            FA設備設計からITコンサルティングまで
            <br />
            お客様のビジネスを全力でサポートします
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToCompany}
              className="px-8 py-4 bg-accent hover:bg-accent/80 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              詳しく見る
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-md transition-all duration-300"
            >
              事業内容
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaArrowDown className="text-accent text-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
