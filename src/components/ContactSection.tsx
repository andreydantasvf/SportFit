import Image from "next/image"

export const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center gap-4 mb-20">
      <h2 className="font-bold text-5xl">Contatos</h2>

      <div className="flex flex-col gap-2 items-center justify-center lg:flex-row lg:mt-8 lg:gap-4">
        <div className="space-y-4">
          <h3 className="font-bold text-2xl lg:text-5xl">Fale com a gente por meio do formulario</h3>
          <p className="text-zinc-400">Entre em contato para tirar quaisquer dúvidas que houver</p>

          <div className="my-4 flex flex-col">
            <input type="text" placeholder="Escreva a sua mensagem" className="p-2 rounded-xl text-black" />

            <button className="bg-pink-700 p-4 rounded-lg text-lg font-semibold inline-block mt-4 w-full">Enviar</button>
          </div>
        </div>

        <Image src="/girl-acedemy-exercise-3.png" alt="Image mulher treinando" width={500} height={500} className="w-full max-w-[500px]" />
      </div>

    </section>
  )
}