import {
  Header,
  Footer,
  Hero,
  Personas,
  Features,
  HowItWorks,
  Benefits,
  Screenshots,
  CTA,
} from "@/components";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Personas />
        <Features />
        <HowItWorks />
        <Benefits />
        <Screenshots />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
