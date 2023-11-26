import Image from "next/image";

export default function Home() {
  return (
    <main className="scrollbar-thin scrollbar-track-white scrollbar-corner-red scrollbar-thumb-[#70e448]  h-screen w-screen snap-y snap-mandatory overflow-x-hidden !scroll-smooth ">
      <section className="relative flex h-screen w-screen snap-start snap-always flex-col justify-center overflow-hidden">
        <iframe
          className="absolute z-20"
          src="https://my.spline.design/untitled-eeb93e7ac151a1def4843e6ae82b697d/"
          width="100%"
          height="120%"
        ></iframe>
        <h1 className="absolute z-10 px-44 text-center text-9xl font-black drop-shadow-lg">
          O seu Guia de Sobrevivência no Mundo dos Blocos
        </h1>

        <Image
          className="z-0 h-screen w-screen overflow-hidden blur-sm brightness-75"
          src="/wallpaper1.jpg"
          width={1920}
          height={1080}
          alt=""
        />
      </section>

      {/*  */}

      <section className="grid h-screen snap-start snap-always grid-cols-2 bg-white px-24 py-32 text-black">
        <div className="flex flex-col gap-20">
          <h2 className="text-5xl font-extrabold uppercase">Como começar</h2>

          <div className="flex flex-col gap-12">
            <div>
              <h4 className="text-2xl font-semibold text-[#3c8527]">
                Orientações Iniciais
              </h4>
              <p>
                Bem-vindo ao Minecraft, onde você é livre para criar seu próprio
                mundo de blocos! Se você está começando agora, este guia
                fornecerá as informações essenciais para começar sua jornada.
                Explore, construa e sobreviva!
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-[#3c8527]">
                Primeiros passos
              </h4>
              <p>
                Antes de começar sua aventura, é crucial coletar recursos
                básicos. Comece cortando árvores para obter madeira, mine pedra
                para ferramentas e procure carvão para iluminação. Use a bancada
                de trabalho para criar ferramentas essenciais.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-[#3c8527]">
                Primeira Noite
              </h4>
              <p>
                A primeira noite no Minecraft pode ser desafiadora. Construa um
                abrigo simples usando os blocos que coletou durante o dia.
                Certifique-se de ter iluminação suficiente para afastar os
                monstros durante a noite.
              </p>
            </div>
          </div>
        </div>

        <Image
          className="m-auto drop-shadow-lg"
          src="/workbench.png"
          width={300}
          height={300}
          alt=""
        />
      </section>

      <section className="relative grid h-screen snap-start snap-always grid-cols-2 bg-stone bg-[length:125px_125px] bg-repeat px-24 py-32 text-white">
        <div className="z-10 flex flex-col justify-around gap-20">
          <h2 className="text-5xl font-extrabold uppercase">
            Exploração e Recursos
          </h2>

          <div className="flex flex-col gap-12">
            <div>
              <h4 className="text-2xl font-semibold text-[#52a535]">
                Mineração Eficiente
              </h4>
              <p>
                A mineração é uma parte crucial do jogo. Encontre cavernas para
                descobrir minérios valiosos, mas esteja atento aos perigos. Use
                técnicas eficientes para maximizar seus recursos enquanto
                minimiza os riscos.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-[#52a535]">
                Biomas e Ores
              </h4>
              <p>
                Explore os diversos biomas do Minecraft, cada um com seus
                recursos únicos. Consulte mapas e coordenadas para encontrar
                biomas específicos e obtenha informações sobre os recursos
                disponíveis em cada um.
              </p>
            </div>
          </div>
        </div>

        <Image
          className="z-10 m-auto drop-shadow-lg"
          src="/pickaxe2.png"
          width={512}
          height={512}
          alt=""
        />

        <div className="absolute z-0 h-full w-full backdrop-blur-[2px] backdrop-brightness-[0.6]"></div>
      </section>

      <section className="relative grid h-screen snap-start snap-always grid-cols-2 bg-wood bg-[length:125px_125px] bg-repeat px-24 py-32 text-white">
        <div className="z-10 flex flex-col justify-around gap-20">
          <h2 className="text-5xl font-extrabold uppercase">
            Construção e Defesa
          </h2>

          <div className="flex flex-col gap-12">
            <div>
              <h4 className="text-2xl font-semibold text-[#52a535]">
                Construção de Abrigos
              </h4>
              <p>
                Construa abrigos adequados para sua sobrevivência. Aprenda a
                criar desde casas simples até fortalezas impressionantes. Dicas
                de design e decoração serão oferecidas para tornar suas
                construções ainda mais cativantes.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-[#52a535]">
                Defesa contra Monstros
              </h4>
              <p>
                Monstros vagueiam à noite e em lugares escuros. Desenvolva
                estratégias de defesa eficazes, como iluminação adequada,
                barreiras defensivas e armadilhas. Mantenha-se seguro enquanto
                explora o mundo.
              </p>
            </div>
          </div>
        </div>

        <Image
          className="z-10 m-auto drop-shadow-lg"
          src="/brick.png"
          width={300}
          height={300}
          alt=""
        />

        <div className="absolute z-0 h-full w-full backdrop-blur-[2px] backdrop-brightness-[0.6]"></div>
      </section>

      <section className="relative grid h-screen snap-start snap-always grid-cols-2 bg-haybale bg-[length:125px_125px] bg-repeat px-24 py-32 text-white">
        <div className="z-10 flex flex-col justify-around gap-20">
          <h2 className="text-5xl font-extrabold uppercase">
            Agricultura e Criação de animais
          </h2>

          <div className="flex flex-col gap-12">
            <div>
              <h4 className="text-2xl font-semibold text-[#52a535]">
                Cultivo Sustentável
              </h4>
              <p>
                Torne-se autossuficiente cultivando alimentos de forma
                sustentável. Aprenda a criar fazendas automáticas para maximizar
                a produção, garantindo que nunca fique sem comida.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-[#52a535]">
                Criação de Animais
              </h4>
              <p>
                Mantenha animais para obter alimentos e outros recursos. Saiba
                como cuidar deles e criar sistemas eficientes para garantir um
                suprimento constante de carne, leite e lã.
              </p>
            </div>
          </div>
        </div>

        <Image
          className="z-10 m-auto drop-shadow-lg"
          src="/ovelha.png"
          width={300}
          height={300}
          alt=""
        />

        <div className="absolute z-0 h-full w-full backdrop-blur-[2px] backdrop-brightness-[0.6]"></div>
      </section>

      <section className="relative grid h-screen snap-start snap-always grid-cols-2 bg-enderPortal bg-[length:250px_125px] bg-repeat px-24 py-32 text-white">
        <div className="z-10 flex flex-col justify-around gap-20">
          <h2 className="text-5xl font-extrabold uppercase">
            Avanços e exploração no Nether/End
          </h2>

          <div className="flex flex-col gap-12">
            <div>
              <h4 className="text-2xl font-semibold text-[#52a535]">
                Portais Nether/End
              </h4>
              <p>
                Desbloqueie novas dimensões, como o Nether e o End. Aprenda a
                criar portais e navegue com segurança por esses reinos perigosos
                em busca de recursos únicos.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-[#52a535]">
                Enfrentando Chefes
              </h4>
              <p>
                Prepare-se para enfrentar os chefes mais desafiadores do
                Minecraft. Descubra estratégias para derrotar o Dragão do End e
                o Wither, conquistando recompensas valiosas.
              </p>
            </div>
          </div>
        </div>

        <Image
          className="z-10 m-auto drop-shadow-lg"
          src="/enderDragon.png"
          width={600}
          height={600}
          alt=""
        />

        <div className="absolute z-0 h-full w-full backdrop-blur-[0.5px] backdrop-brightness-[0.75]"></div>
      </section>

      {/*  */}

      <section className="relative flex h-screen w-screen snap-start snap-always flex-col justify-center gap-8 overflow-hidden bg-white bg-footer bg-cover bg-center px-24 py-32 text-center">
        <div className="z-10 text-white">
          <h2 className="text-8xl font-black uppercase drop-shadow-lg">
            Obrigado por <br /> ter lido até aqui
          </h2>
          <h3 className="text-5xl font-semibold capitalize drop-shadow-md">
            Confira outros links abaixo
          </h3>
        </div>

        <div className="z-10 flex flex-row justify-center gap-10">
          <a
            href={"https://github.com/AbelardoOk"}
            target="blank"
            className="h-14 w-14 rounded-xl bg-white transition-all duration-200 hover:h-16 hover:w-16 hover:bg-slate-300"
          >
            <Image
              className="m-auto h-4/5 w-fit translate-y-[15%]"
              src="/github.png"
              alt=""
              height={512}
              width={512}
            />
          </a>
          <a
            href={"https://www.minecraft.net/pt-br"}
            target="blank"
            className="h-14 w-14 rounded-xl bg-white transition-all duration-200 hover:h-16 hover:w-16 hover:bg-slate-300"
          >
            <Image
              className="m-auto h-3/5 w-fit translate-y-[30%]"
              src="/creeper.png"
              alt=""
              height={512}
              width={512}
            />
          </a>
          <a
            href={"https://minecraft.fandom.com/wiki/Minecraft_Wiki"}
            target="blank"
            className="h-14 w-14 rounded-xl bg-white transition-all duration-200 hover:h-16 hover:w-16 hover:bg-slate-300"
          >
            <Image
              className="m-auto h-1/5 w-fit translate-y-[22px]"
              src="/Minecraft_Wiki_header.png"
              alt=""
              height={84}
              width={300}
            />
          </a>
        </div>

        <div className="absolute z-0 -mx-24 h-full w-full backdrop-blur-sm backdrop-brightness-[0.75]"></div>
      </section>
    </main>
  );
}
