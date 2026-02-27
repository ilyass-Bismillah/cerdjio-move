import Hero from "./(landingPage)/_components/Hero";
import Services from "./(landingPage)/_components/Services";
import Testimonials from "./(landingPage)/_components/Testimonials";
import WhyChooseUs from "./(landingPage)/_components/WhyChooseUs";

async function getWordPressData() {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  if (!apiUrl) return null;

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: '{ generalSettings { title } }' }),
      cache: "no-store",
    });
    
    if (!res.ok) return null;
    
    const { data } = await res.json();
    return data;
  } catch {
    return null;
  }
}

export default async function Home() {
  await getWordPressData();
  return (
    <main className="bg-[#12141d]">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}