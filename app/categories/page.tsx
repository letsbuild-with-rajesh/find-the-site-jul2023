import CategoriesPage from "./CategoriesPage";

async function getCategories() {
	const res = await fetch(
		"https://api.publicapis.org/categories",
		{ next: { revalidate: 60 } }
	);
	const data = await res.json();
	return data.categories;
}

export default async function Categories() {
	const categories = await getCategories();
	return (
		<main>
			<CategoriesPage categories={categories} />
		</main>
	);
}
