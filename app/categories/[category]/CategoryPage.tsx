'use client'
import Link from "next/link";
import { ISiteData } from "@/app/types";
import SiteCard from "@/app/components/SiteCard";

export default function CategoryPage({ category, data }: { category: string | undefined, data: Array<ISiteData> }) {
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
        {data.map((site) => <SiteCard key={site.API} data={site} />)}
      </div>
    </div >
  )
}
