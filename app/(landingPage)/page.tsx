import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";
import WhyChooseUs from "./_components/WhyChooseUs";

export const metadata = {
  title: 'Cerdjio Move | Déménagement International France & Europe',
  description: 'Expert en déménagement international, transport de colis et logistique entre la France, l\'Allemagne et toute l\'Europe. Devis gratuit en 24h.',
};


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
