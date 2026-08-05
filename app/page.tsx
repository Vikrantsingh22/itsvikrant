import ActiveSectionProvider from "@/components/ActiveSectionProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Recognition from "@/components/Recognition";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ActiveSectionProvider>
      <Nav />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <Hero />
        <ImpactStrip />
        <SelectedWork />
        <Experience />
        <Profile />
        <Skills />
        <Recognition />
      </main>
      <Footer />
    </ActiveSectionProvider>
  );
}
