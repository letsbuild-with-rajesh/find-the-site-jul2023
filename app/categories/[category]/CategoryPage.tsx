'use client'
import Link from "next/link";

type SiteData = {
  API: string,
  Description: string,
  Link: string,
  Category: string
}

export default function CategoryPage({ category, data }: { category: string | undefined, data: Array<SiteData> }) {
  return (
    <div className="container-fluid min-vh-100">
      <nav aria-label="breadcrumb">
        <ol style={{ "--bs-breadcrumb-font-size": "1.75rem" } as React.CSSProperties} className="breadcrumb py-4">
          <li className="breadcrumb-item link-primary text-decoration-underline"><a href="/">Home</a></li>
          <li className="breadcrumb-item link-primary text-decoration-underline"><a href="/categories">Category</a></li>
          <li className="breadcrumb-item active " aria-current="page">{data[0]?.Category || category}</li>
        </ol>
      </nav>
      <div className="d-flex flex-wrap gap-4 pb-5">
        <style jsx>{`
        .description {
          text-align: justify;
          text-justify: inter-word;
        }
      `}</style>
        {
          data.map((site) => {
            return (
              <div key={site.API} style={{ maxWidth: '320px' }} className="card">
                <div className="card-body d-flex flex-column gap-2 pt-1">
                  <Link href={site.Link} target="_blank" style={{ color: 'darkturquoise' }} className="card-link text-center fs-4">{site.API}</Link>
                  <div style={{ color: 'deeppink' }} className="description text-justify">{site.Description}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}
