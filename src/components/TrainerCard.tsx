import Image from "next/image"

interface TrainerCardProps {
  name: string;
  urlImage: string;
}

export const TrainerCard = ({ name, urlImage }: TrainerCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image src={urlImage} alt="Foto da treinadora 1" width={250} height={300} />
      <span className="text-lg font-medium">{name}</span>
    </div>
  )
}