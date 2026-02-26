import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Truck,
  Globe,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0a0c10] border-t border-gray-800 pt-16 pb-8 px-6">
      <div className="2xl:max-w-7xl lg:max-w-5xl max-w-sm mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-green-600 p-2 rounded-lg text-white">
              <Truck size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase italic">
              CERDJIO <span className="text-green-500">MOVE</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Votre partenaire de confiance pour le déménagement international.
            Liaisons quotidiennes à travers toute l&apos;Europe avec une
            sécurité garantie.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        <div className="lg:justify-self-center">
          <h4 className="text-white font-bold mb-6 text-lg">Services Europe</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>
              <Link
                href="/services/paris-berlin" 
                className="hover:text-green-500 transition-colors flex items-center gap-2"
              >
                <span>→</span> Déménagement Paris / Berlin
              </Link>
            </li>
            <li>
              <Link
                href="/services/groupage" 
                className="hover:text-green-500 transition-colors flex items-center gap-2"
              >
                <span>→</span> Transport de colis & Groupage
              </Link>
            </li>
            <li>
              <Link
                href="/garde-meubles" 
                className="hover:text-green-500 transition-colors flex items-center gap-2"
              >
                <span>→</span> Garde-meubles sécurisé
              </Link>
            </li>
            <li>
              <Link
                href="/services/entreprises" 
                className="hover:text-green-500 transition-colors flex items-center gap-2"
              >
                <span>→</span> Solutions Logistiques Pro
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
            <Globe size={18} className="text-green-500" /> Bureau France
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-green-500 shrink-0" />
              <span>12 Rue des Vignettes, 60490 Cuvilly, France</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-green-500 shrink-0" />
              <span>03 44 93 01 17</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-green-500 shrink-0" />
              <span> demenagement.cerdjio@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="2xl:max-w-7xl lg:max-w-5xl max-w-sm mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© 2026 CERDJIO MOVE. Tous droits réservés.</p>
        <div className="flex gap-6 uppercase tracking-widest font-medium">
          <Link href="#" className="hover:text-white transition-colors">
            Mentions Légales
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Politique Cookies
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            CGV
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
