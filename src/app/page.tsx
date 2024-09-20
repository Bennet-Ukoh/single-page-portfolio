import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <main className="flex  flex-col relative bg-[#151515] max-w-[1100px] mx-auto h-screen text-[#FFFFFF]">
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
