"use client";
import { Globe, Navigation, Truck} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EuropePage() {
  const cities = ["Bruxelles", "Liège", "Anvers", "Gand", "Bruges"];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white py-20">
      <div className="2xl:max-w-7xl lg:max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-orange-500 rounded-full shadow-orange-500/30">
              <Globe size={40} className="text-black animate-spin-slow" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black uppercase italic mb-6 tracking-tighter">
            Liaison <span className="text-orange-500">Europe</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            Votre passerelle logistique entre la France, le Benelux et l&apos;Europe
            du Sud.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {cities.map((city, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-orange-500 transition-all cursor-default"
            >
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold group-hover:text-black">
                  {city}
                </span>
                <Navigation
                  size={16}
                  className="text-orange-500 group-hover:text-black"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-[3rem] bg-orange-600 p-12 md:p-20 text-black flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-4">
              Lignes <br /> Quotidiennes
            </h2>
            <p className="font-bold opacity-80">
              Départs garantis chaque semaine.
            </p>
          </div>
          <Truck
            size={150}
            className="opacity-20 absolute right-10 hidden md:block"
          />
          <Button
            variant={"default"}
            size="lg"
            className="px-12 h-16 text-xl font-bold hover:scale-105 transition-transform"
          >
            <Link href="/contact">PLANIFIER UN TRAJET</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
