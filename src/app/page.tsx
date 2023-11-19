import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative flex h-screen w-screen flex-col justify-center overflow-hidden">
        <iframe
          className="absolute z-20 drop-shadow-xl"
          src="https://my.spline.design/untitled-eeb93e7ac151a1def4843e6ae82b697d/"
          width="100%"
          height="120%"
        ></iframe>
        <h1 className="absolute z-10 text-clip px-44 text-center text-9xl font-black drop-shadow-lg">
          O seu Guia de Sobrevivência no Mundo dos Blocos
        </h1>

        <Image
          className="z-0 blur-sm brightness-75"
          src="/wallpaper1.jpg"
          width={1920}
          height={1080}
          alt=""
        />
      </section>
    </main>
  );
}
