"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { MapPin, ArrowRight, Truck, Phone, CheckCircle2, LockKeyhole } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    depart: '', arrivee: '', phone: '', volume: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-12 rounded-3xl border border-orange-500/30 bg-gray-900/60 backdrop-blur-xl text-center space-y-4"
      >
        <div className="flex justify-center">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 200 }}
          >
            <CheckCircle2 size={60} className="text-orange-500" />
          </motion.div>
        </div>
        <h3 className="text-2xl font-bold text-white">Demande Reçue !</h3>
        <p className="text-gray-400">On va vous contacter sur <span className="text-orange-500">{formData.phone}</span> d&apos;ici 2 heures.</p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4 px-8 py-4 font-bold">
          Refaire une demande
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-8 rounded-3xl border border-white/10 shadow-2xl bg-gray-900/40 backdrop-blur-xl relative overflow-hidden group"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/10 blur-[80px] group-hover:bg-orange-500/20 transition-all duration-700" />

      <h3 className="text-2xl font-bold mb-6 text-white text-center">
        Devis Express <span className="text-orange-500 text-sm block font-normal mt-1">Gratuit & Sans engagement</span>
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        
        <motion.div whileHover={{ x: 5 }} className="space-y-2">
          <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Départ</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" size={18} />
            <Input
              required
              className="bg-white/5 border-white/10 pl-10 text-gray-200 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all py-6"
              onChange={(e) => setFormData({...formData, depart: e.target.value})}
            />
          </div>
        </motion.div>

        <motion.div whileHover={{ x: 5 }} className="space-y-2">
          <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Arrivée</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" size={18} />
            <Input
              required
              className="bg-white/5 border-white/10 pl-10 text-gray-200 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all py-6"
              onChange={(e) => setFormData({...formData, arrivee: e.target.value})}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div whileHover={{ x: 5 }} className="space-y-2">
            <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Volume (m³)</Label>
            <div className="relative">
              <Truck className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500/50" size={16} />
              <Input
                type="number"
                className="bg-white/5 border-white/10 pl-10 text-gray-200 py-6"
                onChange={(e) => setFormData({...formData, volume: e.target.value})}
              />
            </div>
          </motion.div>
          
          <motion.div whileHover={{ x: 5 }} className="space-y-2">
            <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Téléphone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500/50" size={16} />
              <Input
                required
                type="tel"
                className="bg-white/5 border-white/10 pl-10 text-gray-200 py-6"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            variant={"orange"}
            className="w-full  font-black py-7 mt-4 shadow-orange-800 flex items-center justify-center gap-3 group"
          >
            ESTIMER MON PROJET
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Button>
        </motion.div>

        <p className="text-xs text-gray-500 text-center mt-4 uppercase tracking-tighter italic">
          <LockKeyhole className="inline mr-1" size={12} /> Vos données sont protégées et ne sont pas partagées.
        </p>
      </form>
    </motion.div>
  );
};

export default QuoteForm;