import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen overflow-hidden">
      <section className="relative flex h-screen w-screen flex-col justify-center overflow-hidden">
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

      <section className="grid h-screen grid-cols-2 bg-white px-24 py-32 text-black">
        <div className="flex flex-col justify-between text-justify">
          <h2 className="text-5xl font-extrabold uppercase">Como começar</h2>

          <div className="flex flex-col gap-12">
            <div>
              <h4 className="text-2xl font-semibold">Orientações Iniciais</h4>
              <p>
                Bem-vindo ao Minecraft, onde você é livre para criar seu próprio
                mundo de blocos! Se você está começando agora, este guia
                fornecerá as informações essenciais para começar sua jornada.
                Explore, construa e sobreviva!
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold">Primeiros passos</h4>
              <p>
                Antes de começar sua aventura, é crucial coletar recursos
                básicos. Comece cortando árvores para obter madeira, mine pedra
                para ferramentas e procure carvão para iluminação. Use a bancada
                de trabalho para criar ferramentas essenciais.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold">Primeira Noite</h4>
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
          className="m-auto"
          src="/workbench.png"
          width={300}
          height={300}
          alt=""
        />
      </section>
    </main>
  );
}
