"use client";
import React, { useState, useRef } from "react"; // 1. Zid useRef
import emailjs from "@emailjs/browser"; // 2. Import emailjs
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Truck, Phone, CheckCircle2, LockKeyhole, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const QuoteForm = () => {
  const formRef = useRef<HTMLFormElement>(null); // 3. Create Ref
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
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsSending(false);
          setSubmitted(true);
        },
        (error) => {
          setIsSending(false);
          alert("Erreur lors de l'envoi. Réessayez plus tard.");
          console.log(error.text);
        }
      );
  };

  if (submitted) {
  }

  return (
    <motion.div>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 relative z-10">
        
        <div className="space-y-2">
          <Label>Départ</Label>
          <div className="relative">
            <MapPin className="..." size={18} />
            <Input
              name="from_address"
              required
              onChange={(e) => setFormData({ ...formData, depart: e.target.value })}
              className="..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Arrivée</Label>
          <div className="relative">
            <MapPin className="..." size={18} />
            <Input
              name="to_address" 
              required
              onChange={(e) => setFormData({ ...formData, arrivee: e.target.value })}
              className="..."
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Volume (m³)</Label>
            <div className="relative">
              <Truck className="..." size={16} />
              <Input
                name="total_volume" 
                type="number"
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                className="..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Téléphone</Label>
            <div className="relative">
              <Phone className="..." size={16} />
              <Input
                name="user_phone" 
                required
                type="tel"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="..."
              />
            </div>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={isSending} 
            variant={"green"}
            className="..."
          >
            {isSending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                ESTIMER MON PROJET
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </>
            )}
          </Button>
        </motion.div>
        </form>
    </motion.div>
  );
};

export default QuoteForm;