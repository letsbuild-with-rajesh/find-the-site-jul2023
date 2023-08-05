'use client'
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ISiteData } from "@/app/types";
import Loader from "@/app/components/Loader";
import SiteCard from "@/app/components/SiteCard";

const RANDOM_SITE_INIT_STATE = {
  loading: false,
  data: { API: '', Description: '', Link: '', Category: '' }
};

const SEARCH_RESULTS_INIT_STATE = {
  loading: false,
  data: []
};


export default function HomePage({ mySpaceSites }: { mySpaceSites: Array<string> }) {
  const [randomSiteDetails, setRandomSiteDetails] = useState<{ loading: boolean, data: ISiteData }>(RANDOM_SITE_INIT_STATE);
  const [searchInput, setSearchInput] = useState('');
  const [searchResultsDetails, setSearchResultsDetails] = useState<{ loading: boolean, data: Array<ISiteData> }>(SEARCH_RESULTS_INIT_STATE);

  const getRandomSite = async () => {
    setSearchResultsDetails(SEARCH_RESULTS_INIT_STATE);
    setRandomSiteDetails({ ...randomSiteDetails, loading: true });
    const res = await fetch('/api/randomsite', { next: { revalidate: 0 } });
    const { data } = await res.json();
    setRandomSiteDetails({ loading: false, data });
  }

  const getSearchResults = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRandomSiteDetails(RANDOM_SITE_INIT_STATE);
    setSearchResultsDetails({ ...searchResultsDetails, loading: true });
    const titleRes = await fetch(`https://api.publicapis.org/entries?title=${searchInput}`);
    const { entries: titleEntries } = await titleRes.json();

    const descriptionRes = await fetch(`https://api.publicapis.org/entries?description=${searchInput}`);
    const { entries: descriptionEntries } = await descriptionRes.json();

    const entries: Array<ISiteData> = [];
    const existingEntries: { [key: string]: boolean } = {};

    [...titleEntries, ...descriptionEntries].map((site: ISiteData) => {
      if (!existingEntries[site.Link]) {
        existingEntries[site.Link] = true;
        entries.push(site);
      }
    })

    setSearchResultsDetails({ loading: false, data: entries });
  }

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="p-4 text-center">Find the site!</h1>
      <ul className="nav nav-pills d-flex justify-content-center gap-4">
        <li className="nav-item">
          <button className="nav-link active" onClick={getRandomSite}>Get a random site</button>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/myspace">My Space</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/categories">Categories</Link>
        </li>
      </ul>
      <form className="form-inline d-flex gap-3 m-3" onSubmit={getSearchResults}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search site"
          aria-label="Search site"
          onChange={e => setSearchInput(e.target.value)}
        />
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
      {(randomSiteDetails.loading || searchResultsDetails.loading) && <div className="m-4"><Loader containerHeightStyle="h-100" /></div>}
      {randomSiteDetails.data.API && (
        <div className="d-flex justify-content-center m-4">
          <SiteCard data={randomSiteDetails.data} isMySpaceSite={mySpaceSites.includes(randomSiteDetails.data.Link)} />
        </div>
      )}
      {!!searchResultsDetails.data.length && (
        <div className="d-flex flex-wrap justify-content-center gap-3 m-4">
          {searchResultsDetails.data.map((site: ISiteData) => {
            return <SiteCard data={site} isMySpaceSite={mySpaceSites.includes(site.Link)} />
          })}
        </div>
      )}
    </div>
  )
}
