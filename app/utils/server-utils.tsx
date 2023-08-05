import { ISiteData, IMySpaceSiteResponseData } from "@/app/types";
import { GET as getMySpaceSitesFromDb } from "@/app/(home)/api/site/route";

export async function getMySpaceSites() {
	const res = await getMySpaceSitesFromDb();
	const data = await res?.json();
	return data.data.map((site: IMySpaceSiteResponseData) => site.details);
}

export async function getMySpaceSitesArray() {
	const mySpaceSitesData = await getMySpaceSites();
	const mySpaceSites = mySpaceSitesData.map((sites: ISiteData) => sites.Link);
	return mySpaceSites;
}