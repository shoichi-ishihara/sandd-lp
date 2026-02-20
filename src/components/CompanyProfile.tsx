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
    <section id="company" className="py-24 lg:py-32 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.05),transparent_70%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 tracking-tight">
              会社概要
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
          <p className="text-textSecondary/80 mt-6 text-lg">Company Profile</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-surface/80 to-surface/40 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-2xl">
            {items.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 hover:bg-surface/60 transition-colors duration-300 ${
                  index !== items.length - 1 ? 'border-b border-border/30' : ''
                }`}
              >
                <dt className="text-textSecondary/80 font-semibold text-sm uppercase tracking-wider">
                  {item.label}
                </dt>
                <dd className="sm:col-span-2 text-textPrimary text-lg font-medium">
                  {item.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyProfile
