import Header from "@/components/Header";
import About from "@/sections/About";
import Drinks from "@/sections/Drinks";
import Footer from "@/sections/Footer";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Location from "@/sections/Location";
import Snacks from "@/sections/Snacks";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Drinks />
      <Snacks />
      <Gallery />
      <Location />
      <Footer />
    </>
  );
}
