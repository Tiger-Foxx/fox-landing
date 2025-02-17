import { useEffect, useState } from 'react'
import {
  Terminal,
  Shield,
  Globe,
  Cpu,
  ChevronRight,
  Github,
  Linkedin
} from 'lucide-react'

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
      <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
        {/* Grille cyberpunk */}
        <div className="absolute inset-0 cyber-grid opacity-30" />

        {/* Overlay avec gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />

        {/* Contenu principal */}
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-center">

          {/* Section gauche */}
          <div className={`w-full md:w-1/2 space-y-8 transition-all duration-1000 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            {/* Titre avec effet glitch */}
            <div className="relative">
              <h1 className="text-7xl font-bold glitch-text" data-text="FOX">
                FOX
              </h1>
            </div>

            {/* Cartes de compétences */}
            <div className="space-y-4">
              {[
                { icon: <Terminal className="w-6 h-6" />, text: "Ingénieur mercenaire" },
                { icon: <Shield className="w-6 h-6" />, text: "Hacker Éthique" },
                { icon: <Globe className="w-6 h-6" />, text: "Web & Mobile" },
                { icon: <Cpu className="w-6 h-6" />, text: "Solutions Desktop" }
              ].map((item, index) => (
                  <div
                      key={index}
                      className="scan-effect group flex items-center gap-3 p-4 rounded-lg
                  bg-gray-800/50 backdrop-blur-sm border border-[#58d5c2]/30
                  transition-all duration-300 hover:scale-105 hover:border-[#58d5c2]
                  cursor-pointer"
                  >
                    <div className="text-[#58d5c2] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex gap-6">
              <button
                  onClick={() => window.location.href = '/site'}
                  className="cyber-pulse px-8 py-4 rounded-lg bg-[#58d5c2] text-white
                flex items-center gap-2 transition-all duration-300
                hover:bg-[#58d5c2]/80 hover:scale-105"
              >
                <span className="text-lg font-semibold">Accéder au site</span>
                <ChevronRight className="w-5 h-5 animate-bounce" />
              </button>

              <div className="flex gap-4">
                {[
                  { icon: <Github className="w-6 h-6" />, url: "https://github.com/yourusername" },
                  { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com/in/yourusername" }
                ].map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-pulse p-3 rounded-full bg-gray-800/50
                    backdrop-blur-sm border border-[#58d5c2]/30
                    transition-all duration-300 hover:scale-110
                    hover:border-[#58d5c2]"
                    >
                      {social.icon}
                    </a>
                ))}
              </div>
            </div>
          </div>

          {/* Section droite - Avatar */}
          <div className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="relative max-w-md mx-auto">
              <img
                  src="avat.png"
                  alt="Fox Avatar"
                  className="w-full rounded-lg float scan-effect"
              />
              {/* Effets de lumière */}
              <div className="absolute -inset-2 bg-[#58d5c2]/20 blur-xl -z-10" />
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#58d5c2]/10 to-transparent blur-lg" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default LandingPage