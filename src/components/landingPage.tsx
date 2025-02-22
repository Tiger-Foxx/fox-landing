import  {useEffect, useRef, useState} from 'react';
import {Cpu, Github, Globe, Lock, Server, Shield, Terminal,} from 'lucide-react';
import {FaGoogle, FaWhatsapp} from 'react-icons/fa'; // Gmail et WhatsApp
import MatrixRain from "./MatrixRain.tsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GlitchText = ({ text, intensity = 1 }) => {
  const [glitchState, setGlitchState] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchState(true);
      setTimeout(() => setGlitchState(false), 150 * intensity);
    }, Math.random() * 3000 + 1000);

    return () => clearInterval(glitchInterval);
  }, [intensity]);

  return (
      <div className="glitch-container">
      <span className={`glitch-text ${glitchState ? 'active' : ''}`} data-text={text}>
        {text}
      </span>
      </div>
  );
};

const HackerMessage = () => {
  const messages = [
    "Infiltration en cours...",
    "Bypassing security...",
    "Access granted...",
    "System compromised...",
    "Data extraction: 98%"
  ];
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="typing-effect text-[#58d5c2] text-sm font-mono">
        {messages[currentMessage]}
      </div>
  );
};

const CircuitLines = () => (
    <div className="absolute inset-0 circuit-lines opacity-20">
      {[...Array(20)].map((_, i) => (
          <div
              key={i}
              className="circuit-line"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
          />
      ))}
    </div>
);

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitchIntensity, setGlitchIntensity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef(null);
  const SITE = 'https://theoldfox.pythonanywhere.com/'
  function  gotoSite(){
    window.location.href=SITE;
  }
  const socialLinks = [
    { Icon: Github, url: "https://github.com/Tiger-Foxx" },
    { Icon: FaWhatsapp, url: "https://wa.me/+237658866639" },
    { Icon: FaGoogle, url: "mailto:donfackarthur750@gmail.com" }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const glitchInterval = setInterval(() => {
      setGlitchIntensity(Math.random() * 2 + 0.5);
    }, 5000);

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(glitchInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    { icon: Terminal, text: "Ingénieur mercenaire", color: "#58d5c2" },
    { icon: Shield, text: "Hacker Éthique", color: "#58d5c2" },
    { icon: Globe, text: "Web & Mobile", color: "#58d5c2" },
    { icon: Cpu, text: "Solutions Desktop", color: "#58d5c2" },
    { icon: Server, text: "Infrastructure", color: "#58d5c2" },
    { icon: Lock, text: "Sécurité Avancée", color: "#58d5c2" }
  ];

  // @ts-ignore
  // @ts-ignore
  return (
      <div ref={containerRef} className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
        <MatrixRain />  {/* Ajoutez cette ligne ici */}
        <CircuitLines />

        {/* Ajout de l'avatar en arrière-plan pour mobile */}
        <div className="absolute inset-0 md:hidden pointer-events-none z-0">
          <div className="relative w-full h-full">
            <img
                src="avat.png"
                alt="Background Fox Avatar"
                className="absolute top-[13%] left-1/2 -translate-x-1/2 w-[150%] max-w-none opacity-[0.45] blur-[1px] cyber-avatar-background"
            />
          </div>
        </div>

        {/* Grille cyberpunk améliorée */}
        <div className="absolute inset-0 cyber-grid opacity-30" />

        {/* Overlay avec gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />

        {/* Message secret */}
        <div className="absolute top-5 right-5 z-20">
          <HackerMessage />
        </div>

        {/* Logo */}
        <div className="absolute top-5 left-5 z-20 w-16 h-16">
          <img
              src="logo-fox-light.png"
              alt="Logo"
              className="w-full h-full object-contain cyber-logo"
          />
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-center">
          {/* Section gauche */}
          <div className={`w-full md:w-1/2 space-y-8 transition-all duration-1000 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            {/* Titre avec effet glitch */}
            <div className="relative mb-12">
              <GlitchText text="FOX" intensity={glitchIntensity}/>
            </div>

            {/* Message personnalisé */}
            <div
                className="cyber-message-container p-4 border border-[#58d5c2] rounded-lg bg-gray-900/80 backdrop-blur-sm">
              <p className="text-[#58d5c2] font-mono text-lg">
                "Viens ! je t'emmène dans l'entre d'un renard de la tech."
              </p>
            </div>

            <div className="boutonmobilecontainer">
              <button className="cyber-button bouton boutonmobile" onClick={gotoSite}>
                <span className="text-lg font-semibold">Accéder au site {'>'} </span>

                <div className="cyber-button-glitch"/>
              </button>
            </div>


            {/* Cartes de compétences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                  <div
                      key={index}
                      className="cyber-skill-card group"
                      style={{
                        //@ts-expect-error
                        '--card-color': skill.color,
                        animationDelay: `${index * 0.1}s`
                      }}
                  >
                    <div className="relative flex items-center gap-3 p-4 rounded-lg
                    bg-gray-800/50 backdrop-blur-sm border border-[#58d5c2]/30
                    transition-all duration-300 hover:scale-105 hover:border-[#58d5c2]
                    cursor-pointer overflow-hidden"
                    >
                      <div className="text-[#58d5c2] group-hover:scale-110 transition-transform">
                        <skill.icon className="w-6 h-6"/>
                      </div>
                      <span className="text-lg cyber-text">{skill.text}</span>
                      <div className="cyber-card-glitch"/>
                      <div className="cyber-card-scanner"/>
                    </div>
                  </div>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex gap-6 flex-wrap">
              {/*<button className="cyber-button bouton" onClick={gotoSite}>*/}
              {/*  <span className="text-lg font-semibold">Accéder au site {'>'} </span>*/}

              {/*  <div className="cyber-button-glitch"/>*/}
              {/*</button>*/}

              <div className="flex gap-4">
                {socialLinks.map(({Icon, url}, index) => (
                    <div
                        key={index}
                        className="cyber-social-icon cursor-pointer"
                        onClick={() => window.open(url, "_blank")}
                    >
                      <Icon className="w-6 h-6"/>
                      <div className="cyber-social-scanner"/>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section droite - Avatar */}
          <div
      className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 ${
        isLoaded ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div
        className="relative max-w-md mx-auto"
        style={{
          transform: `perspective(1000px) 
                      rotateY(${mousePos.x}deg) 
                      rotateX(${-mousePos.y}deg)`,
        }}
      >
        {/* Skeleton Loader */}
        {!isLoaded && (
          <Skeleton
            height={250} // Ajuste la hauteur selon ton image
            width="100%"
            baseColor="#1a1a1a"
            highlightColor="#2c2c2c"
            className="rounded-lg"
          />
        )}

        {/* Image réelle */}
        <img
          src="avat.png"
          alt="Fox Avatar"
          className={`w-full rounded-lg cyber-avatar transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)} // Masque le Skeleton une fois l’image chargée
        />

        {/* Effets cyber */}
        {isLoaded && (
          <>
            <div className="cyber-avatar-glitch" />
            <div className="cyber-avatar-scanner" />
            <div className="cyber-avatar-glow" />
          </>
        )}
      </div>
    </div>
        </div>
      </div>
  );
};

export default LandingPage;