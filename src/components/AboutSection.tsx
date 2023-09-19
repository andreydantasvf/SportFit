import { Check } from "lucide-react"
import Image from "next/image"

export const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center gap-4 mb-20">
      <h2 className="font-bold text-5xl">Sobre Nós</h2>
      <p className="text-zinc-400 text-center">Na SportFit, nossa paixão é a estética. Somos dedicados a ajudar você a alcançar seus objetivos de beleza e bem-estar. Com uma equipe de especialistas e tecnologia de ponta, estamos aqui para transformar sua jornada fitness em resultados incríveis. Junte-se a nós e descubra o poder da estética na SportFit.</p>

      <div className="mt-4 lg:flex lg:justify-evenly lg:w-full">
        <Image src="/girlImageAbout.svg" alt="Mulher loira treiando na acadêmia" width={250} height={250} className="w-full max-w-[500px]" />

        <div className="flex flex-col items-center justify-center mt-4">
          <ul className="lg:text-3xl lg:space-y-4">
            <li className="flex items-center gap-1"><Check className="text-pink-700" />Experiência Estética</li>
            <li className="flex items-center gap-1"><Check className="text-pink-700" />Profissionais Qualificados</li>
            <li className="flex items-center gap-1"><Check className="text-pink-700" />Tecnologia de Ponta</li>
            <li className="flex items-center gap-1"><Check className="text-pink-700" />Personalização</li>
            <li className="flex items-center gap-1"><Check className="text-pink-700" />Comunidade Apoiadora</li>
            <li className="flex items-center gap-1"><Check className="text-pink-700" />Bem-Estar Integral</li>
          </ul>

          <button className="bg-pink-700 p-4 rounded-lg text-lg font-semibold inline-block mt-4 w-full">Faça Parte</button>
        </div>
      </div>
    </section>
  )
}