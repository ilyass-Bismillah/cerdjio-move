import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact & Devis Gratuit | Cerdjio Move Déménagement",
  description:
    "Demandez votre estimation gratuite en ligne pour votre déménagement international. Notre équipe vous répond sous 24h.",
};

const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl lg:text-6xl font-bold text-center mb-8 text-gray-300 mt-20 max-w-5xl mx-auto">
        Obtenez une estimation <span className="text-green-500">GRATUITE</span>{" "}
        de votre déménagement.
      </h2>
      <div className="flex flex-col max-w-5xl mx-auto gap-5 rounded-3xl bg-gray-900/40 backdrop-blur-xl p-6 md:p-10 border border-gray-800 shadow-2xl">
        <div className="bg-green-500/20 opacity-90 p-5 text-gray-300 text-sm border border-green-500/50 rounded-xl space-y-5">
          <h3 className="text-xl text-white">VOUS prenez en charge :</h3>
          <p>
            ¤ Débranchement du câblage des appareils le nécessitant (machine à
            laver, hi-fi, informatique…)
          </p>
          <p>
            ¤ Dépose des objets et meubles fixés au murs, planchers, plafonds…
          </p>
          <p>¤ Emballage et déballage des objets fragiles et non fragiles</p>
          <p>¤ Prise en charge du mobilier à démonter et remonter</p>
          <p>¤ Éventuellement descente de toutes vos affaires au RDC</p>
        </div>
        <div className="bg-green-500/20 opacity-90 p-5 text-gray-300 text-sm border border-green-500/50 rounded-xl space-y-5">
          <h3 className="text-xl text-white">NOUS prenons en charge :</h3>
          <p>¤ Protection de votre mobilier</p>
          <p>¤ Chargement, transport et déchargement du gros mobilier</p>
          <p>
            ¤ Assurance pour une valeur globale jusque 15000 € ou plus si
            besoin.
          </p>
          <p>
            ¤ Éventuellement descente de toutes vos affaires au Rez de chaussée
          </p>
          <p>¤ Groupage possible sur tous les déménagements</p>
        </div>
      </div>
      <ContactForm />
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1294.090817759654!2d2.6998424!3d49.5565959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7c4ca687dae61%3A0x3773039c633e3520!2sEURL%20CERDJIO%20DEMENAGEMENT!5e0!3m2!1sfr!2sma!4v1772039900856!5m2!1sfr!2sma"
          width="100%"
          height="500"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
