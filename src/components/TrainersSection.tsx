import Image from "next/image"
import { TrainerCard } from "./TrainerCard"

export const TrainersSection = () => {
  return (
    <section id="trainers" className="flex flex-col items-center justify-center gap-4 mb-20">
      <h2 className="font-bold text-5xl">Treinadores</h2>

      <div className="grid grid-cols-1 grid-flow-row gap-4 lg:grid-cols-4">
        <TrainerCard name="Maria" urlImage="/trainer.png" />
        <TrainerCard name="João" urlImage="/treiner2.png" />
        <TrainerCard name="Lucas" urlImage="/treiner3.png" />
        <TrainerCard name="Camila" urlImage="/treiner4.png" />
        <TrainerCard name="Crystina" urlImage="/treiner5.png" />
        <TrainerCard name="Goes" urlImage="/treiner6.png" />
        <TrainerCard name="Newton" urlImage="/treiner7.png" />
      </div>

      <button className="bg-pink-700 p-4 rounded-lg text-lg font-semibold inline-block mt-4 w-full">Faça Parte</button>
    </section>
  )
}