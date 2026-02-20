import { newsData } from '@/data/news'
import { FaCalendarAlt, FaTag } from 'react-icons/fa'

const News = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'プレスリリース':
        return 'bg-accent/20 text-accent border border-accent/30'
      case 'お知らせ':
        return 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
      default:
        return 'bg-textSecondary/20 text-textSecondary border border-textSecondary/30'
    }
  }

  return (
    <section id="news" className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 tracking-tight">
              お知らせ
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
          <p className="text-textSecondary/80 mt-6 text-lg">
            最新のニュースとお知らせをご覧ください
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-5">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="group bg-gradient-to-br from-surface/60 to-surface/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
                <div className="flex flex-wrap items-center gap-4 mb-3 sm:mb-0">
                  <div className="flex items-center text-textSecondary/80 text-sm font-medium">
                    <FaCalendarAlt className="mr-2.5 text-accent" />
                    <span>{news.date}</span>
                  </div>
                  <span
                    className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold ${getCategoryColor(
                      news.category
                    )}`}
                  >
                    <FaTag className="mr-1.5 text-xs" />
                    {news.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-textPrimary mb-4 group-hover:text-accent transition-colors leading-tight">
                {news.title}
              </h3>

              <p className="text-textSecondary/90 leading-relaxed">{news.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-surface/50 backdrop-blur-sm border-2 border-accent/50 text-accent hover:border-accent hover:bg-accent/10 font-semibold rounded-xl transition-all duration-300 text-lg">
            お知らせ一覧を見る
          </button>
        </div>
      </div>
    </section>
  )
}

export default News
