import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Certifications from "@/components/Certifications";
import WhatIDo from "@/components/WhatIDo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Certifications />
      <WhatIDo />
      <Footer />
    </main>
  );
}
