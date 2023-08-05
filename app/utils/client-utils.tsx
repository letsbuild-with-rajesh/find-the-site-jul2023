import { ISiteData, IMySpaceSiteResponseData } from "../types";

export const getLatestMySpaceSites = async () => {
	const res = await fetch("/api/site", { next: { revalidate: 0 } });

	if (!res.ok) {
		console.error(res)
		return;
	}
	const { data } = await res.json();
	return data.map((site: IMySpaceSiteResponseData) => site.details);
}

export const getLatestMySpaceSitesList = async () => {
	const sites = await getLatestMySpaceSites();
	const sitesList = sites.map((sites: ISiteData) => sites.Link);
	return sitesList;
}

export const addSiteToMySpace = async (data: ISiteData, cb: () => void) => {
	const res = await fetch("/api/site", {
		method: "POST",
		body: JSON.stringify({ ...data }),
		headers: { "content-type": "application/json" },
	});

	if (!res.ok) {
		console.error(res)
		return;
	}
	cb();
}

export const removeSiteFromMySpace = async (domain: string, cb: () => void) => {
	const res = await fetch("/api/site", {
		method: "DELETE",
		body: JSON.stringify({ domain }),
		headers: { "content-type": "application/json" },
	});

	if (!res.ok) {
		console.error(res)
		return;
	}
	cb();
}