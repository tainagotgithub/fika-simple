// Em: app/page.tsx
import Image from 'next/image'
import { galeriaImagens } from './data' // Importa suas imagens da galeria

export default function HomePage() {
  return (
    // O 'items-center' principal ainda centraliza o layout em bloco
    <div className="flex flex-col items-center">
      
      {/* 1. Logo - (como estava) */}
      <div className="w-full max-w-xl mx-auto px-4 my-8 flex justify-center"> 
        <Image
          src="/images/CAIXA.png" // Ajuste o caminho!
          width={188}
          height={100}
          alt="FIKA O Jogo"
          priority
        />
      </div>

      {/* 2. Galeria de Imagens Horizontais (Vazadas) - (como estava) */}
      <div className="w-full py-4 my-4 -mx-4 md:-mx-6 lg:-mx-8">
        <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
          
          {galeriaImagens.map((imagem) => (
            <div key={imagem.id} className="flex-shrink-0">
              <Image
                src={imagem.src}
                alt={imagem.alt}
                width={imagem.width}
                height={imagem.height}
                className="rounded-lg object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
      {/* Fim da Galeria */}

      {/* Container do texto (max-w-xl) */}
      <div className="w-full max-w-xl mx-auto px-4">

        {/* 3. Seção Propósito */}
        <section id="proposito" className="w-full my-6 text-left">
          {/* Título: text-3xl (Maior) */}
          <h2 className="text-3xl font-extrabold mb-4">
            nosso propósito 
          </h2>
          
          {/* Intro: text-lg (Maior) e leading-snug (Linha justa) */}
          <p className="text-base italic mb-6 leading-snug">
            é mais do que um jogo: é um convite para desacelerar,
            conversar e criar conexões
          </p>

          {/* Corpo: text-base (Maior) e space-y-2 (Parágrafos juntos) e leading-snug (Linha justa) */}
          <div className="text-base space-y-2 leading-snug">
            <p>
              Na Suécia, o fika é uma tradição cultural que
              representa uma pausa no dia para relaxar,
              tomar um café e conversar com pessoas queridas.
            </p>
            <p>
              Mais do que um simples intervalo, é um momento de
              presença, escuta e conexão.
            </p>
            <p>
              Trazendo esse conceito para o Brasil, o jogo FIKA
              nasceu para fortalecer laços e
              transformar conversas em cuidado e colaboração,
              seja no trabalho, na família ou entre
              amigos.
            </p>
          </div>
        </section>

        {/* 4. Seção Como Jogar */}
        <section id="como-jogar" className="w-full my-6 text-left">
          {/* Título: text-3xl (Maior) */}
          <h2 className="text-3xl font-extrabold mb-4">
            como jogar 
          </h2>
          
          {/* Corpo: text-base (Maior) e space-y-2 (Parágrafos juntos) e leading-snug (Linha justa) */}
          <div className="text-base space-y-2 leading-snug">
            <p>
              Inspirado em clássicos como o UNO, o FIKA é um jogo
              de cartas com quatro categorias:
            </p>
            
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Lazer</li>
              <li>Relacionamentos afetivos</li>
              <li>Profissional</li>
              <li>Social</li>
            </ul>

            <p>
              Cada carta traz uma pergunta que desperta
              memórias, reflexões e boas risadas.
            </p>
            <p>
              As cartas são jogadas por cor ou categoria, e as
              cartas pretas são curingas, permitindo mudar a cor e
              fazer uma pergunta extra para a próxima pessoa.
            </p>
            <p>
              Quem ficar sem cartas primeiro vence, mas o
              verdadeiro ganho está nas conversas que
              acontecem no caminho.
            </p>
          </div>
        </section>

        {/* 5. Seção Onde Encontrar */}
        <section id="onde-encontrar" className="w-full my-6 text-left">
          {/* Título: text-3xl (Maior) */}
          <h2 className="text-3xl font-extrabold mb-4">
            onde encontrar 
          </h2>
          
          {/* Corpo: text-base (Maior) e space-y-2 (Parágrafos juntos) e leading-snug (Linha justa) */}
          <div className="text-base space-y-2 leading-snug">
            <p>
              O FIKA é uma criação do Projeto Anima, iniciativa
              voltada à promoção de bem-estar e
              vínculos sociais entre pessoas idosas e suas
              comunidades.
            </p>
            <p>
              Nosso objetivo é transformar momentos simples em
              experiências significativas, através de
              atividades que unem ludicidade, memória e afeto.
            </p>
            <p>
              Quer saber mais ou adquirir o jogo?
            </p>
          </div>
        </section>

{/* 6. Botão de Contato (Centralizado) */}
        <div className="w-full flex justify-center">
          <a
            // 1. ATUALIZE O LINK AQUI
            href="https://www.instagram.com/idososanima?igsh=NHlpcW1vcnRyNGo1" 
            
            // 2. ADICIONE ESSAS DUAS PROPRIEDADES para abrir em nova aba
            target="_blank"
            rel="noopener noreferrer"
            
            className="mt-8 mb-12 inline-block px-10 py-3 
              text-2xl font-extrabold rounded-full shadow-lg 
              transition-transform hover:scale-105"
            
            style={{
              backgroundColor: '#cc3c46', // O seu fika-vermelho
              color: '#fdf5e4',           // O seu fika-bege
              textDecoration: 'none'
            }}
          >
            entre em contato
          </a>
        </div>

      </div> {/* Fim do div de centralização do texto 'max-w-xl' */}

    </div>
  )
}