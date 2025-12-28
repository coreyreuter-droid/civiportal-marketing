import {
  Header,
  Footer,
  Hero,
  Features,
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
        <Features />
        <Benefits />
        <Screenshots />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
