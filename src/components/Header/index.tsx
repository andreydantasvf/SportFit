"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { NavBar } from "./NavBar";

interface NavBarContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  scrolled: boolean;
}

const NavBarContext = createContext<NavBarContextProps | undefined>(undefined);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const contextValue: NavBarContextProps = {
    isMenuOpen: showMobileMenu,
    toggleMenu: () => setShowMobileMenu(prev => !prev),
    scrolled
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className="h-16 block w-full max-w-[1200px] fixed top-0 z-20">
      <NavBarContext.Provider value={contextValue}>
        <NavBar />
      </NavBarContext.Provider>
    </header>
  )
}

export function useMenu() {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}