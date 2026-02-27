import { Home, Building2, Warehouse } from "lucide-react";

interface ServicesProps {
  title?: string;
}

const services = [
  {
    title: "Déménagement Particulier",
    desc: "Nous transportons vos meubles et objets personnels en toute sécurité.",
    icon: <Home size={32} className="text-green-500" />,
  },
  {
    title: "Transfert de Bureaux",
    desc: "Service rapide et organisé pour les entreprises et administrations.",
    icon: <Building2 size={32} className="text-green-500" />,
  },
  {
    title: "Garde Meuble",
    desc: "Stockage sécurisé pour vos biens sur de courtes ou longues durées.",
    icon: <Warehouse size={32} className="text-green-500" />,
  },
];

const Services = ({ title }: ServicesProps) => {
  return (
    <section className="py-24 px-6 bg-[#12141d]" id="services">
      <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-xl max-w-sm mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center underline decoration-green-600 decoration-4 underline-offset-8">
          {title || "Nos Services"}
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#1a1c23] p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
