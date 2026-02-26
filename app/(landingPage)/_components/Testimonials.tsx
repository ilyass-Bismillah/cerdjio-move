import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marc Dubois",
    city: "Paris, France",
    comment:
      "Excellent service pour mon déménagement Casablanca-Paris. L'équipe a géré toutes les formalités douanières. Très pro !",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=marc",
  },
  {
    name: "Elena Rodriguez",
    city: "Madrid, Espagne",
    comment:
      "Muy satisfecha. Mis muebles llegaron intactos a Madrid. El embalaje especial para objetos frágiles es increíble.",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=elena",
  },
  {
    name: "Thomas Müller",
    city: "Berlin, Allemagne",
    comment:
      "Reliable and punctual service. Moving from Tangier to Berlin was much easier than I expected. Great communication!",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=thomas",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0f1117]">
      <div className="absolute inset-0 bg-[#0f1117]"></div>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#4a5568 1px, transparent 1px), 
                           linear-gradient(90deg, #4a5568 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>
      <div className="relative 2xl:max-w-7xl lg:max-w-5xl max-w-sm mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ce que disent{" "}
            <span className="text-green-500 font-black">nos clients</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            La satisfaction de nos clients est notre priorité absolue. Voici
            leurs retours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-[#1a1c23]/80 backdrop-blur-sm p-8 rounded-[2rem] border border-white/5 hover:border-green-500/30 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 leading-relaxed">
                &quot;{rev.comment}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold text-white text-xl uppercase">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{rev.name}</h4>
                  <p className="text-green-500 text-sm">{rev.city}</p>
                </div>
                <Quote
                  className="ml-auto text-gray-700 group-hover:text-green-900 transition-colors"
                  size={32}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
