import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <div className="wrapper">
        <CallToAction />
      </div>
    </main>
  );
}
