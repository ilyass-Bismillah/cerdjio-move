import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";
import WhyChooseUs from "./_components/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-[#12141d]">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
