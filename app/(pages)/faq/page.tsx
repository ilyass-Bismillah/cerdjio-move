import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Quelles zones couvrez-vous en Europe ?",
    a: "Nous couvrons toute l'Union Européenne, avec des liaisons régulières entre la France, la Belgique, l'Espagne, l'Allemagne, l'Italie et le Luxembourg.",
  },
  {
    q: "Mon mobilier est-il assuré pendant le transport ?",
    a: "Oui, chaque déménagement bénéficie d'une assurance contractuelle couvrant les dommages éventuels durant le transport et la manutention.",
  },
  {
    q: "Proposez-vous des cartons et du matériel d'emballage ?",
    a: "Absolument. Nous pouvons fournir tout le matériel nécessaire (cartons, papier bulle, housses) ou même réaliser l'emballage complet de vos biens.",
  },
  {
    q: "Combien de temps à l'avance dois-je réserver ?",
    a: "Idéalement, nous recommandons de réserver 2 à 4 semaines à l'avance, surtout pendant la période estivale qui est très demandée.",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-[#0f1117] min-h-screen pt-32 pb-20 px-6 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            QUESTIONS <span className="text-orange-500">FRÉQUENTES</span>
          </h1>
          <p className="text-gray-400">
            Tout ce que vous devez savoir pour préparer votre déménagement en
            toute sérénité.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="space-y-4"
        >
          {faqs.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden p-6 hover:border-gray-700 transition-colors">
              <AccordionTrigger className="text-lg font-bold text-orange-500 mb-3 italic">{item.q}</AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 p-8 rounded-3xl bg-orange-600 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Vous avez une autre question ?
          </h2>
          <p className="mb-6 opacity-90 font-medium">
            Nos conseillers sont à votre écoute pour vous aider.
          </p>
          <Button
            variant={"outline"}
            className="text-orange-600 hover:bg-gray-200 hover:text-orange-700 font-bold"
          >
            Contactez-nous
          </Button>
        </div>
      </div>
    </div>
  );
}
