'use client'
import Link from "next/link";
import { ISiteData } from "@/app/types";
import { addSiteToMySpace, removeSiteFromMySpace } from '@/app/utils/client-utils';

export default function SiteCard({
  data, isMySpaceSite, syncWithMySpace = () => undefined
}: {
  data: ISiteData, isMySpaceSite: boolean, syncWithMySpace: () => void
}) {
  const { API, Link: SiteLink, Description } = data;

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
                onClick={() => removeSiteFromMySpace(SiteLink, syncWithMySpace)}
              >
                &#10084;
              </span>
              : <span
                role="button"
                className="h2 m-0 d-flex align-items-center"
                onClick={() => addSiteToMySpace(data, syncWithMySpace)}
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
