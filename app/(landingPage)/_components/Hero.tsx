import QuoteForm from "@/components/QuoteForm";

interface HeroProps {
  initialTitle?: string;
  initialDesc?: string;
}

const Hero = ({ initialTitle, initialDesc }: HeroProps) => {
  return (
    <section
      style={{ backgroundImage: "url('/bgHero.png')" }}
      className="relative bg-no-repeat bg-cover bg-center lg:h-screen h-full"
    >
      <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-xl max-w-xs mx-auto flex flex-col lg:flex-row items-center lg:justify-between h-full py-20 lg:py-0 space-y-20 lg:space-y-0">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            {initialTitle ? (
               <div dangerouslySetInnerHTML={{ __html: initialTitle }} />
            ) : (
              <>
                Logistique <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-green-600">
                  D&apos;Excellence
                </span>
              </>
            )}
          </h1>
          <p className="text-lg text-gray-200 bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 max-w-lg leading-relaxed">
           {initialDesc || "Un déménagement professionnel sans tracas. Nous assurons le transport de vos biens partout en France et en Europe avec une sécurité maximale."}
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
