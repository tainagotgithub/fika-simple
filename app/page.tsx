// Em: app/page.tsx
import Image from 'next/image'
import { galeriaImagens } from './data' // Importa suas imagens da galeria

export default function HomePage() {
  return (
    // ESTE É O NOVO CONTÊINER CENTRALIZADO PARA TODO O CONTEÚDO DA PÁGINA
    // Ele traz de volta o `max-w-md`, `mx-auto` e `px-4` para a maior parte do conteúdo
    // Mas a galeria ficará FORA dele para poder vazar!
    <div className="flex flex-col items-center">
      
      {/* 1. Logo - Centralizada dentro do fluxo normal de conteúdo */}
      <div className="w-full max-w-md mx-auto px-4 my-8 flex justify-center"> 
        <Image
          src="/images/CAIXA.png" // Ajuste o caminho!
          width={188}
          height={100}
          alt="FIKA O Jogo"
          priority
        />
      </div>

      {/* 2. Galeria de Imagens Horizontais (Vazadas)
          ESTE BLOCO INTEIRO É RESPONSÁVEL POR VAZAR.
          Ele está fora do contêiner `max-w-md` acima e abaixo,
          permitindo que ele ocupe a largura total da tela.
      */}
      <div className="w-full py-4 my-4 -mx-4 md:-mx-6 lg:-mx-8"> {/* Ajusta margem negativa para vazar */}
        {/* flex -> Coloca os itens um ao lado do outro
          overflow-x-auto -> Habilita a rolagem horizontal
          space-x-4 -> Adiciona espaço entre as imagens
          px-4 -> Padding lateral para as imagens não colarem nas bordas da tela
          scrollbar-hide -> (Opcional) Esconde a barra de rolagem (requer plugin)
        */}
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

      {/* NOVO CONTÊINER PARA O RESTO DO CONTEÚDO (TEXTO E BOTÃO)
          Este div traz de volta a centralização e o padding para o texto,
          garantindo que ele não fique "vazado".
      */}
      <div className="w-full max-w-md mx-auto px-4 text-center">

        {/* 3. Seção Propósito */}
        <section id="proposito" className="w-full my-6 text-left">
          <h2 className="text-3xl font-extrabold mb-4 text-center">
            nosso propósito #
          </h2>
          
          <p className="text-lg italic mb-6 text-center">
            é mais do que um jogo: é um convite para desacelerar,
            conversar e criar conexões
          </p>

          <div className="text-base space-y-4">
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
          <h2 className="text-3xl font-extrabold mb-4 text-center">
            como jogar #
          </h2>
          
          <div className="text-base space-y-4">
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
          <h2 className="text-3xl font-extrabold mb-4 text-center">
            onde encontrar #
          </h2>
          
          <div className="text-base space-y-4">
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

        {/* 6. Botão de Contato */}
<a
          href="#contato" 
          className="mt-8 mb-12 inline-block px-10 py-3 
            text-2xl font-extrabold rounded-full shadow-lg 
            transition-transform hover:scale-105"
          
          // AQUI ESTÁ A MUDANÇA MÁGICA
          style={{
            backgroundColor: '#cc3c46', // O seu fika-vermelho
            color: '#fdf5e4',           // O seu fika-bege
            textDecoration: 'none'       // Bônus: remove o sublinhado do link
          }}
        >
          entre em contato
        </a>

      </div> {/* Fim do div de centralização do texto */}

    </div>
  )
}