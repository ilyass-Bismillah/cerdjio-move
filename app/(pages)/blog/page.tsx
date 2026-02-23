import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "Comment préparer son déménagement en France sans stress ?",
    excerpt: "Découvrez notre check-list complète pour organiser votre départ et ne rien oublier le jour J.",
    date: "20 Fév 2026",
    readTime: "5 min",
    category: "Conseils",
    image: "/préparer.png"
  },
  {
    id: 2,
    title: "Déménagement International : Quelles assurances choisir ?",
    excerpt: "Tout savoir sur l'assurance dommage et la responsabilité contractuelle pour protéger vos meubles.",
    date: "15 Fév 2026",
    readTime: "8 min",
    category: "Sécurité",
    image: "/assurance.png"
  },
  {
    id: 3,
    title: "Le guide du garde-meuble en Europe",
    excerpt: "Pourquoi et comment utiliser un garde-meuble sécurisé lors d'une transition entre deux logements.",
    date: "10 Fév 2026",
    readTime: "6 min",
    category: "Logistique",
    image: "/meuble.png"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-[#0f1117] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-600/10 text-orange-500 px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
            <BookOpen size={16} /> Le Blog Cerdjio
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            CONSEILS & <span className="text-orange-500">ACTUALITÉS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Retrouvez tous nos guides pour réussir votre déménagement partout en Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300">
              
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={post.image}  
                  alt={post.title}
                  width={500}
                  height={140}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-wider group/link"
                >
                  Lire l&apos;article 
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 p-10 md:p-16 rounded-[3rem] bg-linear-to-br from-gray-900 to-orange-900/20 border border-gray-800 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Besoin d&apos;un conseil personnalisé ?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Nos experts sont à votre disposition pour répondre à toutes vos questions sur la logistique en Europe.</p>
          <Link href="/contact">
            <Button variant={"orange"} className="px-10 py-6 font-black uppercase tracking-widest transition-all">
              Contactez un expert
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}