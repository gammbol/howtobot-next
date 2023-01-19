import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen bg-[#242424] z-0 overflow-y-scroll overflow-x-hidden">
      <Head>
        <title>Создание телеграм ботов</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* Crew */}
      <section id="about" className="snap-start">
        <About />
      </section>
    </div>
  );
}
