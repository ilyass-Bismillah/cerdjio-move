import Hero from "./(landingPage)/_components/Hero";
import Services from "./(landingPage)/_components/Services";
import Testimonials from "./(landingPage)/_components/Testimonials";
import WhyChooseUs from "./(landingPage)/_components/WhyChooseUs";

const GET_HOME_CONTENT = `
  query GetHomeContent {
    page(id: "/", idType: URI) {
      homePageContent { 
        heroTitle
        heroDesc
        servicesTitle
        testimonialsTitle
        testimonialsDesc
        whyTitle
        whyImageQuote
      }
    }
  }
`;

async function getHomeData() {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  if (!apiUrl) return null;

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_HOME_CONTENT }),
      next: { revalidate: 60 }
    });
    
    const json = await res.json();
    return json.data?.page?.homePageContent;
  } catch (error) {
    console.error("Error fetching WordPress data:", error);
    return null;
  }
}

export default async function Home() {
  const homeData = await getHomeData();

  return (
    <main className="bg-[#12141d]">
      <Hero 
        initialTitle={homeData?.heroTitle} 
        initialDesc={homeData?.heroDesc} 
      />
      
      <Services title={homeData?.servicesTitle} />
      
      <WhyChooseUs />
      <Testimonials title={homeData?.testimonialsTitle} description={homeData?.testimonialsDesc} />
    </main>
  );
}