import Image from 'next/image';

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

async function getWordPressData(): Promise<WordPressData | null> {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  if (!apiUrl) {
    console.error("API URL is missing!");
    return null;
  }

  try {
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

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Fetch failed with status: ${res.status}`);
      return null;
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error details:", error);
    return null;
  }
}

export default async function Home() {
  const data = await getWordPressData();

  // Safety check bach s-site may-t-plantach i-la kant l-data na9sa
  if (!data || !data.posts || !data.generalSettings) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center p-8 border border-red-500 rounded-lg">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Connection Error</h1>
          <p className="text-gray-400 mb-2">WordPress API is not responding correctly.</p>
          <code className="text-xs bg-black p-2 rounded block">
            Target: {process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'URL NOT FOUND'}
          </code>
          <p className="mt-4 text-sm font-light text-gray-500 italic">
            Check your Environment Variables in Vercel.
          </p>
        </div>
      </div>
    );
  }

  const posts = data.posts.nodes;

  return (
    <main className="min-h-screen p-8 bg-gray-50 font-sans text-gray-900">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-black tracking-tight mb-4">
          {data.generalSettings.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {data.generalSettings.description}
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <article 
            key={post.slug} 
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
          >
            {post.featuredImage?.node.sourceUrl && (
              <Image
                src={post.featuredImage.node.sourceUrl} 
                alt={post.title}
                className="w-full h-48 object-cover rounded-xl mb-4" 
                width={400}
                height={200}
              />
            )}
            <h2 className="text-2xl font-bold mb-3 leading-tight">{post.title}</h2>
            <div 
              className="text-gray-600 text-sm line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt }} 
            />
          </article>
        ))}
      </section>

      <footer className="mt-20 py-10 border-t border-gray-200 text-center text-gray-400 text-sm">
        <p>© 2026 {data.generalSettings.title}. Built with Next.js & WordPress.</p>
      </footer>
    </main>
  );
}