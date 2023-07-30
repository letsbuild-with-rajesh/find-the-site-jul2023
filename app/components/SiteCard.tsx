'use client'
import Link from "next/link";
import { ISiteData } from "@/app/types";

export default function SiteCard({ data, isMySpaceSite }: { data: ISiteData, isMySpaceSite: boolean }) {
  const { API, Link: SiteLink, Description } = data;
  const addSiteToMySpace = async () => {
    const res = await fetch("/api/site", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: { "content-type": "application/json" },
    });

    if (!res.ok) {
      console.error(res)
      return;
    }
    window.location.reload();
  }

  const removeSiteFromMySpace = async () => {
    const res = await fetch("/api/site", {
      method: "DELETE",
      body: JSON.stringify({ domain: SiteLink }),
      headers: { "content-type": "application/json" },
    });

    if (!res.ok) {
      console.error(res)
      return;
    }
    window.location.reload();
  }

  return (
    <>
      <style jsx>{`
        .description {
          text-align: justify;
          text-justify: inter-word;
        }
      `}</style>
      <div style={{ maxWidth: '320px' }} className="card shadow border-0">
        <div className="card-body d-flex flex-column gap-2 pt-1">
          <div className="d-flex">
            <Link
              href={SiteLink}
              target="_blank"
              style={{ color: 'darkturquoise' }}
              className="card-link text-center fs-4 text-decoration-underline"
            >
              {API}
            </Link>
            &nbsp;
            {isMySpaceSite
              ? <span
                role="button"
                className="h4 m-0 d-flex align-items-center text-danger"
                onClick={removeSiteFromMySpace}
              >
                &#10084;
              </span>
              : <span
                role="button"
                className="h2 m-0 d-flex align-items-center"
                onClick={addSiteToMySpace}
              >
                &#9825;
              </span>
            }
          </div>
          <div style={{ color: 'deeppink' }} className="description text-justify">{Description}</div>
        </div>
      </div>
    </>
  )
}
