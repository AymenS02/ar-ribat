import Header from "@/components/header/Header";
import AboutUs from "@/pages/LandingPage/AboutUs";
import Hero from "@/pages/LandingPage/Hero";
import KnowledgeResources from "@/pages/LandingPage/KnowledgeResources";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <KnowledgeResources />
    </>
  );
}
