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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 },
      cache: "no-store",
    });

    if (!res.ok) return null;

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function Home() {
  const data = await getWordPressData();

  if (!data || !data.posts || !data.generalSettings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Error!</h1>
          <p className="text-gray-600">
            Check in NEXT_PUBLIC_WORDPRESS_API_URL.
          </p>
        </div>
      </div>
    );
  }

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
          <article key={post.slug} className="..."></article>
        ))}
      </section>

      <footer className="mt-20 py-10 border-t border-gray-200 text-center text-gray-400">
        <p>© 2026 {data.generalSettings.title}.</p>
      </footer>
    </main>
  );
}
