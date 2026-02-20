import { newsData } from '@/data/news'
import { FaCalendarAlt, FaTag } from 'react-icons/fa'

const News = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'プレスリリース':
        return 'bg-accent/20 text-accent'
      case 'お知らせ':
        return 'bg-textSecondary/20 text-textSecondary'
      default:
        return 'bg-textSecondary/20 text-textSecondary'
    }
  }

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-textPrimary mb-4">
            お知らせ
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg">
            最新のニュースとお知らせをご覧ください
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                  <div className="flex items-center text-textSecondary text-sm">
                    <FaCalendarAlt className="mr-2" />
                    <span>{news.date}</span>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                      news.category
                    )}`}
                  >
                    <FaTag className="mr-1 text-xs" />
                    {news.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-accent transition-colors">
                {news.title}
              </h3>

              <p className="text-textSecondary leading-relaxed">{news.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-md transition-all duration-300">
            お知らせ一覧を見る
          </button>
        </div>
      </div>
    </section>
  )
}

export default News
