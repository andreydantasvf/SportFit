import Image from "next/image"

export const HomeSection = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-6xl lg:text-8xl">
          Vida
          <br />
          Estética
        </h2>

        <p className="text-zinc-400">Transforme seu Corpo na SportFit: Estética em Foco</p>

        <button className="bg-pink-700 p-4 rounded-lg text-lg font-semibold inline-block mt-4 lg:w-fit">Faça Parte</button>
      </div>

      <Image src="/home-girl.svg" alt="Imagem de uma mulher morena se exercitando" width={250} height={250} className="w-full max-w-[500px] hidden lg:block" />
    </section>
  )
}