"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Home,
  Building2,
  Globe,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const allServices = [
  {
    title: "Déménagement Particuliers",
    slug: "particuliers",
    desc: "Un service clé en main pour votre maison ou appartement. On s'occupe de l'emballage, du démontage et du transport.",
    icon: <Home size={40} className="text-green-500" />,
    color: "from-green-500/20",
  },
  {
    title: "Transfert d'Entreprise",
    slug: "entreprises",
    desc: "Optimisez votre déménagement professionnel. Bureaux, parcs informatiques et archives en toute sécurité.",
    icon: <Building2 size={40} className="text-green-500" />,
    color: "from-green-500/20",
  },
  {
    title: "Liaison Internationale",
    slug: "international",
    desc: "Expert du trajet France-Maroc et Europe. Gestion des formalités douanières et transport longue distance.",
    icon: <Globe size={40} className="text-green-500" />,
    color: "from-green-500/20",
  },
];

const ServicesOverview = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <section className="py-24 px-4 text-center bg-linear-to-b from-green-600/10 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">
            Nos <span className="text-green-500">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            De la petite livraison au déménagement international complet,
            Cerdjio Move vous accompagne avec rigueur et professionnalisme.
          </p>
        </motion.div>
      </section>

      <section className="2xl:max-w-7xl lg:max-w-5xl md:max-w-xl max-w-sm mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl border border-white/10 bg-linear-to-b ${service.color} to-transparent hover:border-green-500/50 transition-all`}
            >
              <div className="mb-6 bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <Button
                asChild
                variant="link"
                className="group/btn text-green-500 hover:text-green-400 p-0"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-2 font-bold"
                >
                  En savoir plus{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-2 transition-transform"
                  />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/5 py-12 my-10">
        <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-xl max-w-sm mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              label: "Assurance Ad Valorem",
              icon: <ShieldCheck className="text-green-500" />,
            },
            {
              label: "Equipe Qualifiée",
              icon: <Star className="text-green-500" />,
            },
            {
              label: "Flotte Moderne",
              icon: <Truck className="text-green-500" />,
            },
            {
              label: "Suivi en Temps Réel",
              icon: <Globe className="text-green-500" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 text-center"
            >
              {item.icon}
              <span className="text-sm font-semibold uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-green-600 rounded-[3rem] p-12 text-center text-black relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
              Prêt à déménager ?
            </h2>
            <p className="text-black/80 text-xl mb-10 max-w-xl mx-auto font-medium">
              Demandez votre devis gratuit aujourd&apos;hui et recevez une
              réponse sous 24h.
            </p>
            <Button
              variant={"default"}
              size="lg"
              className="px-10 h-16 text-lg font-bold"
              asChild
            >
              <Link href="/contact">Commencer mon devis</Link>
            </Button>
          </div>
          <Truck className="absolute -bottom-10 -right-10 text-black/10 w-64 h-64 -rotate-12" />
        </div>
      </section>

      <div className="text-center text-gray-400 py-12 space-y-4">
        <p>
          Pour obtenir un devis rapidement ou tout autre renseignement,
          contactez-nous par téléphone :
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link
            href="tel:+33612345678"
            className="text-green-500 font-bold text-lg"
          >
            06 13 05 75 72
          </Link>
          <span>-</span>
          <Link
            href="tel:+33612345678"
            className="text-green-500 font-bold text-lg"
          >
            03 44 93 01 17
          </Link>
        </div>
        <p>Nous sommes à votre disposition.</p>
      </div>
    </div>
  );
};

export default ServicesOverview;
