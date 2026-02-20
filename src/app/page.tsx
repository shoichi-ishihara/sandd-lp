import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CompanyProfile from '@/components/CompanyProfile'
import Vision from '@/components/Vision'
import Services from '@/components/Services'
import News from '@/components/News'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CompanyProfile />
      <Vision />
      <Services />
      <News />
      <Footer />
    </main>
  )
}
