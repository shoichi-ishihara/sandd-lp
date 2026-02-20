'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { id: 'company', label: '会社概要' },
    { id: 'vision', label: 'VISION' },
    { id: 'services', label: '事業内容' },
    { id: 'news', label: 'お知らせ' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['hero', 'company', 'vision', 'services', 'news']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary/80 backdrop-blur-md shadow-2xl border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <div
            className="text-3xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent cursor-pointer tracking-tight"
            onClick={() => scrollToSection('hero')}
          >
            S&D
          </div>

          <div className="hidden md:flex items-center space-x-1 bg-surface/30 backdrop-blur-sm rounded-full px-2 py-2 border border-border/30">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-accent text-white shadow-lg' 
                    : 'text-textPrimary hover:text-accent hover:bg-surface/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-textPrimary hover:text-accent transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-border/50 rounded-b-2xl overflow-hidden">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-6 py-3.5 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-white bg-accent shadow-lg'
                      : 'text-textPrimary hover:text-accent hover:bg-surface/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
