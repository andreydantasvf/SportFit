import { Menu, X } from "lucide-react"
import { useMenu } from ".";

export const MenuButton = () => {
  const { isMenuOpen, toggleMenu, scrolled } = useMenu();

  return (
    <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" aria-controls="navbar-default" aria-expanded="false" className="lg:hidden">
      {!isMenuOpen ?
        <>
          <span className="sr-only">Abrir menu principal</span>
          <Menu size={36} />
        </>
        :
        <>
          <span className="sr-only">Fechar menu principal</span>
          <X size={36} />
        </>}
    </button>
  )
}