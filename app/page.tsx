import Image from "next/image";

interface Post {
  title: string;
  excerpt: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

interface WordPressData {
  posts: {
    nodes: Post[];
  };
  generalSettings: {
    title: string;
    description: string;
  };
}

async function getWordPressData(): Promise<WordPressData> {
  const query = `
    {
      posts(first: 10) {
        nodes {
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      generalSettings {
        title
        description
      }
    }
  `;

  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 }, 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data from WordPress");
  }

  const { data } = await res.json();
  return data;
}

export default async function Home() {
  const data = await getWordPressData();
  const posts = data.posts.nodes;

  return (
    <main className="min-h-screen p-8 bg-gray-50 font-sans">
      <header className="mb-16 text-center">
        <h1 className="text-6xl font-black text-gray-900 tracking-tight">
          {data.generalSettings.title}
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          {data.generalSettings.description}
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <article 
            key={post.slug} 
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {post.featuredImage?.node?.sourceUrl && (
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <div 
                className="mt-3 text-gray-600 leading-relaxed line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt }} 
              />
              <div className="mt-6 pt-6 border-t border-gray-50">
                <span className="text-blue-500 font-bold inline-flex items-center">
                  Read Article 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-20 py-10 border-t border-gray-200 text-center text-gray-400">
        <p>© 2026 {data.generalSettings.title}. Powered by Next.js & Headless WordPress.</p>
      </footer>
    </main>
  );
}