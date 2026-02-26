import { ShieldCheck, Truck, Clock, Headphones } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    title: "Sécurité Garantie",
    desc: "Vos objets sont emballés avec soin et protégés durant tout le trajet.",
    icon: <ShieldCheck className="text-green-500" size={28} />,
  },
  {
    title: "Ponctualité",
    desc: "Nous respectons scrupuleusement les délais convenus avec vous.",
    icon: <Clock className="text-green-500" size={28} />,
  },
  {
    title: "Équipe Pro",
    desc: "Des déménageurs expérimentés et courtois à votre service.",
    icon: <Truck className="text-green-500" size={28} />,
  },
  {
    title: "Support 24/7",
    desc: "Une équipe disponible pour répondre à toutes vos questions.",
    icon: <Headphones className="text-green-500" size={28} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 bg-[#0f1117]">
      <div className="2xl:max-w-7xl lg:max-w-5xl max-w-sm mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Pourquoi faire confiance à <br />
            <span className="text-green-500">Cerdjio Déménagement ?</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 pt-4">
            {reasons.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="bg-gray-800/50 w-fit p-3 rounded-xl border border-gray-700">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-600/20 rounded-full blur-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl shadow-orange-600/5">
            <Image
              src="/image2.png"
              alt="Professional Movers"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-green-600 p-6 rounded-2xl">
              <p className="text-white font-bold text-lg italic">
                &quot;On prend soin de vos meubles comme s&apos;ils étaient les
                nôtres.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
