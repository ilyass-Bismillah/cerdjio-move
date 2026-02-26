"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Euro, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const prices = [
  { size: "1 m²", volume: "3 m³", price: "29" },
  { size: "2 m²", volume: "4/6 m³", price: "43" },
  { size: "3 m²", volume: "6/8 m³", price: "56" },
  { size: "4 m²", volume: "8/10 m³", price: "69" },
  { size: "5 m²", volume: "10/12 m³", price: "79" },
  { size: "8 m²", volume: "16/20 m³", price: "119" },
  { size: "10 m²", volume: "20/25 m³", price: "129" },
];

const GardeMeubles = () => {
  return (
    <div className="bg-gray-900 min-h-screen pb-20">
      <section className="relative h-[50vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/storage.png"
            alt="Garde Meubles Cerdjio"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-white italic uppercase"
          >
            Garde-Meubles & <br />{" "}
            <span className="text-green-500">Archivage</span>
          </motion.h1>
          <p className="text-gray-300 mt-4 max-w-xl font-medium">
            Des solutions de stockage sécurisées, flexibles et adaptées à chaque
            besoin.
          </p>
          <p className="text-gray-300 mt-4 max-w-xl font-medium">
            <span className="text-green-500 font-bold">
              CERDJIO DÉMÉNAGEMENT{" "}
            </span>{" "}
            apporte des solutions adaptées à chaque besoin, afin que chaque
            demande trouve sa réponse !
          </p>
        </div>
      </section>

      <section className="py-12 px-6 2xl:max-w-7xl lg:max-w-5xl mx-auto -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-500 p-8 rounded-3xl shadow-xl text-white">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              1ère Promotion
            </span>
            <h3 className="text-3xl font-black mt-4 italic uppercase">
              1€ le premier mois
            </h3>
            <p className="mt-2 text-white/90 font-medium">
              Si vous restez au minimum le mois civil d&apos;arrivée + 3 mois.
            </p>
            <p className="mt-2 text-white/90 font-medium">
              Votre déménagement vers nos box à un prix préférentiel.
            </p>
          </div>
          <div className="bg-black p-8 rounded-3xl shadow-xl text-white">
            <span className="bg-green-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-green-500">
              2ème Promotion
            </span>
            <h3 className="text-3xl font-black mt-4 italic uppercase">
              Déménagement Gratuit*
            </h3>
            <p className="mt-2 text-gray-400 font-medium">
              Déménagement gratuit* vers nos box si vous restez 12 mois ou plus.
            </p>
            <p className="mt-2 text-gray-400 font-medium">
              Hors frais de route /autoroute et assurance et avec chargement en
              rez de chaussée dans une limite de 120 km
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 2xl:max-w-7xl lg:max-w-5xl max-w-sm mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black text-gray-200 uppercase italic mb-8 border-l-8 border-green-500 pl-4">
              Stockage pas cher
            </h2>
            <div className="space-y-6">
              {[
                "Pas de frais d'entrée !",
                "Pas de frais de sortie !",
                "Pas de frais de serrure !",
                "Pas de frais d'accès !",
                "Vous arrivez/partez quand vous voulez",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="font-bold text-gray-200 uppercase italic text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <Clock className="text-green-500 mb-4" />
              <h4 className="font-bold text-gray-800">Horaires d&apos;accès</h4>
              <p className="text-sm text-gray-600">
                6 jours sur 7, du lundi au samedi de 9h00 à 18h00.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-900/40 rounded-[3rem] shadow-2xl border border-gray-700/40 overflow-hidden">
              <div className="bg-gray-800 p-8 text-white flex justify-between items-center">
                <h3 className="text-xl font-bold uppercase italic">
                  Nos Tarifs Mensuels
                </h3>
                <Euro className="text-green-500" />
              </div>
              <div className="p-8">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-white text-xs uppercase tracking-widest border-b border-gray-500">
                      <th className="pb-4">Surface / Volume</th>
                      <th className="pb-4 text-right">Prix TTC / Mois</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-500">
                    {prices.map((item, i) => (
                      <tr
                        key={i}
                        className="group hover:bg-gray-500/5 transition-colors"
                      >
                        <td className="py-5 font-bold text-gray-200">
                          Box de {item.size}{" "}
                          <span className="text-gray-200 font-medium ml-2 text-sm italic">
                            ({item.volume})
                          </span>
                        </td>
                        <td className="py-5 text-right font-black text-2xl text-gray-200">
                          {item.price} €
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-800/10 py-16 mx-6 rounded-xl text-center text-white">
        <h2 className="text-3xl font-black uppercase italic mb-6">
          Besoin d&apos;un box immédiatement ?
        </h2>
        <Button variant="green" className="text-whitefont-bold px-10">
          <Link href="/contact">DEVIS GRATUIT EN LIGNE</Link>
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

export default GardeMeubles;
