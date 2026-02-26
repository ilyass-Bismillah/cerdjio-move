"use client";
import React from "react";
import { motion } from "framer-motion";
import { Truck, Globe, Leaf, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  { country: "Allemagne", frequency: "2 à 3 fois par mois" },
  { country: "Angleterre", frequency: "1 à 2 fois par mois" },
  { country: "Belgique", frequency: "2 à 3 fois par mois" },
  { country: "Hollande", frequency: "2 à 3 fois par mois" },
  { country: "Luxembourg", frequency: "2 à 3 fois par mois" },
  { country: "Espagne", frequency: "Régulièrement" },
];

const GroupagePage = () => {
  return (
    <div className="bg-[#0a0a0a] text-gray-200 relative">
      <div className="2xl:max-w-7xl lg:max-w-5xl max-w-sm mx-auto">
        <section className="h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 gap-10">
          <div className="mt-20 lg:mt-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-cerdjio-accent font-bold tracking-widest uppercase mb-4 block"
            >
              Solution Économique
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white italic uppercase leading-none"
            >
              Le Groupage <br />{" "}
              <span className="text-cerdjio-primary">Intelligent</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mt-6 max-w-3xl leading-relaxed"
            >
              Avec le groupage nous proposons à nos clients de grouper leur
              déménagement sur un trajet commun afin de diviser leurs frais !
              Ainsi, vous ne payez pas plein pot, mais seulement le volume que
              vous utilisez réellement !
            </motion.p>
            <span className="block text-cerdjio-primary font-bold mt-4">
              Vous bénéficierez d’un tarif avantageux.
            </span>
            <p className="text-gray-500 mt-4 max-w-3xl leading-relaxed">
              Vous souhaitez déménager quelques meubles, un appartement ou une
              maison entière, pour un volume allant de 1 à 40 m³, sur l’un de
              nos trajets réguliers ? Le formules « groupage » est faites pour
              vous !{" "}
            </p>
          </div>
          <div className="">
            <Image
              src="/truck-groupage.png"
              alt="Groupage Cerdjio"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg shadow-lg shadow-green-500/20"
            />
          </div>
        </section>

        <section className="relative py-20 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-green-500 uppercase italic mb-6">
                Pourquoi choisir le groupage ?
              </h2>
              <p className="text-gray-200 leading-relaxed mb-6">
                Une option très économique, efficace et écologique. Avec le
                groupage, nous proposons à nos clients de grouper leur
                déménagement sur un trajet commun afin de diviser leurs frais !
                Ainsi, vous ne payez pas plein pot, mais seulement le volume que
                vous utilisez réellement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border-l-4 border-green-500">
                  <Leaf className="text-green-500 shrink-0" />
                  <p className="text-sm font-medium text-gray-800">
                    Réduisez votre empreinte carbone en optimisant l&apos;espace
                    du camion.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border-l-4 border-green-500">
                  <Truck className="text-green-500 shrink-0" />
                  <p className="text-sm font-medium text-gray-800">
                    Idéal pour les volumes de 1 à 40 m³.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-500/5 rounded-[3rem] p-8 border border-green-500/10">
              <h3 className="text-xl font-bold mb-6 text-green-500 uppercase tracking-tighter">
                Nos circuits fréquents :
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Paris - Marseille - Paris",
                  "Paris - Lyon - Paris",
                  "Paris - Lille - Paris",
                  "Paris - Nice - Paris",
                  "Paris - Toulouse - Paris",
                  "Paris – Bordeaux – Paris",
                ].map((route, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-200 font-medium"
                  >
                    <ChevronRight size={16} className="text-green-500" />
                    {route}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-500/5 text-white rounded-3xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-black italic uppercase">
                  Destinations Limitrophes
                </h2>
                <p className="text-gray-400 mt-2">
                  Nous desservons l&apos;Europe avec des navettes régulières.
                </p>
              </div>
              <Globe size={60} className="opacity-20 text-cerdjio-primary" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {destinations.map((dest, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cerdjio-primary transition-all"
                >
                  <h4 className="text-xl font-bold mb-1">{dest.country}</h4>
                  <p className="text-cerdjio-primary text-sm font-semibold">
                    {dest.frequency}
                  </p>
                  <div className="h-1 w-0 group-hover:w-full bg-cerdjio-primary mt-4 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-black text-cerdjio-dark uppercase italic mb-8">
              Prêt à économiser sur votre trajet ?
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                variant={"green"}
                className=" h-16 px-10 rounded-2xl font-bold text-lg"
              >
                <Link href="/contact">DEMANDER UN DEVIS GRATUIT</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
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
      <Image
        src="/1.png"
        alt=""
        width={100}
        height={100}
        className="absolute top-1/5 left-10"
      />
      <Image
        src="/2.png"
        alt=""
        width={100}
        height={100}
        className="absolute top-0 right-0"
      />
    </div>
  );
};

export default GroupagePage;
