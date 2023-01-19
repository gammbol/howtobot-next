import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Обучение созданию телеграм ботов",
      "Подготовили ученики 11Д класса",
      "Барышев Максим, Смолина Надежда, Ушаков Леонид",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <h1 className=" text-xl md:text-5xl lg:text-6xl font-semibold px-10 max-w-5xl text-center">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </motion.div>
    </div>
  );
}
