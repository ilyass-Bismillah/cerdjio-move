async function getPageData(slug: string) {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  if (!apiUrl) return null;

  const query = `
    query GetPageBySlug($id: ID!) {
      page(id: $id, idType: URI) {
        title
        content
      }
    }
  `;

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        query,
        variables: { id: slug } 
      }),
      next: { revalidate: 60 }
    });
    const { data } = await res.json();
    return data?.page;
  } catch {
    return null;
  }
}

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const page = await getPageData(params.slug);

  if (!page) {
    return <div className="text-white p-20 text-center">Page introuvable</div>;
  }

  return (
    <main className="bg-[#12141d] text-white pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-blue-500">{page.title}</h1>
        <div 
          className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: page.content }} 
        />
      </div>
    </main>
  );
}