import { companyData } from '@/data/company'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">S&D株式会社</h3>
            <p className="text-textSecondary text-sm leading-relaxed">
              技術とイノベーションで、お客様の課題解決と持続可能な社会の実現に貢献します。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-textPrimary mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li>{companyData.address}</li>
              <li>TEL: 03-XXXX-XXXX</li>
              <li>FAX: 03-XXXX-XXXX</li>
              <li>Email: info@sandd-corp.co.jp</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-textPrimary mb-4">リンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-textSecondary hover:text-accent transition-colors"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-textSecondary hover:text-accent transition-colors"
                >
                  利用規約
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-textSecondary hover:text-accent transition-colors"
                >
                  お問い合わせ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-textSecondary hover:text-accent transition-colors"
                >
                  採用情報
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-textSecondary text-sm">
            &copy; {currentYear} S&D Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
