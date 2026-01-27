import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import About from "@/components/About";
import Footer from "@/components/Footer"; // Importe aqui

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <About />
      <BentoGrid />
      <Footer /> {/* Adicione aqui no final (pode tirar a div h-20 se quiser) */}
    </main>
  );
}