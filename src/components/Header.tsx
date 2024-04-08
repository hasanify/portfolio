"use client";

import { pantonBold } from "@/utils/fonts";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="fixed flex items-center justify-between w-screen h-20 px-4 sm:px-16 selection:bg-accent selection:text-background bg-foreground">
        <Link
          href={"/"}
          className={` text-background bg-[url('/favicon.svg')] bg-cover uppercase font-extrabold text-base sm:text-2xl ${pantonBold}`}
        >
          Hasan Ali
        </Link>
        <button
          className="active:rotate-180 active:scale-105"
          onClick={toggleMenu}
        >
          <RiMenu3Line className="text-background size-6 sm:size-8" />
        </button>
      </div>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

const Menu = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.menu
          key="menu"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed w-screen uppercase h-[100dvh] flex justify-center items-center flex-col bg-background"
        >
          <button onClick={toggleMenu}>
            <MdOutlineClose className="fixed text-background top-7 right-4 sm:right-16 bg-accent size-8" />
          </button>

          <div className="flex flex-col items-center gap-4 text-2xl font-bold">
            <MenuItem toggleMenu={toggleMenu} label="About" link="#about" />
            <MenuItem toggleMenu={toggleMenu} label="My Work" link="#work" />
            <MenuItem toggleMenu={toggleMenu} label="Contact" link="#contact" />
          </div>
        </motion.menu>
      )}
    </AnimatePresence>
  );
};

const MenuItem = ({
  link,
  label,
  toggleMenu,
}: {
  link: string;
  label: string;

  toggleMenu: () => void;
}) => {
  return (
    <Link onClick={toggleMenu} href={link} className="uppercase menu-item">
      {label}
    </Link>
  );
};

export default Header;
