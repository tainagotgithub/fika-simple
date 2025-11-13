// Em: app/header.tsx
import Link from 'next/link'

export function Header() {
  return (
    // Header "fino" (py-4 = padding vertical de 1rem)
    // w-full garante que ele ocupe a largura do container
    <header className="w-full py-4">
      <nav>
        {/* Usamos as cores e fontes que você já configurou! */}
        <ul className="flex flex-wrap justify-center space-x-2 text-sm font-bold text-fika-azul">
          <li>
            <Link 
              href="#proposito" 
              className="p-2 rounded hover:bg-fika-amarelo/50 transition-colors"
            >
              . propósito .
            </Link>
          </li>
          <li>
            <Link 
              href="#como-jogar" 
              className="p-2 rounded hover:bg-fika-amarelo/50 transition-colors"
            >
              . como jogar .
            </Link>
          </li>
          <li>
            <Link 
              href="#onde-encontrar" 
              className="p-2 rounded hover:bg-fika-amarelo/50 transition-colors"
            >
              . onde encontrar .
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}