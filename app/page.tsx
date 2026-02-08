"use client"
import About from "@/components/About";
import Hero from "@/components/Hero";
import LenisDiv from "@/components/LenisDiv";
import Work from "@/components/Work";

export default function Home() {
  return (
    <LenisDiv>
      <Hero />
      <About />
      <Work />
    </LenisDiv>
  );
}
