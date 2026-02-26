"use client";
import React from "react";
import { motion } from "framer-motion";
import { Truck, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ParisBerlin = () => {
  return (
    <div className="bg-[#0a0a0a] text-gray-200 pb-20">
      <section className="relative py-20 px-6 bg-linear-to-b from-green-900/20 to-black border-b border-white/5">
        <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-xl max-w-sm mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl font-black italic uppercase leading-none mb-5">
              Paris / Berlin
            </h1>
            <span className="text-green-500 font-bold text-xl">
              L’Allemagne
            </span>
            <p className="my-6 text-lg max-w-md">
              Notre entreprise est spécialisée dans le déménagement groupé de 1
              à 40m3, et effectue principalement les liaisons dans les deux sens
              entre la France et l’Allemagne.
            </p>
          </motion.div>

          <Image
            src="/paris.jpg"
            alt="Paris Berlin"
            width={500}
            height={300}
            className="rounded-2xl border border-white/10 shadow-lg object-cover"
          />
        </div>
      </section>

      <section className="py-12 bg-cerdjio-primary/10">
        <div className="2xl:max-w-7xl lg:max-w-5xl max-w-sm mx-auto px-6">
          <p className="text-center text-sm font-bold uppercase tracking-widest mb-8">
            Villes desservies sur ces trajets :
          </p>
          <div className="flex flex-wrap justify-center gap-4 opacity-70 italic font-medium">
            {[
              "Marseille",
              "Paris",
              "Lyon",
              "Toulon",
              "Montpellier",
              "Bordeaux",
              "Toulouse",
              "Clermont-Ferrand",
              "Köln",
              "Düsseldorf",
              "Dortmund",
              "Hanovre",
              "Bremen",
              "Hambourg",
              "Berlin",
            ].map((city) => (
              <span
                key={city}
                className="border border-white/20 px-4 py-1 rounded-full text-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 2xl:max-w-7xl lg:max-w-5xl md:max-w-xl max-w-sm mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/10 rounded-2xl">
                <MapPin className="text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase italic">
                VOUS prenez en charge :
              </h3>
            </div>
            <ul className="space-y-6">
              {[
                "Débranchement du câblage des appareils le nécessitant.",
                "Dépose des objets et meubles fixés au mur, plafonds...",
                "Emballage et déballage des objets fragiles et non fragiles.",
                "Mise en charge du mobilier à démonter et remonter.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-400 text-sm">
                  <CheckCircle2 size={18} className="text-white shrink-0" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-500 p-10 rounded-[3rem] text-black">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black/10 rounded-2xl">
                <Truck className="text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase italic">
                NOUS prenons en charge :
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Protection de votre mobilier.",
                "Chargement, transport et déchargement du gros mobilier.",
                "Assurance pour une valeur globale jusqu'à 15 000€.",
                "Éventuellement descente de toutes vos affaires au RDC.",
                "Groupage possible sur tous les déménagements.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-bold text-sm">
                  <CheckCircle2 size={18} className="text-black shrink-0" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-black italic uppercase mb-8">
          Besoin d&apos;un devis rapide ?
        </h2>
        <Button
          variant={"green"}
          className="px-10 py-4  font-black uppercase italic transition-all"
        >
          <Link href="/contact">Obtenir mon Devis Gratuit</Link>
        </Button>
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

export default ParisBerlin;
