import Image from "next/image"

export const PlansSection = () => {
  return (
    <section id="plans" className="flex flex-col items-center justify-center gap-4 mb-20">
      <h2 className="font-bold text-5xl">Planos</h2>

      <Image src="/card-platinum.svg" alt="Cartão da SportFit" width={250} height={250} className="w-full max-w-[500px]" />
      <p className="text-zinc-400 text-center">Na SportFit, nossos planos de inscrição oferecem acesso completo às nossas instalações e vantagens exclusivas, incluindo descontos em serviços de estética. Para aqueles que desejam ainda mais, nosso Cartão Platinum eleva sua experiência com acesso prioritário a aulas e serviços premium. Junte-se a nós para uma jornada fitness com benefícios excepcionais.</p>

      <button className="bg-pink-700 p-4 rounded-lg text-lg font-semibold inline-block mt-4 w-full lg:w-fit">Faça Parte</button>
    </section>
  )
}