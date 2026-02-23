import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    slug: "preparation-demenagement-france",
    title: "Comment préparer son déménagement en France sans stress ?",
    excerpt:
      "Découvrez nos conseils d'experts pour organiser votre départ en toute sérénité, de la check-list au jour J.",
    date: "24 Fév 2026",
    author: "Yassine Mansouri",
    readTime: "6 min",
    category: "Conseils",
    image: "/préparer.png",
    content: `
      Le déménagement est souvent classé parmi les événements les plus stressants de la vie. Cependant, avec une planification rigoureuse, il peut devenir une transition fluide vers votre nouvelle vie.

      ## 1. Établir un rétroplanning
      L'erreur la plus commune est de s'y prendre à la dernière minute. Commencez au moins 2 mois avant la date prévue :
      * **M-2 :** Triez vos affaires et commencez à donner ou vendre ce que vous ne gardez pas.
      * **M-1 :** Réservez votre déménageur professionnel et commencez les cartons des objets non essentiels.
      * **J-15 :** Gérez vos contrats (eau, électricité, internet) et prévenez les administrations.

      ## 2. Le matériel indispensable
      Ne sous-estimez pas la quantité de cartons nécessaires. Prévoyez du ruban adhésif de qualité, du papier bulle pour le fragile et des marqueurs pour identifier chaque carton par pièce de destination.

      ## 3. Le kit de survie pour le Jour J
      Gardez avec vous un sac contenant vos documents importants, chargeurs, médicaments et de quoi tenir 24h sans ouvrir tous les cartons.
    `,
  },
  {
    id: 2,
    slug: "assurances-demenagement-international",
    title: "Déménagement International : Quelles assurances choisir ?",
    excerpt:
      "Tout savoir sur la responsabilité contractuelle et l'assurance dommage pour protéger vos biens au-delà des frontières.",
    date: "20 Fév 2026",
    author: "Sami Raouf",
    readTime: "8 min",
    category: "Sécurité",
    image: "/assurance.png",
    content: `
      Partir à l'étranger implique des risques logistiques plus élevés. Comprendre les garanties offertes par votre déménageur est crucial pour votre tranquillité d'esprit.

      ## Responsabilité Contractuelle vs Assurance Dommage
      La responsabilité contractuelle est limitée par la loi. Si un sinistre survient sans faute prouvée du transporteur (tempête, accident tiers), vous pourriez ne pas être remboursé. 
      L'**Assurance Dommage (Ad Valorem)** couvre vos biens sur la base de leur valeur déclarée, peu importe la responsabilité.

      ## La déclaration de valeur
      C'est le document le plus important. Listez chaque objet de valeur et son prix de remplacement. Sans ce document, l'indemnisation sera forfaitaire et souvent insuffisante.

      ## Les spécificités de l'Europe
      Pour un trajet France-Maroc ou inter-Europe, vérifiez que l'assurance couvre bien le transit maritime si nécessaire.
    `,
  },
  {
    id: 3,
    slug: "guide-garde-meuble-europe",
    title: "Le guide du garde-meuble en Europe",
    excerpt:
      "Besoin de stocker vos meubles entre deux logements ? Voici comment choisir la meilleure option de stockage sécurisé.",
    date: "15 Fév 2026",
    author: "Lila Haddad",
    readTime: "5 min",
    category: "Logistique",
    image: "/meuble.png",
    content: `
      Que ce soit pour une transition de quelques semaines ou pour plusieurs mois, le garde-meuble est la solution flexible par excellence pour les expatriés et les voyageurs.

      ## Comment choisir son centre de stockage ?
      Tous les centres ne se valent pas. Voici les critères de sélection :
      * **Sécurité :** Vidéosurveillance 24/7, contrôle d'accès individuel et alarmes incendie.
      * **Propreté :** Un centre sec et ventilé est indispensable pour éviter les moisissures sur vos tissus et bois.
      * **Accessibilité :** Pouvez-vous accéder à votre box le dimanche ou tard le soir ?

      ## Optimiser l'espace dans son box
      Pour payer moins cher, optimisez chaque mètre carré :
      * Démontez tous les meubles possibles.
      * Placez les objets lourds en bas et les plus légers en haut.
      * Laissez un petit couloir au milieu pour accéder aux objets du fond sans tout sortir.
    `,
  },
];

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Article non trouvé.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Button variant={"link"}>
        <Link
          href="/blog"
          className="flex items-center text-orange-500 hover:text-orange-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
        </Link>
        </Button>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-500" /> {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-orange-500" /> Par {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" /> {post.readTime} de
              lecture
            </div>
          </div>
        </header>

        <div className="relative h-100 w-full mb-12 rounded-2xl overflow-hidden border border-white/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <article className="prose prose-invert prose-orange max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6 whitespace-pre-line text-lg">
            {post.content}
          </div>
        </article>

        <div className="mt-16 p-8 rounded-2xl bg-linear-to-br from-orange-500/10 to-transparent border border-orange-500/20 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Besoin d&apos;aide pour votre déménagement ?
          </h3>
          <p className="text-gray-400 mb-6">
            Demandez votre devis gratuit en quelques minutes seulement.
          </p>
          <Button variant={"orange"} className="font-bold transition-all px-8 py-5">
            <Link href="/contact">Obtenir un devis</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
