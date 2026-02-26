"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Truck, Phone, Loader2, LockKeyhole } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const QuoteForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    depart: "",
    arrivee: "",
    phone: "",
    volume: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          setIsSending(false);
          setSubmitted(true);
          alert("Votre demande a été envoyée avec succès !");
          formRef.current?.reset(); 
          setFormData({           
            depart: "",
            arrivee: "",
            phone: "",
            volume: "",
          });
        },
        (error) => {
          setIsSending(false);
          alert("Erreur lors de l'envoi. Réessayez plus tard.");
          console.log(error.text);
        },
      );
  };

  if (submitted) {
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-8 rounded-3xl border border-white/10 shadow-2xl bg-gray-900/40 backdrop-blur-xl relative overflow-hidden group"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-500/10 blur-[80px] group-hover:bg-green-500/20 transition-all duration-700" />
      <h3 className="text-2xl font-bold mb-6 text-white text-center">
        Devis Express{" "}
        <span className="text-green-500 text-sm block font-normal mt-1">
          Gratuit & Sans engagement
        </span>
      </h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 relative z-10"
      >
        <motion.div whileHover={{ x: 5 }} className="space-y-2">
          <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">
            Départ
          </Label>
          <div className="relative">
            <MapPin
              className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500"
              size={18}
            />
            <Input
              name="from_address"
              required
              onChange={(e) =>
                setFormData({ ...formData, depart: e.target.value })
              }
              className="bg-white/5 border-white/10 pl-10 text-gray-200 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all py-6"
            />
          </div>
        </motion.div>

        <motion.div whileHover={{ x: 5 }} className="space-y-2">
          <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">
            Arrivée
          </Label>
          <div className="relative">
            <MapPin
              className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500"
              size={18}
            />
            <Input
              name="to_address"
              required
              onChange={(e) =>
                setFormData({ ...formData, arrivee: e.target.value })
              }
              className="bg-white/5 border-white/10 pl-10 text-gray-200 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all py-6"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div whileHover={{ x: 5 }} className="space-y-2">
            <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              Volume (m³)
            </Label>
            <div className="relative">
              <Truck
                className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500/50"
                size={16}
              />
              <Input
                name="total_volume"
                type="number"
                onChange={(e) =>
                  setFormData({ ...formData, volume: e.target.value })
                }
                className="bg-white/5 border-white/10 pl-10 text-gray-200 py-6"
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="space-y-2">
            <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              Téléphone
            </Label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500/50"
                size={16}
              />
              <Input
                name="user_phone"
                required
                type="tel"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="bg-white/5 border-white/10 pl-10 text-gray-200 py-6"
              />
            </div>
          </motion.div>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={isSending}
            variant={"green"}
            className="w-full  font-black py-7 mt-4 shadow-green-800 flex items-center justify-center gap-3 group"
          >
            {isSending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                ESTIMER MON PROJET
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </>
            )}
          </Button>
        </motion.div>
        <p className="text-xs text-gray-500 text-center mt-4 uppercase tracking-tighter italic">
          <LockKeyhole className="inline mr-1" size={12} /> Vos données sont
          protégées et ne sont pas partagées.
        </p>
      </form>
    </motion.div>
  );
};

export default QuoteForm;
