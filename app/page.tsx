import Hero from "./(landingPage)/_components/Hero";
import Services from "./(landingPage)/_components/Services";
import Testimonials from "./(landingPage)/_components/Testimonials";
import WhyChooseUs from "./(landingPage)/_components/WhyChooseUs";

export default function Home() {

  return (
    <main className="bg-[#12141d]">
      <Hero />
      <Services  />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}