'use client'
import Link from "next/link";
import { ISiteData } from "@/app/types";

export default function SiteCard({ data }: { data: ISiteData }) {
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
					<Link
						href={SiteLink}
						target="_blank"
						style={{ color: 'darkturquoise' }}
						className="card-link text-center fs-4 text-decoration-underline"
					>
						{API}
					</Link>
					<div style={{ color: 'deeppink' }} className="description text-justify">{Description}</div>
				</div>
			</div>
		</>
	)
}
