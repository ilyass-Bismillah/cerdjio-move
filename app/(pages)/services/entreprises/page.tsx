"use client";
import { motion } from 'framer-motion';
import { Building2, Monitor, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function EntreprisesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-10">
      <section className="2xl:max-w-7xl lg:max-w-5xl max-w-sm mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1fr_0.7fr] gap-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
             <h1 className="text-5xl lg:text-9xl font-black uppercase mb-8 italic tracking-tighter">
               Transfert <br/><span className="text-orange-500">Bureaux</span>
             </h1>
             <p className="text-2xl text-gray-400 mb-12 max-w-2xl font-light">
               Solutions logistiques performantes pour entreprises. Nous assurons la continuité de votre business pendant le transfert.
             </p>
             <div className="grid sm:grid-cols-2 gap-8 mb-12">
               <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
                 <Monitor className="text-orange-500 shrink-0" />
                 <div>
                   <h4 className="font-bold uppercase mb-1">Parc IT</h4>
                   <p className="text-xs text-gray-500 leading-snug">Gestion sécurisée de vos serveurs et postes de travail.</p>
                 </div>
               </div>
               <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
                 <Clock className="text-orange-500 shrink-0" />
                 <div>
                   <h4 className="font-bold uppercase mb-1">Rapidité</h4>
                   <p className="text-xs text-gray-500 leading-snug">Intervention week-end et nuit pour zéro arrêt d&apos;activité.</p>
                 </div>
               </div>
             </div>
             <Button variant={"orange"} className="h-16 px-12 transition-all font-black text-lg uppercase tracking-tight" asChild>
                <Link href="/contact">DEMANDER UN AUDIT PRO</Link>
             </Button>
          </motion.div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-orange-600/20 blur-[100px] rounded-full" />
            <div className="relative h-full bg-white/5 border border-white/10 rounded-[4rem] p-10 flex flex-col justify-center gap-6">
               <Building2 size={200} className="text-white/5 absolute top-5 left-1/2 -translate-x-1/2" />
               <div className="text-6xl font-black text-orange-500">99%</div>
               <div className="text-sm uppercase tracking-widest text-gray-400 font-bold">Taux de satisfaction de nos clients B2B</div>
               <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} animate={{ width: "99%" }} transition={{ duration: 2 }} className="h-full bg-orange-500" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}