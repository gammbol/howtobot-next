import { motion } from "framer-motion";
import React from "react";
import Kair, {
  default as Stephan,
  default as Vladimir,
} from "../images/cap1.jpeg";
import PersonCard from "./PersonCard";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col text-center md:text-left max-w-7xl md:px-10 px-2 justify-center mx-auto items-center gap-12"
    >
      <h3 className="relative uppercase tracking-[20px] text-gray-500 text-2xl justify-self-start">
        О нас
      </h3>
      <div className="w-full flex justify-between gap-5 items-center md:flex-row flex-col">
        <PersonCard
          name="Максим"
          field="Создатель контента"
          image={Vladimir}
          socials={["https://vk.com/ibeaui"]}
        />
        <PersonCard
          name="Надежда"
          field="Координатор"
          image={Kair}
          socials={["https://vk.com/xxxxx.hhhh"]}
        />
        <PersonCard
          name="Леонид"
          field="Веб разработчик"
          image={Stephan}
          socials={["https://vk.com/tryingtothink"]}
        />
      </div>
    </motion.div>
  );
}
