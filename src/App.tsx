// import { useRef } from 'react'
import React from 'react'
import { Terminal, AnimatedSpan, TypingAnimation as TerminalTyping } from '@/components/ui/terminal'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import './App.scss'

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.097"/>
  </svg>
)

const MemoizedGridPattern = React.memo(() => (
  <InteractiveGridPattern
    width={60}
    height={60}
    squares={[22, 20]}
    className="absolute inset-0 z-0 opacity-20 interactive-grid-pattern"
    squaresClassName="transition-none"
  />
))

function App() {


  return (
    <div className="max-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      <MemoizedGridPattern />

      <div className="flex flex-col items-center justify-center space-y-5">

        <div className="header">
          <code className='logo_title'>&gt; matheusmarques_</code>
          <AnimatedThemeToggler />
        </div>

        <div className="terminal_content w-full">
          <Terminal className="terminal break-words whitespace-normal">
            <AnimatedSpan className="text-animeted break-words whitespace-normal">
              <span className="npm-loading">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span>
              Installing dependencies...
            </AnimatedSpan>
            <TerminalTyping className='text-typing'>_Olá,</TerminalTyping>
            <AnimatedSpan className="text break-words whitespace-normal">✔ me chamo Matheus Marques e sou desenvolvedor frontend</AnimatedSpan>

            <AnimatedSpan className="text break-words whitespace-normal">✔ transformar ideias em interfaces bonitas, rápidas e fáceis de usar.</AnimatedSpan>

            <AnimatedSpan className="text break-words whitespace-normal">✔ Unifico código e design para criar experiências que realmente fazem sentido para o usuário.</AnimatedSpan>

            <a 
              href="https://wa.me/5521999592416?text=Olá%20Matheus!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <AnimatedShinyText className="whatsapp-contact">
                <WhatsAppIcon className="inline-block w-4 h-4 mr-2" />
                entre em contato
              </AnimatedShinyText>
            </a>

          </Terminal>
        </div>

        {/* footer */}
        <div className="footer">
          <p className="text-footer">desenvolvido por Matheus Marques</p>
        </div>
      </div>
    </div>
  )
}

export default App
