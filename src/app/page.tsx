import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import { LocalizationSection } from "@/components/LocalizationSection";
import { PlansSection } from "@/components/PlansSection";
import { TrainersSection } from "@/components/TrainersSection";
import { ArrowRight, Check, Clock3, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px]">
        <HomeSection />

        <AboutSection />

        <PlansSection />

        <TrainersSection />

        <section className="flex flex-col items-center justify-center gap-4 mb-20 lg:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-3xl lg:text-6xl">Vantagens Transformadoras da Atividade Física</h3>
            <p className="text-zinc-400">Praticar atividades físicas não é apenas um hábito saudável, é uma escolha de vida que oferece uma série de recompensas. Além de fortalecer seu corpo, as atividades físicas promovem um equilíbrio emocional, aumentam a energia e estimulam uma sensação duradoura de bem-estar. Portanto, dê o primeiro passo em direção a uma vida mais vibrante e ativa - as vantagens são infinitas.</p>
            <span className="text-pink-700 font-semibold flex items-center gap-1">Saiba Mais <ArrowRight size={18} /></span>
          </div>

          <Image src="/girl-acedemy-exercise.png" alt="Mulher Loira treinando" width={500} height={500} className="hidden lg:block w-full max-w-[500px]" />
        </section>

        <ContactSection />

        <LocalizationSection />
      </main>
    </>
  )
}
