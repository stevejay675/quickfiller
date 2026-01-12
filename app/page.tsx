import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className=" min-h-screen   bg-zinc-50 font-sans">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
