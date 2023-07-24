'use client'
import Link from "next/link";

export default function CategoriesPage({ categories }: { categories: Array<string> }) {
	return (
		<div className="container-fluid min-vh-100">
			<nav aria-label="breadcrumb">
				<ol style={{ "--bs-breadcrumb-font-size": "1.75rem" } as React.CSSProperties} className="breadcrumb py-4">
					<li className="breadcrumb-item link-primary text-decoration-underline"><a href="/">Home</a></li>
					<li className="breadcrumb-item active " aria-current="page">Categories</li>
				</ol>
			</nav>
			<div className="d-flex flex-wrap gap-4">
				<style jsx>{`
        .card:hover {
          background-color: orange;
          color: #fff;
          cursor: pointer;
        }
      `}</style>
				{
					categories.map((category) => {
						return (
							<Link key={category} href={`/categories/${category.toLowerCase().split(' ')[0]}`} className="card-link">
								<div className="card">
									<div className="card-body">{category}</div>
								</div>
							</Link>
						)
					})
				}
			</div>
		</div >
	)
}
