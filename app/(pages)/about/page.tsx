import { ShieldCheck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-[#0f1117] min-h-screen pt-32 pb-20 px-6">
      <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-xl max-w-sm mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-green-500 font-bold tracking-widest uppercase mb-4">
            Notre Histoire
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            L&apos;EXPERT DU DÉMÉNAGEMENT <br />{" "}
            <span className="text-green-500">EN EUROPE</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Depuis plus de 10 ans, Cerdjio Move accompagne les familles et les
            entreprises dans leurs projets de mobilité à travers toute
            l&apos;Union Européenne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Basée en
              <span className="text-white font-bold italic">France</span>, notre
              entreprise s&apos;est spécialisée dans les liaisons nationales et
              internationales. Que vous déménagiez de Paris à Madrid, ou de Lyon
              à Bruxelles, nous maîtrisons chaque kilomètre du trajet.
            </p>
            <p>
              Notre force réside dans notre logistique intégrée. Nous ne sommes
              pas de simples transporteurs, nous sommes des partenaires qui
              veillent sur vos biens avec des équipements de protection de
              dernière génération.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-green-500 text-4xl font-black">100%</h4>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Zone Europe
                </p>
              </div>
              <div>
                <h4 className="text-green-500 text-4xl font-black">24/7</h4>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Suivi Transport
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-green-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gray-900 border border-gray-800 p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Pourquoi nous faire confiance ?
              </h3>
              <ul className="space-y-4">
                {[
                  "Assurance Dommage incluse",
                  "Personnel qualifié et formé",
                  "Flotte de véhicules récents",
                  "Respect strict des délais",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <ShieldCheck className="text-green-500" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
