import QuoteForm from "@/components/QuoteForm";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "url('/bgHero.png')" }}
      className="relative bg-no-repeat bg-cover bg-center lg:h-screen h-full"
    >
      <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-sm max-w-xs mx-auto flex flex-col lg:flex-row items-center lg:justify-between h-full py-20 lg:py-0 space-y-20 lg:space-y-0">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            Logistique <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              D&apos;Excellence
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
            Un déménagement professionnel sans tracas. Nous assurons le
            transport de vos biens partout en France et en Europe avec une sécurité maximale.
          </p>
        </div>

        <div className="w-full max-w-sm">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
