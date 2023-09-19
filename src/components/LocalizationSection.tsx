import { Clock3, Facebook, Instagram, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export const LocalizationSection = () => {
  return (
    <section id="localization" className="flex flex-col items-center justify-center gap-4">
      <h2 className="font-bold text-5xl">Localização</h2>

      <Image src="/local.png" alt="Imagem do local" width={500} height={500} className="w-full" />

      <div className="flex flex-col gap-4 items-center justify-center lg:flex-row lg:justify-between lg:items-start lg:mt-10 lg:w-full">
        <div className="flex flex-col gap-3 items-center justify-center">
          <span className="flex items-center gap-1 font-semibold"><Phone className="text-pink-700" size={24} />Telefone:</span>
          <p>(83) 91234-5678</p>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center">
          <span className="flex items-center gap-1 font-semibold"><MapPin className="text-pink-700" size={24} />Local:</span>
          <p className="text-justify">Pedro David - 08; Monte Castelo; Patos - PB</p>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center">
          <span className="flex items-center gap-1 font-semibold"><Clock3 className="text-pink-700" size={24} />Horarios:</span>
          <p className="text-justify">Segunda à Sexta 7:00 - 20:00</p>
          <p className="text-justify">Sábados 8:00 - 18:00</p>
          <p className="text-justify">Domingos 10:00 - 13:00</p>
        </div>

        <div className="flex items-center gap-4 mt-6 text-pink-700">
          <Facebook />
          <Instagram />
        </div>
      </div>
    </section>
  )
}