import CategoryPage from "./CategoryPage";

async function getSites(category: string | undefined) {
  const res = await fetch(
    `https://api.publicapis.org/entries?category=${category}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data.entries;
}

export default async function Category({
  params: { category },
}: {
  params: { category: string | undefined };
}) {
  const sitesData = await getSites(category);
  return (
    <main>
      <CategoryPage category={category} data={sitesData} />
    </main>
  );
}
