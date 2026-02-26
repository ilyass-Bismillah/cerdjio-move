"use client";
import { motion } from "framer-motion";
import { Truck, Sun, ShieldCheck, ArrowRight, MapPin, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EspagnePage() {
  const destinations = [
    { city: "Madrid", info: "Liaison directe depuis Paris / Lyon" },
    { city: "Barcelone", info: "Service Express Catalogne" },
    { city: "Valence", info: "Zone Levant & Logistique Côte" },
    { city: "Séville & Malaga", info: "Déménagement Sud Espagne" },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 right-0 w-150 h-150 bg-green-500/10 blur-[130px] rounded-full -z-10" />

        <div className="2xl:max-w-7xl lg:max-w-5xl max-w-sm mx-auto grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-black uppercase tracking-widest mb-6">
              <Map size={14} /> Service Transfrontalier Espagne
            </div>
            <h1 className="text-4xl lg:text-8xl font-black uppercase italic mb-8 tracking-tighter">
              Déménagement <br />
              <span className="text-green-500">Espagne</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10 font-light">
              Cerdjio Move assure vos transferts vers toute la péninsule
              ibérique. Une expertise logistique sans frontières pour vos biens
              les plus précieux.
            </p>
            <Button
              variant={"green"}
              className="text-base font-bold group h-12 lg:w-90 w-80"
              asChild
            >
              <Link href="/contact">
                ESTIMER MON DÉMÉNAGEMENT{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-green-500 to-transparent opacity-50" />
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">
                Destinations Clés
              </h3>
              <div className="space-y-6">
                {destinations.map((d, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 hover:border-green-500/40 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 font-bold group-hover:bg-green-500 group-hover:text-black transition-colors">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold uppercase tracking-tight text-white">
                          {d.city}
                        </h4>
                        <p className="text-[10px] text-gray-500 uppercase">
                          {d.info}
                        </p>
                      </div>
                    </div>
                    <MapPin
                      size={18}
                      className="text-gray-700 group-hover:text-green-500 transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-linear-to-br from-white/5 to-transparent border border-white/10 group hover:border-green-500/30 transition-all">
            <Sun
              className="text-green-500 mb-6 group-hover:scale-110 transition-transform"
              size={40}
            />
            <h3 className="text-2xl font-black uppercase italic mb-4">
              Service Sud
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Une couverture totale de la Costa del Sol jusqu&apos;à la
              frontière française.
            </p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-linear-to-br from-white/5 to-transparent border border-white/10 group hover:border-green-500/30 transition-all">
            <Truck
              className="text-green-500 mb-6 group-hover:scale-110 transition-transform"
              size={40}
            />
            <h3 className="text-2xl font-black uppercase italic mb-4">
              Flotte Moderne
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Camions équipés pour les longs trajets climatisés pour protéger
              vos meubles.
            </p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-linear-to-br from-white/5 to-transparent border border-white/10 group hover:border-green-500/30 transition-all">
            <ShieldCheck
              className="text-green-500 mb-6 group-hover:scale-110 transition-transform"
              size={40}
            />
            <h3 className="text-2xl font-black uppercase italic mb-4">
              Assurance Europe
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Protection intégrale de vos biens sur tout le territoire espagnol.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto bg-green-600 rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase italic leading-none mb-4">
              Hablas <br />
              Español?
            </h2>
            <p className="text-black/70 font-bold uppercase tracking-widest text-sm">
              On s&apos;occupe de tout, même de la langue.
            </p>
          </div>
          <Button
            variant={"default"}
            className="h-15 px-12 font-black text-lg relative z-10"
          >
            <Link href="/contact">CONTACTER UN EXPERT</Link>
          </Button>
          <Truck
            size={200}
            className="absolute -right-10 -bottom-10 text-black/10 -rotate-12"
          />
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
}
