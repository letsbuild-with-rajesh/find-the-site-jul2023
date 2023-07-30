'use client'
import { ISiteData } from "@/app/types";
import SiteCard from "@/app/components/SiteCard";

export default function MySpacePage({ data }: { data: Array<ISiteData> }) {
  return (
    <div className="container-fluid min-vh-100">
      <nav aria-label="breadcrumb">
        <ol style={{ "--bs-breadcrumb-font-size": "1.75rem" } as React.CSSProperties} className="breadcrumb py-4">
          <li className="breadcrumb-item link-primary text-decoration-underline"><a href="/">Home</a></li>
          <li className="breadcrumb-item active"><a href="/categories">My Space</a></li>
        </ol>
      </nav>
      <div className="d-flex flex-wrap gap-4 pb-5">
        <style jsx>{`
        .description {
          text-align: justify;
          text-justify: inter-word;
        }
      `}</style>
        {data.map((site) => <SiteCard key={site.API} data={site} isMySpaceSite={true} />)}
      </div>
    </div >
  )
}
