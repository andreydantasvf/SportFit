import Image from "next/image"
import { Menu } from "./Menu"
import { MenuButton } from "./MenuButton"

export const NavBar = () => {
  return (
    <nav className="flex justify-between relative backdrop-blur-md bg-zinc-900 p-6">
      <div>
        <Image src="/logo.svg" alt="Logo SportFit" width={64} height={64} />
        <h1 className="hidden">Sport<span>Fit</span></h1>
      </div>

      <MenuButton />
      <Menu />
    </nav>
  )
}