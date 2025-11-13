import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local' // Correto
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fdf5e4', // Cor bege do Fika
}

export const metadata: Metadata = {
//  metadataBase: new URL('https://fika-o-jogo.com.br'), // Comentado, como pediu
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Fika - O Jogo',
    template: '%s | Fika'
  },
  description:  'Fika é mais do que um jogo: é um convite para desacelerar, conversar e criar conexões.',
};

// Carregue a fonte local da sua *nova* pasta app/font/
const garet = localFont({
  src: [
    {
      path: './font/garet/Garet-Book.woff2', // Ótimo, nome de arquivo verificado
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/garet/Garet-Heavy.woff2', // Ótimo, nome de arquivo verificado
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/garet/Garet-Heavy.woff2', // Ótimo, nome de arquivo verificado
      weight: '800',
      style: 'normal',
    },
    // {
    //   path: './font/garet/Garet-BookItalic.woff2', // Comentado, como no seu exemplo
    //   weight: '400',
    //   style: 'italic',
    // },
  ],
  variable: '--font-garet',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Rolagem suave para os links de âncora
    <html lang="pt-BR" className="scroll-smooth">
      <body
        // A cor de fundo 'bg-fika-bege' está aqui
        className={`${garet.variable} font-sans bg-fika-bege tracking-tight antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col">
          {/* MUDANÇA IMPORTANTE AQUI:
            Removi 'max-w-md' e 'px-4' para permitir que o conteúdo (a galeria)
            se estenda por toda a largura. A cor 'text-fika-azul' está aqui
            para ser herdada por todos os filhos.
          */}
          <div 
            className="relative mx-auto w-full flex-1 text-fika-azul"
          >
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}