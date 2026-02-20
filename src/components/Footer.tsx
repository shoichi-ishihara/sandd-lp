import { companyData } from '@/data/company'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-secondary to-background border-t border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.03),transparent_70%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent mb-5">
              S&D株式会社
            </h3>
            <p className="text-textSecondary/80 text-sm leading-relaxed">
              技術とイノベーションで、お客様の課題解決と持続可能な社会の実現に貢献します。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-textPrimary mb-5 tracking-wide">会社情報</h4>
            <ul className="space-y-3 text-sm text-textSecondary/80">
              <li className="leading-relaxed">{companyData.address}</li>
              <li>TEL: 03-XXXX-XXXX</li>
              <li>FAX: 03-XXXX-XXXX</li>
              <li>Email: info@sandd-corp.co.jp</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-textPrimary mb-5 tracking-wide">リンク</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-textSecondary/80 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">プライバシーポリシー</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-textSecondary/80 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">利用規約</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-textSecondary/80 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">お問い合わせ</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-textSecondary/80 hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">採用情報</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-textSecondary/70 text-sm">
            &copy; {currentYear} S&D Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
