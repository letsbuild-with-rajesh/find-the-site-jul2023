'use client'
import { useState } from 'react';
import { ISiteData } from "@/app/types";
import SiteCard from "@/app/components/SiteCard";
import { getLatestMySpaceSites } from '@/app/utils/client-utils';

export default function MySpacePage({ data }: { data: Array<ISiteData> }) {
  const [sitesData, setSitesData] = useState<Array<ISiteData>>(data);

  const syncWithMySpace = async () => {
    const latestSitesData = await getLatestMySpaceSites();
    setSitesData(latestSitesData);
  };

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
        {sitesData.map((site) => <SiteCard key={site.API} data={site} isMySpaceSite={true} syncWithMySpace={syncWithMySpace} />)}
      </div>
    </div >
  )
}
