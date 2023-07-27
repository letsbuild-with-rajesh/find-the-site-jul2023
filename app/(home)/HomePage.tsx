'use client'
import Link from "next/link";
import { useState } from "react";
import { ISiteData } from "@/app/types";
import Loader from "@/app/components/Loader";
import SiteCard from "@/app/components/SiteCard";

export default function HomePage() {
  const [randomSiteDetails, setRandomSiteDetails] = useState<{ loading: boolean, data: ISiteData }>({
    loading: false,
    data: { API: '', Description: '', Link: '', Category: '' }
  });


  const getRandomSite = async () => {
    setRandomSiteDetails({ ...randomSiteDetails, loading: true });
    const res = await fetch('/api/randomsite', { next: { revalidate: 0 } });
    const { data } = await res.json();
    setRandomSiteDetails({ loading: false, data });
  }

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="p-4 text-center">Find the site!</h1>
      <ul className="nav nav-pills d-flex justify-content-center gap-4">
        <li className="nav-item">
          <button className="nav-link active" onClick={getRandomSite}>Get a random site</button>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">My Space</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/categories">Categories</Link>
        </li>
      </ul>
      <div>
        {randomSiteDetails.loading
          ? <div className="m-4"><Loader containerHeightStyle="h-100" /></div>
          : randomSiteDetails.data.API && (
            <div className="d-flex justify-content-center m-4">
              <SiteCard data={randomSiteDetails.data} />
            </div>
          )
        }
      </div>
    </div>
  )
}
