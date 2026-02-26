"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react'; 
import Link from 'next/link';

const WhatsAppWidget = () => {
  const phoneNumber = "0613057572"; 
  const message = "Bonjour Cerdjio Move, je souhaite avoir plus d'informations sur vos services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group cursor-pointer"
    >
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-black uppercase italic px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-100">
        Discuter sur WhatsApp
      </span>
      
      <div className="bg-[#25D366] p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform active:scale-95 relative z-10">
        <MessageCircle size={32} color="white" fill="white" />
      </div>

      <div className="absolute inset-0 bg-[#25D366] rounded-full z-0 animate-ping opacity-30"></div>
    </Link>
  );
}

export default WhatsAppWidget;