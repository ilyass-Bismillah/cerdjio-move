"use client";
import { motion } from "framer-motion";
import { Globe, Ship, ArrowRight, FileText, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InternationalPage() {
  const routes = [
    {
      from: "France",
      to: "Allemagne",
      time: "2-4 Jours",
      type: "Routier",
    },
    {
      from: "France",
      to: "Europe",
      time: "2-4 Jours",
      type: "Routier",
    },
    { from: "Europe", to: "Monde Entier", time: "Sur Devis", type: "Aérien" },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <section className="relative pt-32 pb-24 px-6 border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-blue-600/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-black uppercase tracking-[0.3em] mb-8"
          >
            <Globe2 size={16} className="animate-pulse" /> Global Logistics &
            Transit
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl lg:text-7xl font-black uppercase italic leading-[0.8] mb-10 tracking-tighter"
          >
            Inter<span className="text-green-500">national</span>
          </motion.h1>

          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Au-delà des frontières. Nous orchestrons votre mobilité mondiale
            avec une précision chirurgicale et une sécurité absolue.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={"green"}
              className="h-15 w-80 text-lg font-bold group"
              asChild
            >
              <Link href="/contact">
                PLANIFIER UN TRANSIT{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Fret Routier",
              icon: <Globe className="text-green-500" />,
              desc: "Liaisons directes à travers toute l'Union Européenne avec notre propre flotte.",
            },
            {
              title: "Transit Maritime",
              icon: <Ship className="text-green-500" />,
              desc: "Gestion de conteneurs complets ou groupage pour vos déménagements outre-mer.",
            },
            {
              title: "Douanes",
              icon: <FileText className="text-green-500" />,
              desc: "Dédouanement et formalités administratives simplifiés pour l'international.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-green-500/50 transition-all flex flex-col items-start"
            >
              <div className="mb-6 p-4 bg-gray-900 rounded-2xl border border-white/5 text-green-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase italic">
                Réseau & <br />{" "}
                <span className="text-green-500">Lignes Directes</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs font-bold uppercase tracking-widest">
              Suivi GPS en temps réel sur tous nos trajets internationaux.
            </p>
          </div>

          <div className="grid gap-4">
            {routes.map((route, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-black border border-white/5 hover:bg-gray-900/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-6 mb-4 md:mb-0">
                  <div className="text-2xl font-black text-white italic">
                    {route.from}
                  </div>
                  <ArrowRight className="text-green-500" />
                  <div className="text-2xl font-black text-green-500 italic">
                    {route.to}
                  </div>
                </div>
                <div className="flex gap-8 items-center justify-between">
                  <div className="text-right">
                    <div className="text-[10px] text-gray-600 uppercase font-black tracking-widest">
                      Délai Estimé
                    </div>
                    <div className="text-white font-bold">{route.time}</div>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-green-600/10 border border-green-500/20 text-green-500 text-[10px] font-black uppercase tracking-widest">
                    {route.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 italic">
            L&apos;expertise sans{" "}
            <span className="text-green-500">frontières</span>
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Contactez notre département international pour une étude
            personnalisée de votre projet.
          </p>
          <Button
            variant={"outline"}
            className="transition-all text-black h-15 px-10 lg:text-xl font-black italic uppercase"
          >
            <Link href="/contact">Lancer mon projet global</Link>
          </Button>
        </motion.div>
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
