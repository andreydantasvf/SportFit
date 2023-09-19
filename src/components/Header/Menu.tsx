import Link from "next/link"
import { useMenu } from ".";

export const Menu = () => {
  const { isMenuOpen } = useMenu();

  return (
    <ul className={`${isMenuOpen ? 'block' : 'hidden'}  absolute top-full w-full flex flex-col items-center gap-3 border-b p-3 rounded-lg shadow-2xl border-zinc-800 bg-zinc-900 lg:flex lg:flex-row lg:static lg:w-fit lg:border-none lg:shadow-none lg:gap-10`}>
      <li className="text-xl font-semibold hover:text-pink-700 delay-100"><Link href="#home">Home</Link></li>
      <li className="text-xl font-semibold hover:text-pink-700 delay-100"><Link href="#about">Sobre</Link></li>
      <li className="text-xl font-semibold hover:text-pink-700 delay-100"><Link href="#trainers">Treinadores</Link></li>
      <li className="text-xl font-semibold hover:text-pink-700 delay-100"><Link href="#contact">Contatos</Link></li>
    </ul>
  )
}