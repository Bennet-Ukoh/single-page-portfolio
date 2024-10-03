import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Tools from "@/components/tools";

export default function Page() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-bg-primary">
      <main className="w-full max-w-[1440px] mx-auto lg:px-[165px] md:px-[30px] px-4 justify-center items-center">
        <Header />
        <Intro />
        <Tools />
        <Projects />
      </main>
      {/* Place Footer outside of the constrained main */}
      <Contact />
      <Footer />
    </div>
  );
}
