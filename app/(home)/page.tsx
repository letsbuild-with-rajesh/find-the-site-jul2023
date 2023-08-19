import HomePage from "./HomePage";
import { getMySpaceSitesArray } from "@/app/utils/server-utils";

export default async function Home() {
  const mySpaceSites = await getMySpaceSitesArray();
  return (
    <main>
      <HomePage mySpaceSites={mySpaceSites} />
    </main>
  );
}

export const dynamic = 'force-dynamic';