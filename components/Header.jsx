import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import plekhanovLogo from "../images/plekhanov.png";

function clickHandler(e) {
  console.log("clickHandler");
}

export default function Header() {
  return (
    <header className="fixed w-full left-0 right-0 top-0 flex items-center p-5 justify-between max-w-7xl mx-auto z-20 md:gap-60 gap-0">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Link href="#hero" className="block w-20 rounded-full p-2 bg-white">
          <Image className="" src={plekhanovLogo} alt="Plekanov Logo" />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex-grow"
      >
        <div className="md:hidden text-right" onClick={clickHandler}>
          sdfsdfs
        </div>
        <div className="md:flex hidden justify-around text-white text-xl font-thin">
          <Link href={"#hero"}>Главная</Link>
          <Link href={"#about"}>О нас</Link>
          <Link href={"#lessons"}>Уроки</Link>
        </div>
      </motion.div>
    </header>
  );
}
