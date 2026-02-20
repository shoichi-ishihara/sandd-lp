import { companyData } from '@/data/company'

const CompanyProfile = () => {
  const items = [
    { label: '会社名', value: companyData.name },
    { label: '英文表記', value: companyData.nameEn },
    { label: '設立', value: companyData.established },
    { label: '代表者', value: companyData.ceo },
    { label: '資本金', value: companyData.capital },
    { label: '所在地', value: companyData.address },
    { label: '従業員数', value: companyData.employees },
    { label: '事業内容', value: companyData.business },
  ]

  return (
    <section id="company" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-textPrimary mb-4">
            会社概要
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-lg">
            {items.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 ${
                  index !== items.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <dt className="text-textSecondary font-semibold">{item.label}</dt>
                <dd className="sm:col-span-2 text-textPrimary">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyProfile
