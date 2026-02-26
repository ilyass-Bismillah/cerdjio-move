"use client";
import React from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const ServiceDetail = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <section className="relative py-20 px-6 border-b border-white/5 bg-linear-to-b from-green-600/10 to-transparent">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 bg-green-600/20 p-3 rounded-2xl text-green-500 border border-green-500/20"
          >
            <Truck size={32} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase mb-6 italic"
          >
            Déménagement <span className="text-green-500">Particuliers</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Service professionnel de déménagement résidentiel. Nous transportons
            vos biens en toute sécurité vers toutes les villes françaises avec
            une équipe dédiée.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Sécurité Totale",
            desc: "Assurance incluse pour tous vos objets de valeur.",
            icon: <ShieldCheck className="text-green-500" />,
          },
          {
            title: "Ponctualité",
            desc: "Respect strict des dates et heures convenues.",
            icon: <Clock className="text-green-500" />,
          },
          {
            title: "Toute la France",
            desc: "Couverture nationale de Paris jusqu'à Marseille.",
            icon: <MapPin className="text-green-500" />,
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-green-500/30 transition-colors"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400 leading-snug">{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-gray-900/50 border border-white/5 rounded-[2.5rem] p-10 md:p-16">
          <h2 className="text-3xl font-bold mb-8">
            Ce qui est inclus dans notre service :
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Protection des meubles sous couvertures",
              "Emballage de la vaisselle et objets fragiles",
              "Démontage et remontage du mobilier",
              "Mise à disposition de cartons",
              "Chargement et transport sécurisé",
              "Déchargement dans les pièces de votre choix",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-2xl font-bold italic">
                Prêt à changer de domicile ?
              </p>
              <p className="text-gray-500">
                Obtenez une réponse en moins de 24h.
              </p>
            </div>
            <Button
              variant={"green"}
              size="lg"
              className="h-16 px-10 text-lg font-bold uppercase tracking-tight"
              asChild
            >
              <Link href="/contact">Calculer mon Devis</Link>
            </Button>
          </div>
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

export default ServiceDetail;
